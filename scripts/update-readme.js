const fs = require("fs");

const LANGUAGE_SWITCH = "\n\n[🇨🇳 中文版](README-zh.md)\n\n---\n\n";
const LANGUAGE_SWITCH_ZH = "\n\n[🇬🇧 English version](README.md)\n\n---\n\n";

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
  md += "[🇨🇳 中文版](README-zh.md)\n\n";
  md += "[![GitHub stars](https://img.shields.io/github/stars/tanle-mtr/dsh-plogin-plugin-recommender?style=social)](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/stargazers)\n";
  md += "[![GitHub forks](https://img.shields.io/github/forks/tanle-mtr/dsh-plogin-plugin-recommender/network/members)](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/network/members)\n";
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
  md += "[🇨🇳 中文版](README-zh.md)\n\n";
  md += "*Generated by AI · Updated hourly via GitHub Actions*\n";

  return md;
}

function generateREADMEZh(categorized) {
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

  const zhCategoryNames = {
    "Coding Agents & Harness Tools": "编程 Agent 与 Harness 工具",
    "UI & Desktop Extensions": "UI 与桌面扩展",
    "Memory & Knowledge (RAG)": "记忆与知识（RAG）",
    "Agent Skills & Workflows": "Agent 技能与工作流",
    "MCP Servers & Tools": "MCP 服务器与工具",
    "Visual & Design": "视觉与设计",
    "Browser & Web Automation": "浏览器与 Web 自动化",
    "Communication & Social": "通信与社交",
    "Utilities & Infrastructure": "实用工具与基础设施",
    "Themes & Skins": "主题与皮肤",
    "Research & Analysis": "研究与分析",
    Other: "其他",
  };

  for (const cat of Object.keys(categories)) {
    categories[cat].sort((a, b) => b.stars - a.stars);
  }

  const catCounts = categoryOrder.map(cat => categories[cat]?.length || 0);
  const totalPlugins = categorized.length;
  const totalStars = categorized.reduce((sum, p) => sum + p.stars, 0);
  const activeCats = catCounts.filter(c => c > 0).length;
  const topPlugins = [...categorized].sort((a, b) => b.stars - a.stars).slice(0, 3);

  let md = "# DSH 插件推荐列表\n\n";
  md += "> 最全面的 DeepSeek Harness 插件 AI 精选合集 —— 每小时自动更新，按智能分类。\n\n";
  md += "[🇬🇧 English version](README.md)\n\n";
  md += "[![GitHub stars](https://img.shields.io/github/stars/tanle-mtr/dsh-plogin-plugin-recommender?style=social)](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/stargazers)\n";
  md += "[![GitHub forks](https://img.shields.io/github/forks/tanle-mtr/dsh-plogin-plugin-recommender/network/members)](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/network/members)\n";
  md += "[![GitHub last commit](https://img.shields.io/github/last-commit/tanle-mtr/dsh-plogin-plugin-recommender)](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/commits/main)\n";
  md += "[![License: MIT](https://img.shields.io/github/license/tanle-mtr/dsh-plogin-plugin-recommender)](LICENSE)\n\n";
  md += "---\n\n";
  md += "## 数据统计\n\n";
  md += "| 指标 | 数值 |\n|--------|-------|\n";
  md += "| **收录插件** | " + totalPlugins + " |\n";
  md += "| **社区总星标** | " + totalStars.toLocaleString() + " ⭐ |\n";
  md += "| **分类数量** | " + activeCats + " |\n";
  md += "| **最后更新** | " + now.replace("T", " ").substring(0, 19) + " UTC |\n";
  md += "| **AI 模型** | agnes-2.5-flash |\n\n";
  md += "---\n\n";
  md += "## 热门插件\n\n";
  md += "| 插件 | 星标 | 简介 |\n|--------|-------|-----|\n";
  for (const p of topPlugins) {
    const rec = (p.recommendation || p.description || "").substring(0, 50);
    md += "| [" + p.name + "](" + p.url + ") | ⭐ " + p.stars.toLocaleString() + " | " + rec + " |\n";
  }
  md += "\n---\n\n";
  md += "## 分类导航\n\n";
  for (const cat of categoryOrder) {
    const count = catCounts[categoryOrder.indexOf(cat)];
    if (count === 0) continue;
    md += "- [" + (zhCategoryNames[cat] || cat) + "](#" + (zhCategoryNames[cat] || cat).replace(/\s+/g, "-").toLowerCase() + ") — " + count + " 个插件\n";
  }
  md += "\n---\n\n";

  for (const cat of categoryOrder) {
    const plugins = categories[cat];
    if (!plugins || plugins.length === 0) continue;
    md += "## " + (zhCategoryNames[cat] || cat) + "\n\n";
    for (const p of plugins) {
      md += "### [" + p.name + "](" + p.url + ")\n\n";
      md += "- **⭐ 星标：** " + p.stars.toLocaleString() + "\n";
      md += "- **语言：** " + p.language + "\n";
      if (p.description) md += "- **描述：** " + p.description + "\n";
      if (p.tags && p.tags.length > 0) md += "- **标签：** " + p.tags.map(t => "`" + t + "`").join(", ") + "\n";
      if (p.recommendation_zh) md += "- **推荐理由：** " + p.recommendation_zh + "\n";
      else if (p.recommendation) md += "- **推荐理由：** " + p.recommendation + "\n";
      md += "\n---\n\n";
    }
  }

  md += "## 工作原理\n\n";
  md += "1. **发现插件** — 搜索 GitHub 上匹配 `dsh-plugin`、`deepseek-harness`、`awesome-dsh-plugin` 等关键词的仓库\n";
  md += "2. **AI 分类** — 每个插件由 AI 分析并分配到最合适的分类\n";
  md += "3. **人工校正** — 修正表修复已知错误分类（awesome 列表等）\n";
  md += "4. **每小时更新** — GitHub Actions 每小时运行一次，获取新插件并重新生成列表\n\n";
  md += "---\n\n";
  md += "## 贡献\n\n";
  md += "发现遗漏的优质 DSH 插件？想改进分类？\n\n";
  md += "- **[提交 Issue](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/issues)** — 报告错误或建议新插件\n";
  md += "- **[Fork & 提交 PR](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/fork)** — 修正 `scripts/fix-categories.js` 中的错误分类\n";
  md += "- **⭐ 点星支持** — 帮助更多人发现这个项目！\n\n";
  md += "---\n\n";
  md += "## 分享\n\n";
  md += "如果这个列表帮你找到了好插件，欢迎分享：\n\n";
  md += "- **Twitter/X**: [分享](https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20AI-curated%20DeepSeek%20Harness%20plugin%20list!&url=https://github.com/tanle-mtr/dsh-plogin-plugin-recommender)\n";
  md += "- **Reddit**: r/deepseek, r/localllama, r/Cline\n";
  md += "- **Discord**: DeepSeek 社区服务器\n\n";
  md += "---\n\n";
  md += "## 赞助\n\n";
  md += "如果觉得这个项目对你有帮助，欢迎打赏支持我继续维护！\n\n";
  md += "![微信赞助](assets/收款码.png)\n\n";
  md += "- [📄 **更多支持方式**](SPONSORS.md) — 点星、分享或贡献代码\n\n";
  md += "---\n\n";
  md += "## 许可证\n\n";
  md += "[MIT](LICENSE) — 欢迎自由使用、修改和分发。\n\n";
  md += "[🇬🇧 English version](README.md)\n\n";
  md += "*由 AI 自动生成 · 每小时通过 GitHub Actions 更新*\n";

  return md;
}

function main() {
  const categorized = JSON.parse(fs.readFileSync("categorized.json", "utf8"));

  const readmeEn = generateREADME(categorized);
  fs.writeFileSync("README.md", readmeEn, "utf8");
  console.log("README.md updated with " + categorized.length + " plugins");

  const readmeZh = generateREADMEZh(categorized);
  fs.writeFileSync("README-zh.md", readmeZh, "utf8");
  console.log("README-zh.md updated with " + categorized.length + " plugins");
}

main();
