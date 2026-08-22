const fs = require("fs");

function generateREADME(categorized) {
  const now = new Date().toISOString();
  const categories = {};

  for (const plugin of categorized) {
    const cat = plugin.category || "Other";
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(plugin);
  }

  const categoryOrder = [
    "Coding Agents & Harness Tools",
    "UI & Desktop Extensions",
    "Memory & Knowledge (RAG)",
    "Agent Skills & Workflows",
    "MCP Servers & Tools",
    "Visual & Design",
    "Browser & Web Automation",
    "Communication & Social",
    "Utilities & Infrastructure",
    "Themes & Skins",
    "Research & Analysis",
    "Other",
  ];

  let md = `# DSH Plugin Recommender

> AI-curated list of DeepSeek Harness (DSH) / dsh-plogin plugins, automatically discovered and categorized by AI every hour.

---

**Last updated:** ${now.replace("T", " ").substring(0, 19)} UTC  
**Plugins analyzed:** ${categorized.length}  
**AI Model:** agnes-2.5-flash

---

`;

  for (const cat of categoryOrder) {
    const plugins = categories[cat];
    if (!plugins || plugins.length === 0) continue;

    md += `## ${cat}\n\n`;
    for (const p of plugins) {
      md += `### ${p.name}\n\n`;
      md += `- **⭐ Stars:** ${p.stars}\n`;
      md += `- **Language:** ${p.language}\n`;
      md += `- **Description:** ${p.description}\n`;
      if (p.tags && p.tags.length > 0) {
        md += `- **Tags:** ${p.tags.map((t) => `\`${t}\``).join(", ")}\n`;
      }
      md += `- **Recommendation:** ${p.recommendation}\n`;
      md += `[GitHub Repo](${p.url})\n\n---\n\n`;
    }
  }

  md += `## How It Works\n\n`;
  md += `1. **Discovery** — Searches GitHub for repos matching dsh-plogin, deepseek-harness, dsh-plugin, etc.\n`;
  md += `2. **AI Analysis** — Uses AI to categorize and rank plugins by relevance and quality\n`;
  md += `3. **Update** — GitHub Actions runs every hour to fetch new plugins and regenerate this list\n\n`;
  md += `## License\n\nMIT\n`;

  return md;
}

function main() {
  const categorized = JSON.parse(fs.readFileSync("categorized.json", "utf8"));
  const readme = generateREADME(categorized);
  fs.writeFileSync("README.md", readme);
  console.log(`README updated with ${categorized.length} plugins`);
}

main();
