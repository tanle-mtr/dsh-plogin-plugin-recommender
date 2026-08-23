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

  for (const cat of Object.keys(categories)) {
    categories[cat].sort((a, b) => b.stars - a.stars);
  }

  const catCounts = categoryOrder.map(cat => categories[cat]?.length || 0);
  const totalPlugins = categorized.length;
  const totalStars = categorized.reduce((sum, p) => sum + p.stars, 0);
  const activeCats = catCounts.filter(c => c > 0).length;
  const topPlugins = [...categorized].sort((a, b) => b.stars - a.stars).slice(0, 3);

  let md = "# DSH Plugin Recommender\n\n";
  md += "> The most comprehensive AI-curated collection of DeepSeek Harness plugins — updated hourly, categorized by intelligence.\n\n";
  md += "[![GitHub stars](https://img.shields.io/github/stars/tanle-mtr/dsh-plogin-plugin-recommender?style=social)](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/stargazers)\n";
  md += "[![GitHub forks](https://img.shields.io/github/forks/tanle-mtr/dsh-plogin-plugin-recommender?style=social)](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/network/members)\n";
  md += "[![GitHub last commit](https://img.shields.io/github/last-commit/tanle-mtr/dsh-plogin-plugin-recommender)](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/commits/main)\n";
  md += "[![License: MIT](https://img.shields.io/github/license/tanle-mtr/dsh-plogin-plugin-recommender)](LICENSE)\n\n";
  md += "---\n\n";
  md += "## Stats\n\n";
  md += "| Metric | Value |\n|--------|-------|\n";
  md += "| **Plugins tracked** | " + totalPlugins + " |\n";
  md += "| **Total community stars** | " + totalStars.toLocaleString() + " ⭐ |\n";
  md += "| **Categories** | " + activeCats + " |\n";
  md += "| **Last updated** | " + now.replace("T", " ").substring(0, 19) + " UTC |\n";
  md += "| **AI Model** | agnes-2.5-flash |\n\n";
  md += "---\n\n";
  md += "## Top Plugins Right Now\n\n";
  md += "| Plugin | Stars | Why |\n|--------|-------|-----|\n";
  for (const p of topPlugins) {
    const rec = (p.recommendation || p.description || "").substring(0, 50);
    md += "| [" + p.name + "](" + p.url + ") | ⭐ " + p.stars.toLocaleString() + " | " + rec + " |\n";
  }
  md += "\n---\n\n";
  md += "## Categories\n\n";
  for (const cat of categoryOrder) {
    const count = catCounts[categoryOrder.indexOf(cat)];
    if (count === 0) continue;
    md += "- [" + cat + "](#" + cat.replace(/\s+/g, "-").toLowerCase() + ") — " + count + " plugins\n";
  }
  md += "\n---\n\n";

  for (const cat of categoryOrder) {
    const plugins = categories[cat];
    if (!plugins || plugins.length === 0) continue;
    md += "## " + cat + "\n\n";
    for (const p of plugins) {
      md += "### [" + p.name + "](" + p.url + ")\n\n";
      md += "- **⭐ Stars:** " + p.stars.toLocaleString() + "\n";
      md += "- **Language:** " + p.language + "\n";
      if (p.description) md += "- **Description:** " + p.description + "\n";
      if (p.tags && p.tags.length > 0) md += "- **Tags:** " + p.tags.map(t => "`" + t + "`").join(", ") + "\n";
      if (p.recommendation) md += "- **Why use it:** " + p.recommendation + "\n";
      md += "\n---\n\n";
    }
  }

  md += "## How It Works\n\n";
  md += "1. **Discovery** — Searches GitHub for repos matching `dsh-plugin`, `deepseek-harness`, `awesome-dsh-plugin`, etc.\n";
  md += "2. **AI Categorization** — Each plugin is analyzed by AI and assigned to the best-fitting category\n";
  md += "3. **Manual Curation** — A correction table fixes known misclassifications (awesome lists, etc.)\n";
  md += "4. **Hourly Updates** — GitHub Actions runs every hour to fetch new plugins and regenerate this list\n\n";
  md += "---\n\n";
  md += "## Contribute\n\n";
  md += "Found a great DSH plugin that's missing? Want to improve categorization?\n\n";
  md += "- **[Open an Issue](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/issues)** — report a bug or suggest a plugin\n";
  md += "- **[Fork & PR](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/fork)** — fix miscategorized plugins in `scripts/fix-categories.js`\n";
  md += "- **⭐ Star this repo** — helps others discover it!\n\n";
  md += "---\n\n";
  md += "## Share the Love\n\n";
  md += "If this list helped you find a great plugin, please share it:\n\n";
  md += "- **Twitter/X**: [Share](https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20AI-curated%20DeepSeek%20Harness%20plugin%20list!&url=https://github.com/tanle-mtr/dsh-plogin-plugin-recommender)\n";
  md += "- **Reddit**: r/deepseek, r/localllama, r/Cline\n";
  md += "- **Discord**: DeepSeek community servers\n\n";
  md += "---\n\n";
  md += "## Sponsor\n\n";
  md += "如果觉得这个项目对你有帮助，欢迎打赏支持我继续维护！\n\n";
  md += "![微信赞助](assets/收款码.png)\n\n";
  md += "- [📄 **More ways to help**](SPONSORS.md) — star, share, or contribute code\n\n";
  md += "---\n\n";
  md += "## License\n\n";
  md += "[MIT](LICENSE) — feel free to use, modify, and distribute.\n\n";
  md += "*Generated by AI · Updated hourly via GitHub Actions*\n";

  return md;
}

function main() {
  const categorized = JSON.parse(fs.readFileSync("categorized.json", "utf8"));
  const readme = generateREADME(categorized);
  fs.writeFileSync("README.md", readme);
  console.log("README updated with " + categorized.length + " plugins");
}

main();
