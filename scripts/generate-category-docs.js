const fs = require("fs");
const path = require("path");

const categorized = JSON.parse(fs.readFileSync("categorized.json", "utf8"));

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

const results = {};
for (const cat of categoryOrder) {
  const plugins = categorized.filter((p) => p.category === cat).sort((a, b) => b.stars - a.stars);
  if (plugins.length > 0) results[cat] = plugins;
}

// Chinese category display names
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

const rootDir = path.join(__dirname, "..");

// ── Generate bilingual category docs ──────────────────────────
let readmeNavEn = "";
let readmeNavZh = "";

for (const [cat, plugins] of Object.entries(results)) {
  const slug = cat
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
  const enFile = slug + ".md";
  const zhFile = slug + "-zh.md";
  const enPath = path.join(rootDir, enFile);
  const zhPath = path.join(rootDir, zhFile);

  // ── English doc ──
  let mdEn = `# ${cat}\n\n`;
  mdEn += `> ${plugins.length} plugins in this category\n\n`;
  mdEn += `*Auto-generated from [DSH Plugin Recommender](README.md) — updated hourly by AI*\n\n`;
  mdEn += `---\n\n`;
  mdEn += `## Plugins\n\n`;

  for (const p of plugins) {
    mdEn += `### [${p.name}](${p.url})\n\n`;
    mdEn += `- **⭐ Stars:** ${p.stars.toLocaleString()}\n`;
    mdEn += `- **Language:** ${p.language}\n`;
    if (p.description) mdEn += `- **Description:** ${p.description}\n`;
    if (p.tags && p.tags.length > 0)
      mdEn += `- **Tags:** ${p.tags.map((t) => `\`${t}\``).join(", ")}\n`;
    if (p.recommendation) mdEn += `- **Why use it:** ${p.recommendation}\n`;
    mdEn += `\n---\n\n`;
  }

  mdEn += `[← Back to all categories](README.md)\n\n`;
  mdEn += `[🇨🇳 中文版](coding-agents-harness-tools-zh.md) · [🇬🇧 English](coding-agents-harness-tools.md)\n`;
  fs.writeFileSync(enPath, mdEn, "utf8");
  console.log(`Created ${enFile} (${plugins.length} plugins)`);
  readmeNavEn += `- [${cat}](${slug}) (${plugins.length})\n`;

  // ── Chinese doc ──
  const zhCatName = zhCategoryNames[cat] || cat;
  let mdZh = `# ${zhCatName}\n\n`;
  mdZh += `> 本分类共 ${plugins.length} 个插件\n\n`;
  mdZh += `*由 AI 自动生成，每小时更新 · 来源：[DSH 插件推荐列表](README-zh.md)*\n\n`;
  mdZh += `---\n\n`;
  mdZh += `## 插件列表\n\n`;

  for (const p of plugins) {
    mdZh += `### [${p.name}](${p.url})\n\n`;
    mdZh += `- **⭐ 星标：** ${p.stars.toLocaleString()}\n`;
    mdZh += `- **语言：** ${p.language}\n`;
    if (p.description) mdZh += `- **描述：** ${p.description}\n`;
    if (p.tags && p.tags.length > 0)
      mdZh += `- **标签：** ${p.tags.map((t) => `\`${t}\``).join(", ")}\n`;
    if (p.recommendation_zh) mdZh += `- **推荐理由：** ${p.recommendation_zh}\n`;
    else if (p.recommendation) mdZh += `- **推荐理由：** ${p.recommendation}\n`;
    mdZh += `\n---\n\n`;
  }

  mdZh += `[← 返回所有分类](README-zh.md)\n\n`;
  mdZh += `[🇬🇧 English version](coding-agents-harness-tools.md) · [🇨🇳 中文版](coding-agents-harness-tools-zh.md)\n`;
  fs.writeFileSync(zhPath, mdZh, "utf8");
  console.log(`Created ${zhFile} (${plugins.length} plugins)`);
  readmeNavZh += `- [${zhCatName}](${slug}-zh) (${plugins.length})\n`;
}

// ── Update README.md — keep only EN category docs nav ─────────
const readmeEnPath = path.join(rootDir, "README.md");
let readmeEn = fs.readFileSync(readmeEnPath, "utf8");

// Remove any existing Category Docs blocks (both EN and ZH)
readmeEn = readmeEn.replace(/\r?\n## 📂 Category Docs\r?\n[\s\S]*?^---$/m, "");
readmeEn = readmeEn.replace(/\r?\n## 📂 分类文档（中文）\r?\n[\s\S]*?^---$/m, "");

const navBlockEn = `\n## 📂 Category Docs\n\n${readmeNavEn}---\n\n`;

let pos = readmeEn.indexOf("## Categories");
if (pos !== -1) {
  const afterHeader = readmeEn.slice(pos);
  const sepMatch = afterHeader.match(/\r?\n---\r?\n/);
  if (sepMatch) {
    const sepOffset = afterHeader.indexOf(sepMatch[0]);
    readmeEn =
      readmeEn.slice(0, pos + sepOffset + sepMatch[0].length) +
      navBlockEn +
      readmeEn.slice(pos + sepOffset + sepMatch[0].length);
  }
}
fs.writeFileSync(readmeEnPath, readmeEn, "utf8");
console.log("\nREADME.md updated with English category docs navigation");

// ── Update README-zh.md — keep only ZH category docs nav ──────
const readmeZhPath = path.join(rootDir, "README-zh.md");
let readmeZh = fs.readFileSync(readmeZhPath, "utf8");

readmeZh = readmeZh.replace(/\r?\n## 📂 Category Docs\r?\n[\s\S]*?^---$/m, "");
readmeZh = readmeZh.replace(/\r?\n## 📂 分类文档（中文）\r?\n[\s\S]*?^---$/m, "");

const navBlockZh = `\n## 📂 分类文档（中文）\n\n${readmeNavZh}---\n\n`;

pos = readmeZh.indexOf("## 分类导航");
if (pos === -1) pos = readmeZh.indexOf("## Categories");
if (pos !== -1) {
  const afterHeader = readmeZh.slice(pos);
  const sepMatch = afterHeader.match(/\r?\n---\r?\n/);
  if (sepMatch) {
    const sepOffset = afterHeader.indexOf(sepMatch[0]);
    readmeZh =
      readmeZh.slice(0, pos + sepOffset + sepMatch[0].length) +
      navBlockZh +
      readmeZh.slice(pos + sepOffset + sepMatch[0].length);
  }
}
fs.writeFileSync(readmeZhPath, readmeZh, "utf8");
console.log("README-zh.md updated with Chinese category docs navigation");

console.log(`\nTotal: ${Object.keys(results).length} categories × 2 languages = ${Object.keys(results).length * 2} category docs generated`);
