const fs = require("fs");

const categorized = JSON.parse(fs.readFileSync("categorized.json", "utf8"));

const corrections = {
  "awesome-dsh-plugin/awesome-dsh-plugin": "Research & Analysis",
  "Anil-matcha/awesome-dsh-plugin": "Research & Analysis",
  "0xsline/awesome-deepseek-harness": "Research & Analysis",
  "libukai/awesome-deepseek-harness": "Research & Analysis",
  "Dominic789654/awesome-deepseek-harness": "Research & Analysis",
  "beancookie/awesome-dsh-plugin": "Research & Analysis",
  "Alex-Yanggg/awesome-DSH-plugin": "Research & Analysis",
  "like-study1/Oh-My-DSH": "Research & Analysis",
  "web-casa/Awesome-DeepSeek-Harness-Plugins": "Research & Analysis",
  "kejixiaoliang/awesome-dsh-plugins": "Research & Analysis",
  "white0dew/awesome-dsh-plugins": "Research & Analysis",
  "billLiao/awesome-dsh-plugin": "Research & Analysis",
  "diegosouzapw/awesome-omni-dsh-plugins": "Research & Analysis",
  "cccakeee/awesome-dsh-plugins": "Research & Analysis",
  "the-beating-light-of-the-nail/awesome-dsh-plugin-stock": "Research & Analysis",
  "JNLXG/awesome-dsh-plugins": "Research & Analysis",
  "zzylanmengqingchuan/awesome-dsh-plugins": "Research & Analysis",
  "dorisaimpatient855/awesome-dsh-plugin": "Research & Analysis",
  "web-casa/awesome-cordis-plugins": "Research & Analysis",
  "kingselyjoe/awesome-dsh-list": "Research & Analysis",
  "bruc3van/awesome-dsh-plugin": "Research & Analysis",
  "Zhiyuan-Fan/Awesome-DeepSeek-Harness-Plugins": "Research & Analysis",
  "GordenSun/awesome-dsh-plugins": "Research & Analysis",
  "arkyu2077/awesome-dsh-plugin": "Research & Analysis",
  "dongsheng123132/awesome-dsh-plugins": "Research & Analysis",
  "Herdeny/awesome-dsh-plugins-2026": "Research & Analysis",
  "awesome-dsh-plugins/awesome-dsh-plugins": "Research & Analysis",
  "jqueryscript/awesome-dsh-plugins": "Research & Analysis",
  "coolbat/awesome-dsh-plugins": "Research & Analysis",
  "wgd753/awesome-dsh-plugin": "Research & Analysis",
  "oslook/awesome-dsh-plugins": "Research & Analysis",
  "imsai-sh/awesome-deepseek-harness-plugins": "MCP Servers & Tools",
  "bradeGithub/DSH-Plugins-Marketplace": "MCP Servers & Tools",
  "Sanqi-normal/dsh-webui-market-plugin": "MCP Servers & Tools",
  "leenkcool/Blue-Whale-Harness": "Utilities & Infrastructure",
  "dshworks/awesome-dsh-plugins": "Utilities & Infrastructure",
  "Jesse-njx/dsh-plugin-manager-registry": "Utilities & Infrastructure",
  "hikariming/dshfind": "Utilities & Infrastructure",
  "cocofhu/anime-find": "Agent Skills & Workflows",
  "Lyn-77/ProMentor": "Agent Skills & Workflows",
  "zhaoolee/notes": "UI & Desktop Extensions",
};

let fixed = 0;
for (const plugin of categorized) {
  if (plugin.category === "Other" && corrections[plugin.name]) {
    plugin.category = corrections[plugin.name];
    fixed++;
  }
}

fs.writeFileSync("categorized.json", JSON.stringify(categorized, null, 2));
console.log("Fixed " + fixed + " misclassified plugins");
