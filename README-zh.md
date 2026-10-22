# DSH 插件推荐列表

> 最全面的 DeepSeek Harness 插件 AI 精选合集 —— 每小时自动更新，按智能分类。

[🇬🇧 English version](README.md)

[![GitHub stars](https://img.shields.io/github/stars/tanle-mtr/dsh-plogin-plugin-recommender?style=social)](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/tanle-mtr/dsh-plogin-plugin-recommender/network/members)](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/network/members)
[![GitHub last commit](https://img.shields.io/github/last-commit/tanle-mtr/dsh-plogin-plugin-recommender)](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/commits/main)
[![License: MIT](https://img.shields.io/github/license/tanle-mtr/dsh-plogin-plugin-recommender)](LICENSE)

---

## 数据统计

| 指标 | 数值 |
|--------|-------|
| **收录插件** | 52 |
| **社区总星标** | 23,132 ⭐ |
| **分类数量** | 9 |
| **最后更新** | 2026-10-22 14:57:55 UTC |
| **AI 模型** | agnes-2.5-flash |

---

## 热门插件

| 插件 | 星标 | 简介 |
|--------|-------|-----|
| [Q00/ouroboros](https://github.com/Q00/ouroboros) | ⭐ 6,258 | Self-evolving agent with staged evaluation loop |
| [vinvcn/mattpocock-skills-zh-CN](https://github.com/vinvcn/mattpocock-skills-zh-CN) | ⭐ 5,196 | Matt Pocock skills简体中文本地化版本 |
| [sixtysevenlf/dsh-blender-plugin](https://github.com/sixtysevenlf/dsh-blender-plugin) | ⭐ 1,074 | AI驱动Blender3D建模，实时插件集成 |

---

## 分类导航

- [编程 Agent 与 Harness 工具](#编程-agent-与-harness-工具) — 2 个插件
- [UI 与桌面扩展](#ui-与桌面扩展) — 9 个插件
- [记忆与知识（RAG）](#记忆与知识（rag）) — 2 个插件
- [Agent 技能与工作流](#agent-技能与工作流) — 21 个插件
- [MCP 服务器与工具](#mcp-服务器与工具) — 2 个插件
- [视觉与设计](#视觉与设计) — 1 个插件
- [实用工具与基础设施](#实用工具与基础设施) — 7 个插件
- [研究与分析](#研究与分析) — 6 个插件
- [其他](#其他) — 2 个插件

---

## 📂 分类文档（中文）

- [编程 Agent 与 Harness 工具](coding-agents-harness-tools-zh) (2)
- [UI 与桌面扩展](ui-desktop-extensions-zh) (9)
- [记忆与知识（RAG）](memory-knowledge-rag-zh) (2)
- [Agent 技能与工作流](agent-skills-workflows-zh) (21)
- [MCP 服务器与工具](mcp-servers-tools-zh) (2)
- [视觉与设计](visual-design-zh) (1)
- [实用工具与基础设施](utilities-infrastructure-zh) (7)
- [研究与分析](research-analysis-zh) (6)
- [其他](other-zh) (2)
---


## 编程 Agent 与 Harness 工具

### [Sev7eEn7/dsh-sieve](https://github.com/Sev7eEn7/dsh-sieve)

- **⭐ 星标：** 103
- **语言：** TypeScript
- **描述：** dsh-sieve: context engineering & token optimization plugin for DeepSeek Harness (DSH) — tool output filtering, context pruning, progressive skill disclosure. 36% smaller payload in offline replay. DSH 上下文管理与 token 优化节省插件。
- **标签：** `context`, `token-optimization`, `coding`, `cost`
- **推荐理由：** 上下文剪枝与token优化，降低LLM成本减少噪音。

---

### [faerryn/plogins.nvim](https://github.com/faerryn/plogins.nvim)

- **⭐ 星标：** 11
- **语言：** Lua
- **描述：** A fast, simple, and elegant Neovim plugin manager written in Lua!
- **标签：** `neovim`, `plugin-manager`
- **推荐理由：** 轻量快速的Neovim插件管理器

---

## UI 与桌面扩展

### [ningbainb/deepseek-harness-desktop](https://github.com/ningbainb/deepseek-harness-desktop)

- **⭐ 星标：** 857
- **语言：** JavaScript
- **描述：** Open-source Windows desktop client and GUI for DeepSeek Harness — zero-setup installer with Codex, plugins, skills, SSH, mobile remote access, and 11 skins.
- **标签：** `desktop`, `electron`, `gui`
- **推荐理由：** DeepSeek Harness桌面客户端

---

### [yyh-001/DSH-X](https://github.com/yyh-001/DSH-X)

- **⭐ 星标：** 734
- **语言：** JavaScript
- **描述：** DeepSeek Harness 轻量桌面启动器：启动项与多实例，版本、插件、整合包、MCP 和技能管理。A lightweight desktop launcher for DeepSeek Harness: launch entries, multiple instances, versions, plugins, modpacks, MCP and skills.
- **标签：** `launcher`, `desktop`, `macos`
- **推荐理由：** 轻量桌面启动器，多实例管理

---

### [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui)

- **⭐ 星标：** 733
- **语言：** TypeScript
- **描述：** GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fence — layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. Ships the fence-teaching host plugin, the browser renderer (client half), and the genui skill.
- **标签：** `genui`, `ui`, `interactive`
- **推荐理由：** 内联渲染交互UI组件

---

### [zhaoolee/notes](https://github.com/zhaoolee/notes)

- **⭐ 星标：** 310
- **语言：** TypeScript
- **描述：** 开源版锤子便签，复刻锤科美学，一键Docker私有化部署，支持skill调用，支持dsh plugin，支持多租户，一键生成公众号格式，支持导出便签为图片
- **标签：** `notes`, `docker`, `productivity`
- **推荐理由：** 开源锤子便签私有化部署

---

### [techflag/workdsh](https://github.com/techflag/workdsh)

- **⭐ 星标：** 259
- **语言：** TypeScript
- **描述：** A WorkBuddy-style desktop workspace powered by the DSH plugin ecosystem. WorkDSH manages projects, assets, experts, skills and connectors locally on desktop. All features are extensible via DeepSeek Harness plugins. Local-first, open ecosystem.
- **标签：** `workbench`, `desktop`, `workspace`, `typescript`
- **推荐理由：** 类WorkBuddy桌面工作区，本地管理项目、技能和连接器。

---

### [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel)

- **⭐ 星标：** 223
- **语言：** JavaScript
- **描述：** DSH Web UI plugin: skill and MCP management（Web界面的skill/MCP管理工具）
- **标签：** `mcp`, `ui`, `web`, `skills`
- **推荐理由：** Web界面直接管理Skill和MCP，提升DSH操作效率。

---

### [FlashingChen/dsh-desktop-hub](https://github.com/FlashingChen/dsh-desktop-hub)

- **⭐ 星标：** 62
- **语言：** TypeScript
- **描述：** DSH Desktop Hub — DeepSeek Harness 桌面管理控制台（Electron + TypeScript）。多 Tab 管理 Harness / Plugin / MCP / Skills，双击即用。
- **标签：** `desktop-app`, `electron`, `ui`
- **推荐理由：** Electron桌面控制台，管理DSH/插件/MCP多标签

---

### [sagirimo/BioDSH](https://github.com/sagirimo/BioDSH)

- **⭐ 星标：** 62
- **语言：** Python
- **描述：** The bioinformatics agent desktop for clinicians and wet-lab scientists — built on DeepSeek Harness. One-click installers, a skill store, offline mode.
- **标签：** `bioinformatics`, `desktop-app`, `tauri`
- **推荐理由：** 面向临床与湿实验室的生物信息学桌面Agent应用

---

### [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor)

- **⭐ 星标：** 46
- **语言：** TypeScript
- **描述：** DSH 上下文注入审计插件：统计 AGENTS.md 指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突；Web UI 圆环面板 + context_audit 工具。Context Doctor for DeepSeek Harness: audit instruction-chain / skill catalog / tool schemas token cost.
- **标签：** `context`, `ui`, `tool`
- **推荐理由：** Web UI面板审计上下文Token成本与冲突

---

## 记忆与知识（RAG）

### [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon)

- **⭐ 星标：** 643
- **语言：** TypeScript
- **描述：** Composable, view-based context for DeepSeek Harness. Pluggable sources and strategies, with layered memory and self-evolving skills out of the box.
- **标签：** `memory`, `context`, `rag`
- **推荐理由：** 可组合视图式上下文

---

### [Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory)

- **⭐ 星标：** 144
- **语言：** JavaScript
- **描述：** Proactive associative memory for DSH: system-prompt recall before the model speaks, three-layer auto-consolidation, skill crystallization, and Astra-style context management - handoff ledgers, PLAN whiteboard, water-level sensing. Local-first, model-agnostic, zero deps. 主动联想记忆+Astra 式上下文管理：自动唤回/自动沉淀/技能固化/交接账本与白板跨窗口续命/水位感知。
- **标签：** `memory`, `context`, `rag`, `consolidation`
- **推荐理由：** 三层自动记忆巩固，模型回答前主动召回上下文。

---

## Agent 技能与工作流

### [Q00/ouroboros](https://github.com/Q00/ouroboros)

- **⭐ 星标：** 6,258
- **语言：** Python
- **描述：** Agent OS: the agent gets smarter on its own. We just hold the line: Interview-gated, staged evaluation, budgeted evolution loop. MCP server, 14 runtimes: Claude Code, Codex CLI, Gemini CLI, OpenCode, Copilot, Kiro and more.
- **标签：** `agent-os`, `loop-engineering`, `mcp`
- **推荐理由：** 自进化智能体，分阶段评估循环

---

### [vinvcn/mattpocock-skills-zh-CN](https://github.com/vinvcn/mattpocock-skills-zh-CN)

- **⭐ 星标：** 5,196
- **语言：** JavaScript
- **描述：** Matt Pocock skills 的简体中文本地化：人工审核每一次更新，定期同步上游，支持 Claude、Codex 和 DSH 插件。
- **标签：** `chinese`, `skills`, `translation`
- **推荐理由：** Matt Pocock技能中文本地化

---

### [EverMind-AI/SkillCorpus](https://github.com/EverMind-AI/SkillCorpus)

- **⭐ 星标：** 689
- **语言：** Python
- **描述：** Open-source infrastructure that turns scattered SKILL.md files into curated, retrieval-ready agent-skill corpora—with retrieval and evaluation tooling included.
- **标签：** `skill-corpus`, `embeddings`, `semantic-search`
- **推荐理由：** SKILL.md转可检索技能库

---

### [MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager)

- **⭐ 星标：** 291
- **语言：** JavaScript
- **描述：** DSH Skills Manager — 在 DeepSeek Harness 中统一加载并安全管理本机 Agent Skills · Load and safely manage local Agent Skills in DSH
- **标签：** `skills`, `manager`, `security`
- **推荐理由：** 统一管理本机Agent技能

---

### [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill)

- **⭐ 星标：** 281
- **语言：** PowerShell
- **描述：** Complete reverse-skill (88 SKILL.md) as a DeepSeek Harness (dsh) Cordis plugin — reverse engineering, authorized pentesting and security research skill pack.
- **标签：** `security`, `reverse-engineering`, `pentest`, `skills`
- **推荐理由：** 88个技能的专业逆向工程与渗透测试工具包，安全研究必备。

---

### [FeatherHunter/dsh-mattpocock-skills-deck](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck)

- **⭐ 星标：** 202
- **语言：** TypeScript
- **描述：** 🌟安装即自带mattpocock/skills v1.3.1的27个工程与效率技能，无需手动装技能。400亿token打造本插件，在原始技能之上提供10倍的开发效率，也能帮助新手更快上手该技能套件。全力支持GitHub issue；Markdown为预览版；GitLab暂不支持。感谢您的使用和支持🌹
- **标签：** `skills`, `engineering`, `efficiency`, `github`
- **推荐理由：** 内置27个mattpocock高效技能，开发效率提升10倍。

---

### [lencx/skills](https://github.com/lencx/skills)

- **⭐ 星标：** 196
- **语言：** Shell
- **描述：** 💡 Turn experience into repeatable execution.
- **标签：** `skills`, `agent`, `architecture`, `docs`
- **推荐理由：** 将经验转化为可重复执行的技能，支持多AI平台。

---

### [yzlnew/infra-skills](https://github.com/yzlnew/infra-skills)

- **⭐ 星标：** 154
- **语言：** Python
- **描述：** A collection of specialized agent skills for AI infrastructure development, enabling Claude Code to write, optimize, and debug high-performance systems.
- **标签：** `infra`, `skills`, `ai-infra`, `coding`
- **推荐理由：** AI基础设施专用技能，编写优化调试高性能系统。

---

### [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh)

- **⭐ 星标：** 116
- **语言：** JavaScript
- **描述：** Superpowers skills for DeepSeek Harness: TDD, debugging, planning, and collaboration skills adapted from obra/superpowers
- **标签：** `superpowers`, `tdd`, `debugging`, `skills`
- **推荐理由：** TDD调试规划协作技能移植，提升DSH编码能力。

---

### [qkycir-123/dsh-run2skill](https://github.com/qkycir-123/dsh-run2skill)

- **⭐ 星标：** 104
- **语言：** TypeScript
- **描述：** Automatically turn successful DeepSeek Harness sessions into reusable, reviewable Agent Skills.
- **标签：** `skill-learning`, `automation`, `local-first`
- **推荐理由：** 自动将成功会话转化为可复用技能，本地优先。

---

### [youdotcom-oss/agent-skills](https://github.com/youdotcom-oss/agent-skills)

- **⭐ 星标：** 94
- **语言：** TypeScript
- **描述：** You.com skills and plugins for web search, content extraction, research, finance, and integration discovery, helping AI agents build with up-to-date web context.
- **标签：** `web-search`, `agent-skills`, `research`
- **推荐理由：** 面向AI Agent的网页搜索与研究技能集合

---

### [kingselyjoe/video-shotcraft-dsh](https://github.com/kingselyjoe/video-shotcraft-dsh)

- **⭐ 星标：** 83
- **语言：** TypeScript
- **描述：** 面向 DeepSeek Harness 的电影感产品视频 Agent Skill，包含 152 张镜头配方卡、Remotion 模板、代码组件和音频资产。
- **标签：** `video`, `remotion`, `motion-design`
- **推荐理由：** 152张镜头配方卡的电影感视频创作技能

---

### [linhut/gongwen-skill](https://github.com/linhut/gongwen-skill)

- **⭐ 星标：** 83
- **语言：** Python
- **描述：** 公文全流程处理工具——基于 GB/T 9704《党政机关公文格式》 国家标准，面向公文写作、企事业单位材料编制场景，支持 格式检查与修复、内容生成优化（Word 原生修订+批注/差异对比版）、模板生成、Markdown 转公文、版头版记页码注入、事实核验、风格增强 等完整能力。原生支持 DeepSeek Harness (DSH) 技能系统，打包为可被 AI Agent 直接调用的 Skill，完全自包含，克隆即用。
- **标签：** `gongwen`, `docx`, `ai-docs`
- **推荐理由：** 符合国标的全流程公文写作与格式处理工具

---

### [Lyn-77/ProMentor](https://github.com/Lyn-77/ProMentor)

- **⭐ 星标：** 80
- **语言：** TypeScript
- **描述：** ProMentor 是一个 AI Coding Agent Skill。装上它，你的 AI 编程助手立刻化身为导师——扫描项目架构、生成阶梯式 Chapter、带你手写核心逻辑、自动判题、AI Code Review。
- **标签：** `coding-agent`, `mentor`, `deepseek-harness`
- **推荐理由：** 化身为导师的AI编程Agent，辅助学习核心逻辑

---

### [Contexera/dsh-agent-team](https://github.com/Contexera/dsh-agent-team)

- **⭐ 星标：** 69
- **语言：** TypeScript
- **描述：** dsh-agent-team gives DeepSeek Harness agents that don't reset: durable Members with their own memory, notes, and skills across sessions, rollovers, and restarts. You set the direction; agents coordinate through Channels and Tasks.
- **标签：** `multi-agent`, `agent-orchestration`, `memory`
- **推荐理由：** 持久化多Agent协作系统，跨会话保留记忆与技能

---

### [yuc16/PatentRadar](https://github.com/yuc16/PatentRadar)

- **⭐ 星标：** 65
- **语言：** Python
- **描述：** 专利侵权分析系统 —— 输入专利公开号，产出竞品侵权分析报告；同时打包成 skill，可被任意 agent（dsh, codex, claudecode 等） 调用。
- **标签：** `patent`, `rag`, `legal-tech`
- **推荐理由：** 输入专利号自动生成竞品侵权分析报告

---

### [lemonhall/asd-ste100-skill-zh](https://github.com/lemonhall/asd-ste100-skill-zh)

- **⭐ 星标：** 63
- **语言：** Python
- **描述：** 受控中文技术写作技能：ASD-STE100 的中文对应物，含 stdlib-only 确定性 linter。Controlled Chinese technical writing skill for agents.
- **标签：** `technical-writing`, `ste100`, `linter`
- **推荐理由：** ASD-STE100中文控制技术写作技能，含确定性linter

---

### [sixtysevenlf/dsh-skill-blender-modeling](https://github.com/sixtysevenlf/dsh-skill-blender-modeling)

- **⭐ 星标：** 61
- **语言：** Unknown
- **描述：** DSH skill v1.0 · Blender 建模与装配流程：多 Agent 分工范式（冻结 spec/写作用域/接口表）、参考图形体还原、六条必踩的坑、十道数值门装配审计；23 条配方；配套插件 dsh-blender-plugin v1.0.0
- **标签：** `3d-modeling`, `blender`, `agent-skill`
- **推荐理由：** 23条配方的Blender建模多Agent分工工作流

---

### [dhicoc/dsh-chinese-traditional-wisdom-skill](https://github.com/dhicoc/dsh-chinese-traditional-wisdom-skill)

- **⭐ 星标：** 59
- **语言：** TypeScript
- **描述：** 中华传统智慧（玄枢）AI Agent 技能包的 DeepSeek Harness（dsh）Cordis 插件：八字/紫微/六爻/梅花/奇门/风水/五运六气/体质全融合，本地确定性引擎 + 可视化 Dashboard，一行 dsh plugin add 安装。
- **标签：** `chinese-traditional-wisdom`, `fengshui`, `dashboard`
- **推荐理由：** 八字/风水/易经等传统智慧本地确定性引擎

---

### [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck)

- **⭐ 星标：** 56
- **语言：** TypeScript
- **描述：** Double-check before you ship: grill the requirements, test the implementation, prove the delivery. An engineering-discipline bundle for DeepSeek Harness.
- **标签：** `quality-gate`, `code-review`, `skill`
- **推荐理由：** 工程纪律技能包，验证需求与交付质量门禁

---

### [fishzjp/qa-skills](https://github.com/fishzjp/qa-skills)

- **⭐ 星标：** 50
- **语言：** Python
- **描述：** Testing skills for AI coding agents: evidence-backed strategy, executable cases, Playwright/API testing, regression and QA memory. 面向 AI Agent 的测试工程技能。
- **标签：** `testing`, `qa`, `playwright`, `skill`
- **推荐理由：** 面向AI Agent的Playwright/API测试工程技能

---

## MCP 服务器与工具

### [wxkingstar/SpecFusion](https://github.com/wxkingstar/SpecFusion)

- **⭐ 星标：** 73
- **语言：** TypeScript
- **描述：** 在 DeepSeek Harness / Claude Code / Cursor / Codex / Gemini CLI 里直接搜索 20 个中国开放平台的 65,600+ 篇 API 文档；零配置，支持 Skill 与 DSH 原生插件。
- **标签：** `api-documentation`, `mcp`, `chinese-api`
- **推荐理由：** 一站式搜索20个中国开放平台6万+API文档

---

### [huaweicloud/huaweicloud-devkit](https://github.com/huaweicloud/huaweicloud-devkit)

- **⭐ 星标：** 69
- **语言：** JavaScript
- **描述：**  Official Huawei Cloud plugin for AI agents — skills, MCP tools, safety guardrails, and cloud sandbox to help AI agents build, deploy, and operate on Huawei Cloud securely.
- **标签：** `cloud`, `huaweicloud`, `mcp`
- **推荐理由：** 华为云官方Agent工具集，含MCP与云沙箱

---

## 视觉与设计

### [sixtysevenlf/dsh-blender-plugin](https://github.com/sixtysevenlf/dsh-blender-plugin)

- **⭐ 星标：** 1,074
- **语言：** Python
- **描述：** DSH × Blender 直连实时插件：15 个模型工具让 AI 驱动 GUI Blender；v2.5 活动状态置顶并可一键暂停 AI，原生选中/集合/子元素直送 DSH，随包建模 skill，支持 WSL / Windows / macOS。
- **标签：** `3d-modeling`, `blender`, `automation`
- **推荐理由：** AI驱动Blender3D建模

---

## 实用工具与基础设施

### [Unclecheng-li/DeepSec](https://github.com/Unclecheng-li/DeepSec)

- **⭐ 星标：** 492
- **语言：** Python
- **描述：** DeepSec — AI Security Offense & Defense Platform. Shield audits AI-generated code for hallucinated packages, missing safeguards & AI pattern errors in real time. Spear automates authorized penetration testing with 40+ skill packs, from recon to PoC. 
- **标签：** `security`, `cybersecurity`, `vulnerabilities`
- **推荐理由：** AI安全攻防审计平台

---

### [oh-my-dsh/dsh-plugin-upgrade-skill](https://github.com/oh-my-dsh/dsh-plugin-upgrade-skill)

- **⭐ 星标：** 297
- **语言：** JavaScript
- **描述：** 帮助插件自动随着dsh版本升级的skill
- **标签：** `upgrade`, `automation`, `utility`
- **推荐理由：** 插件自动版本升级skill

---

### [xiajiajun516/dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager)

- **⭐ 星标：** 226
- **语言：** TypeScript
- **描述：** DeepSeek Harness (DSH) backup & restore plugin — export, import, migrate and sync your complete DSH configuration, plugins, MCP servers, skills and workspace. One-click migration to another machine.
- **标签：** `config`, `backup`, `mcp`, `migration`
- **推荐理由：** DSH配置、插件和MCP服务器的备份恢复工具，迁移同步无忧。

---

### [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins)

- **⭐ 星标：** 180
- **语言：** JavaScript
- **描述：** 帮 DSH 搜索、安装并验证插件的 Skill｜A DSH skill that finds, installs, and verifies GitHub plugins
- **标签：** `plugin-discovery`, `automation`, `utility`
- **推荐理由：** 一键搜索安装验证GitHub上的DSH插件，发现利器。

---

### [PKUfudawei/dsh-capability-menu](https://github.com/PKUfudawei/dsh-capability-menu)

- **⭐ 星标：** 91
- **语言：** TypeScript
- **描述：** 管理 DeepSeek Harness 中工具与技能的暴露策略，支持按需检索与调用。Manage tool and skill exposure in DeepSeek Harness with on-demand discovery and invocation. 
- **标签：** `mcp`, `skills`, `dsh-plugin`
- **推荐理由：** 按需管理DeepSeek Harness工具与技能的暴露策略

---

### [vlln/plugin-registry](https://github.com/vlln/plugin-registry)

- **⭐ 星标：** 59
- **语言：** JavaScript
- **描述：** DSH 插件生态基建：薄控制台（浏览器面板管理官方 repository 插件，0 patch）+ make-dsh-plugin skill 官方插件开发引导
- **标签：** `plugin-management`, `ui`, `dsh-plugin`
- **推荐理由：** 官方插件控制台，零补丁管理DSH生态

---

### [tanle-mtr/dsh-plogin-plugin-recommender](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender)

- **⭐ 星标：** 2
- **语言：** JavaScript
- **描述：** The most comprehensive AI-curated list of DeepSeek Harness (DSH) plugins - 190+ plugins, 12 categories, updated hourly by AI.
- **标签：** `awesome-list`, `plugin-recommender`, `mcp`
- **推荐理由：** AI策展的190+插件综合推荐列表

---

## 研究与分析

### [Zhiyuan-Fan/Awesome-DeepSeek-Harness-Plugins](https://github.com/Zhiyuan-Fan/Awesome-DeepSeek-Harness-Plugins)

- **⭐ 星标：** 558
- **语言：** Unknown
- **描述：** Curated DeepSeek Harness (DSH) plugins, extensions, tools, skills, clients, runtimes, integrations, and verified references — English and Chinese.
- **标签：** `awesome-list`, `curated`, `plugins`
- **推荐理由：** DSH插件精选中英双语列表

---

### [Awesome-AI-Pedia/Awesome-AI-Pedia](https://github.com/Awesome-AI-Pedia/Awesome-AI-Pedia)

- **⭐ 星标：** 490
- **语言：** TypeScript
- **描述：** AI skills大全 mcp ai知识库 Agent 全维度 AI 资源百科，DSH插件 收录大模型、智能 Agent、RAG 检索增强、多模态、MLOps、AI 应用工具、AI面试集、Vibe coding 大全、零基础学习路线，持续更新前沿 AI 开源项目，开发者一站式 AI 导航库
- **标签：** `encyclopedia`, `knowledge`, `resources`
- **推荐理由：** AI技能百科一站式导航

---

### [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness)

- **⭐ 星标：** 393
- **语言：** TypeScript
- **描述：** A curated list of plugins, skills, MCP servers, patch/profile layers, orchestrators & UIs for DeepSeek Harness (DSH). Visualization · PPT · Coding · Agents · Loops (auto-research) and more. #dsh
- **标签：** `awesome-list`, `mcp`, `plugins`
- **推荐理由：** DSH插件MCP精选列表

---

### [PerryLink/dsh-industry-research](https://github.com/PerryLink/dsh-industry-research)

- **⭐ 星标：** 213
- **语言：** TypeScript
- **描述：** Industry and company research domain pack for DeepSeek Harness: methodology skills, industry chain mapping, public-source policy/news tracking, company research cards, and auditable research reports. Research only - not investment advice.
- **标签：** `research`, `industry`, `workflow`, `report`
- **推荐理由：** 行业研究方法论技能包，含产业链图谱和舆情追踪能力。

---

### [jaccen/Awesome-Gaussian-Skills](https://github.com/jaccen/Awesome-Gaussian-Skills)

- **⭐ 星标：** 166
- **语言：** TypeScript
- **描述：** 900 arXiv-verified 3DGS methods · 15 AI agent skills · MCP server (34 tools) · open ebook — the AI-native entry to 3D Gaussian Splatting research
- **标签：** `3dgs`, `research`, `mcp`, `computer-graphics`
- **推荐理由：** 900篇arXiv验证3DGS方法，配���15个AI技能与MCP工具。

---

### [jsChen-biostat/math-modelCN](https://github.com/jsChen-biostat/math-modelCN)

- **⭐ 星标：** 52
- **语言：** Python
- **描述：** 数学建模资源，包含辅助建模、数据预处理、编程、论文写作、降aigc、查重、科研绘图等关键skill。创建者使用skill的大模型为deepseek harness v4.1 pro，但并非仅有dsh适配，skill内涵skill.md文件、README.md文件，reference文件夹及所需依赖，可以利用各种大模型agent进行安装，此外，库内还上传了数学建模workbench的自定义agent，涵盖着数学建模建模手，编程手，论文手三者分工流程及其他要点，使用该agent便于减少数学建模相关提示词的输入，配合各类skill能完成较为高质量的数学建模论文
- **标签：** `math-modeling`, `research`, `skill`
- **推荐理由：** 数学建模全流程资源：数据、编程、论文写作

---

## 其他

### [leenkcool/Blue-Whale-Harness](https://github.com/leenkcool/Blue-Whale-Harness)

- **⭐ 星标：** 196
- **语言：** HTML
- **描述：** 🐋 DeepSeek Harness 插件总目录 · The catalog of DSH plugins：1958 个仓库 / 1819 个真插件（Skills · MCP · Tools · UI · Orchestration），中英文搜索、分类筛选、STAR 排序 → leenkcool.github.io
- **标签：** `catalog`, `directory`, `marketplace`, `awesome-list`
- **推荐理由：** DSH插件总目录，1958个仓库中英文搜索分类筛选。

---

### [kejixiaoliang/awesome-dsh-plugins](https://github.com/kejixiaoliang/awesome-dsh-plugins)

- **⭐ 星标：** 64
- **语言：** JavaScript
- **描述：** DeepSeek Harness (DSH) 插件精选目录 — 14 类 280+ 个社区插件，覆盖 MCP / Skill / TUI / 多 Agent / 上下文记忆 / UI 皮肤，点链接直达仓库。Curated directory of dsh plugins for DeepSeek Harness.
- **标签：** `awesome-list`, `plugins`, `community`
- **推荐理由：** 精选280+社区插件目录，覆盖14大类别

---

## 工作原理

1. **发现插件** — 搜索 GitHub 上匹配 `dsh-plugin`、`deepseek-harness`、`awesome-dsh-plugin` 等关键词的仓库
2. **AI 分类** — 每个插件由 AI 分析并分配到最合适的分类
3. **人工校正** — 修正表修复已知错误分类（awesome 列表等）
4. **每小时更新** — GitHub Actions 每小时运行一次，获取新插件并重新生成列表

---

## 贡献

发现遗漏的优质 DSH 插件？想改进分类？

- **[提交 Issue](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/issues)** — 报告错误或建议新插件
- **[Fork & 提交 PR](https://github.com/tanle-mtr/dsh-plogin-plugin-recommender/fork)** — 修正 `scripts/fix-categories.js` 中的错误分类
- **⭐ 点星支持** — 帮助更多人发现这个项目！

---

## 分享

如果这个列表帮你找到了好插件，欢迎分享：

- **Twitter/X**: [分享](https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20AI-curated%20DeepSeek%20Harness%20plugin%20list!&url=https://github.com/tanle-mtr/dsh-plogin-plugin-recommender)
- **Reddit**: r/deepseek, r/localllama, r/Cline
- **Discord**: DeepSeek 社区服务器

---

## 赞助

如果觉得这个项目对你有帮助，欢迎打赏支持我继续维护！

![微信赞助](assets/收款码.png)

- [📄 **更多支持方式**](SPONSORS.md) — 点星、分享或贡献代码

---

## 许可证

[MIT](LICENSE) — 欢迎自由使用、修改和分发。

[🇬🇧 English version](README.md)

*由 AI 自动生成 · 每小时通过 GitHub Actions 更新*
