const https = require("https");
const fs = require("fs");

const AI_API_KEY = process.env.AI_API_KEY;
const AI_API_URL = process.env.AI_API_URL || "https://apihub.agnes-ai.com/v1";
const AI_MODEL = process.env.AI_MODEL || "agnes-2.5-flash";

function apiCall(messages) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: AI_MODEL,
      messages,
      max_tokens: 4096,
      temperature: 0.3,
    });

    const req = https.request(
      `${AI_API_URL}/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AI_API_KEY}`,
          rejectUnauthorized: false,
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

async function categorizePlugins(repos) {
  const chunkSize = 15;
  const chunks = [];
  for (let i = 0; i < repos.length; i += chunkSize) {
    chunks.push(repos.slice(i, i + chunkSize));
  }

  const allResults = [];

  for (let ci = 0; ci < chunks.length; ci++) {
    const chunk = chunks[ci];
    const startIndex = ci * chunkSize + 1;

    const repoList = chunk
      .map(
        (r, idx) =>
          `${startIndex + idx}. "${r.name}" | stars:${r.stars} | lang:${r.language} | topics:[${(r.topics || []).join(",")}] | desc:"${r.desc.substring(0, 150)}"`
      )
      .join("\n");

    const systemPrompt = `You are an expert plugin curator for the DeepSeek Harness (DSH) ecosystem. You analyze plugins and assign them to exactly ONE category from this list:

- Coding Agents & Harness Tools
- UI & Desktop Extensions
- Memory & Knowledge (RAG)
- Agent Skills & Workflows
- MCP Servers & Tools
- Visual & Design
- Browser & Web Automation
- Communication & Social
- Utilities & Infrastructure
- Themes & Skins
- Research & Analysis
- Other

Return ONLY valid JSON array. No markdown, no explanation.`;

    const userPrompt = `Categorize these DSH ecosystem plugins. For each plugin assign it to the most appropriate category and provide a brief recommendation reason in both English and Chinese (max 40 chars each).

Plugins to categorize:
${repoList}

Return JSON array:
[
  {
    "name": "full/repo/name",
    "stars": 123,
    "language": "TypeScript",
    "category": "Category Name",
    "recommendation": "Why this plugin is good (English, max 40 chars)",
    "recommendation_zh": "推荐原因（中文，最多40字）",
    "tags": ["tag1","tag2"]
  }
]`;

    console.log(`Processing chunk ${ci + 1}/${chunks.length} (${chunk.length} plugins)...`);

    try {
      const response = await apiCall([
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ]);

      const content = response.choices?.[0]?.message?.content || "";
      const match = content.match(/\[[\s\S]*\]/);
      if (match) {
        const categorized = JSON.parse(match[0]);
        allResults.push(...categorized);
        console.log(`  Got ${categorized.length} results`);
      } else {
        console.log(`  No JSON found, using fallback`);
        chunk.forEach((r) =>
          allResults.push({
            name: r.name,
            stars: r.stars,
            language: r.lang,
            category: "Other",
            recommendation: r.desc.substring(0, 40),
            recommendation_zh: r.desc.substring(0, 40),
            tags: r.topics || [],
          })
        );
      }
    } catch (e) {
      console.error(`  Error:`, e.message);
      chunk.forEach((r) =>
        allResults.push({
          name: r.name,
          stars: r.stars,
          language: r.lang,
          category: "Other",
          recommendation: r.desc.substring(0, 40),
          recommendation_zh: r.desc.substring(0, 40),
          tags: r.topics || [],
        })
      );
    }
  }

  const aiMap = new Map();
  for (const r of allResults) {
    if (!aiMap.has(r.name)) {
      aiMap.set(r.name, r);
    }
  }

  const finalResults = [];
  for (const repo of repos) {
    const cat = aiMap.get(repo.name);
    if (cat) {
      finalResults.push({
        name: cat.name,
        url: repo.url,
        stars: repo.stars,
        language: repo.lang,
        description: repo.desc,
        category: cat.category,
        recommendation: cat.recommendation,
        recommendation_zh: cat.recommendation_zh || cat.recommendation,
        tags: cat.tags,
      });
    } else {
      finalResults.push({
        name: repo.name,
        url: repo.url,
        stars: repo.stars,
        language: repo.lang,
        description: repo.desc,
        category: "Other",
        recommendation: repo.desc.substring(0, 80),
        recommendation_zh: repo.desc.substring(0, 80),
        tags: repo.topics || [],
      });
    }
  }

  return finalResults;
}

async function main() {
  if (!AI_API_KEY) {
    console.error("Error: AI_API_KEY environment variable is required.");
    console.error("Set it in your GitHub Actions secrets as AI_API_KEY.");
    process.exit(1);
  }

  const repos = JSON.parse(fs.readFileSync("plugins.json", "utf8"));
  console.log(`Loaded ${repos.length} plugins`);

  const results = await categorizePlugins(repos);

  fs.writeFileSync("categorized.json", JSON.stringify(results, null, 2));
  console.log(`Saved ${results.length} categorized plugins to categorized.json`);
}

main();
