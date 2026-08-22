# DSH Plugin Recommender

> AI-curated list of DeepSeek Harness (DSH) / dsh-plogin plugins, automatically discovered and categorized by AI every hour.

---

**Last updated:** 2026-08-22 12:49:38 UTC  
**Plugins analyzed:** 10  
**AI Model:** agnes-2.5-flash

---

## Coding Agents & Harness Tools

### dsh-plogin/coding-assistant

- **⭐ Stars:** 2103
- **Language:** TypeScript
- **Description:** Full-stack coding agent with LSP integration, code generation, and project scaffolding for DSH
- **Tags:** `coding`, `agents`, `lsp`
- **Recommendation:** Top-rated coding plugin; integrates directly with DSH agents for autonomous PR creation, debugging, and refactoring workflows.
[GitHub Repo](https://github.com/dsh-plugins/coding-assistant)

---

## UI & Desktop Extensions

### dsh-plogin/rich-dashboard

- **⭐ Stars:** 762
- **Language:** Python
- **Description:** CLI-rich terminal dashboard plugin providing real-time metrics, logs, and agent status for DSH
- **Tags:** `ui`, `dashboard`, `monitoring`
- **Recommendation:** Best UI plugin; transforms the DSH CLI into an interactive monitoring dashboard with live agent activity tracking.
[GitHub Repo](https://github.com/dsh-plugins/rich-dashboard)

---

## Memory & Knowledge (RAG)

### dsh-plogin/vector-memory

- **⭐ Stars:** 987
- **Language:** Python
- **Description:** Persistent vector memory plugin enabling long-term RAG storage and retrieval for DSH agents
- **Tags:** `rag`, `memory`, `vector-db`
- **Recommendation:** Best RAG plugin for DSH; supports embeddings, chunking strategies, and vector DB backends including Chroma and Weaviate.
[GitHub Repo](https://github.com/dsh-plugins/vector-memory)

---

## Agent Skills & Workflows

### dsh-plogin/workflow-builder

- **⭐ Stars:** 1455
- **Language:** TypeScript
- **Description:** Visual workflow designer and executor plugin for building multi-step agent workflows in DSH
- **Tags:** `workflows`, `agents`, `orchestration`
- **Recommendation:** Most popular workflow plugin; drag-and-drop builder with conditional branching, loops, and error recovery built in.
[GitHub Repo](https://github.com/dsh-plugins/workflow-builder)

---

## MCP Servers & Tools

### dsh-plogin/mcp-server-gateway

- **⭐ Stars:** 1876
- **Language:** Rust
- **Description:** Universal MCP server gateway that bridges DSH agents with external Model Context Protocol endpoints
- **Tags:** `mcp`, `gateway`, `integration`
- **Recommendation:** Essential for connecting DSH to any MCP-compatible tool; supports dynamic plugin loading and credential rotation.
[GitHub Repo](https://github.com/dsh-plugins/mcp-server-gateway)

---

## Browser & Web Automation

### dsh-plogin/browser-automation

- **⭐ Stars:** 1240
- **Language:** Python
- **Description:** Browser automation plugin for DeepSeek Harness with headless browsing and web interaction capabilities
- **Tags:** `browser`, `automation`, `web`
- **Recommendation:** Best-in-class browser automation for DSH; supports session persistence, SSO handling, and automated form filling out of the box.
[GitHub Repo](https://github.com/dsh-plugins/browser-automation)

---

## Communication & Social

### dsh-plogin/slack-messenger

- **⭐ Stars:** 891
- **Language:** Go
- **Description:** Slack integration plugin enabling DSH agents to send messages, receive commands, and post alerts
- **Tags:** `slack`, `communication`, `messaging`
- **Recommendation:** Recommended for teams using Slack; supports slash commands, threaded replies, and scheduled DSH job notifications.
[GitHub Repo](https://github.com/dsh-plugins/slack-messenger)

---

## Utilities & Infrastructure

### dsh-plogin/file-coordinator

- **⭐ Stars:** 674
- **Language:** Python
- **Description:** File system coordination plugin for managing shared storage, sync, and permissions across DSH agents
- **Tags:** `files`, `sync`, `infrastructure`
- **Recommendation:** Solid utility for multi-agent setups; handles file locking, sync across workers, and cleanup policies.
[GitHub Repo](https://github.com/dsh-plugins/file-coordinator)

---

## Themes & Skins

### dsh-plogin/theme-curator

- **⭐ Stars:** 543
- **Language:** CSS
- **Description:** Community-driven theme marketplace and installer plugin for customizing DSH terminal and web UI themes
- **Tags:** `themes`, `skins`, `customization`
- **Recommendation:** Only active theming plugin; one-click install for community themes with preview support.
[GitHub Repo](https://github.com/dsh-plugins/theme-curator)

---

## Research & Analysis

### dsh-plogin/research-agent

- **⭐ Stars:** 1320
- **Language:** Python
- **Description:** Autonomous research agent that performs literature searches, synthesizes findings, and generates reports
- **Tags:** `research`, `analysis`, `reporting`
- **Recommendation:** Top research plugin; supports academic databases, web search aggregation, and structured report generation.
[GitHub Repo](https://github.com/dsh-plugins/research-agent)

---

## How It Works

1. **Discovery** — Searches GitHub for repos matching dsh-plogin, deepseek-harness, dsh-plugin, etc.
2. **AI Analysis** — Uses agnes-2.5-flash to categorize and rank plugins by relevance and quality
3. **Update** — GitHub Actions runs every hour to fetch new plugins and regenerate this list

## API

- **Model:** agnes-2.5-flash
- **Endpoint:** `https://apihub.agnes-ai.com/v1`

## License

MIT
