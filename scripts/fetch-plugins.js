const https = require("https");
const fs = require("fs");
const { execSync } = require("child_process");

const token = process.env.GITHUB_TOKEN || execSync("gh auth token").toString().trim();

const SEARCH_QUERIES = [
  "dsh-plugin",
  "deepseek-harness plugin",
  "dsh plogin",
  "plogin plugin",
  "dsh skill",
  "deepseek harness skill",
  "awesome-dsh-plugin",
];

function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.github.com",
      path,
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "dsh-plogin-recommender",
      },
      rejectUnauthorized: false,
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on("error", reject);
    req.end();
  });
}

async function searchAll() {
  const seen = new Map();

  for (const query of SEARCH_QUERIES) {
    try {
      const result = await makeRequest(
        `/search/repositories?q=${encodeURIComponent(query)}&per_page=50&sort=stars&order=desc`
      );
      console.log(`Search "${query}": ${result.total_count} results`);
      for (const repo of result.items || []) {
        if (!seen.has(repo.full_name)) {
          seen.set(repo.full_name, {
            name: repo.full_name,
            desc: repo.description || "",
            stars: repo.stargazers_count,
            url: repo.html_url,
            lang: repo.language || "Unknown",
            topics: repo.topics || [],
            owner: repo.owner.login,
          });
        }
      }
    } catch (e) {
      console.error(`Error searching "${query}":`, e.message);
    }
  }

  const repos = Array.from(seen.values())
    .filter((r) => r.desc.length > 0)
    .sort((a, b) => b.stars - a.stars);

  console.log(`\nTotal unique repos with descriptions: ${repos.length}`);
  return repos;
}

async function main() {
  const repos = await searchAll();
  const output = JSON.stringify(repos, null, 2);
  fs.writeFileSync("plugins.json", output);
  console.log("Saved to plugins.json");
}

main();
