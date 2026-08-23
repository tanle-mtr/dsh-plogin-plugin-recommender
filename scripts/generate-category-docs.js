const fs = require("fs");
const path = require("path");

const categorized = JSON.parse(fs.readFileSync("categorized.json", "utf8"));
const docsDir = path.join(__dirname, "..", "docs");

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
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

const results = {};
for (const cat of categoryOrder) {
  const plugins = categorized.filter((p) => p.category === cat).sort((a, b) => b.stars - a.stars);
  if (plugins.length > 0) results[cat] = plugins;
}

let readmeNav = "";
for (const [cat, plugins] of Object.entries(results)) {
  const filename = cat
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase() + ".md";
  const filepath = path.join(docsDir, filename);

  let md = `# ${cat}\n\n`;
  md += `> ${plugins.length} plugins in this category\n\n`;
  md += `*Auto-generated from [DSH Plugin Recommender](../README.md) — updated hourly by AI*\n\n`;
  md += `---\n\n`;
  md += `## Plugins\n\n`;

  for (const p of plugins) {
    md += `### [${p.name}](${p.url})\n\n`;
    md += `- **⭐ Stars:** ${p.stars.toLocaleString()}\n`;
    md += `- **Language:** ${p.language}\n`;
    if (p.description) md += `- **Description:** ${p.description}\n`;
    if (p.tags && p.tags.length > 0)
      md += `- **Tags:** ${p.tags.map((t) => `\`${t}\``).join(", ")}\n`;
    if (p.recommendation) md += `- **Why use it:** ${p.recommendation}\n`;
    md += `\n---\n\n`;
  }

  md += `[← Back to all categories](../README.md)\n`;
  fs.writeFileSync(filepath, md, "utf8");
  console.log(`Created docs/${filename} (${plugins.length} plugins)`);
  readmeNav += `- [${cat}](${filename.replace(".md", "")}) (${plugins.length})\n`;
}

// Update README: insert category docs nav right after "## Categories" anchor list section
const readmePath = path.join(__dirname, "..", "README.md");
let readme = fs.readFileSync(readmePath, "utf8");

const navBlock = `\n## 📂 Category Docs\n\n${readmeNav}---\n\n`;

// Find the "## Categories" section and insert after the list
const categoriesHeader = readme.indexOf("## Categories");
if (categoriesHeader !== -1) {
  // Find the next "---" after "## Categories"
  const nextSeparator = readme.indexOf("\n---\n", categoriesHeader);
  if (nextSeparator !== -1) {
    readme =
      readme.slice(0, nextSeparator + 5) +
      navBlock +
      readme.slice(nextSeparator + 5);
  }
}

fs.writeFileSync(readmePath, readme, "utf8");
console.log("\nREADME updated with category docs navigation");
console.log(`Total: ${Object.keys(results).length} category docs generated`);
