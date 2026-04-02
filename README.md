<div align="center">

# Fast Playwright MCP (LinkedIn Lite)

A stripped-down fork of [fast-playwright-mcp](https://github.com/tontoko/fast-playwright-mcp) optimized for LinkedIn automation via Claude Code.

[![Archived](https://img.shields.io/badge/status-archived-red?style=flat-square)](https://github.com/JanNafta/fast-playwright-mcp)
[![Fork](https://img.shields.io/badge/fork-tontoko%2Ffast--playwright--mcp-blue?style=flat-square)](https://github.com/tontoko/fast-playwright-mcp)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-Apache--2.0-green?style=flat-square)](LICENSE)

</div>

## What is this?

A faster, lighter version of the Playwright browser automation MCP server, purpose-built for AI assistants that need to interact with LinkedIn. It takes the already-optimized [fast-playwright-mcp](https://github.com/tontoko/fast-playwright-mcp) (itself a fork of [Microsoft's Playwright MCP](https://github.com/microsoft/playwright-mcp)) and removes 15 tools that are unnecessary for LinkedIn workflows -- reducing token overhead and startup time.

## What was changed

The upstream `fast-playwright-mcp` ships ~30 tools. This fork removes everything not needed for posting on LinkedIn (text, images, videos, carousels):

| Removed | Reason |
|---------|--------|
| `browser_console_messages` | Not needed for posting workflows |
| `browser_handle_dialog` | LinkedIn rarely triggers dialogs |
| `browser_evaluate` | Raw JS eval unnecessary |
| `browser_inspect_html` | HTML inspection not required |
| `browser_network_requests` | Network monitoring unused |
| `browser_mouse_*` | Fine-grained mouse control overkill |
| `browser_pdf_*` | PDF generation irrelevant |
| `browser_diagnose` | Diagnostic tooling removed |
| `browser_find_elements` | Element finder removed |
| `browser_navigate_back/forward` | Linear navigation only |
| `browser_drag` | Drag-and-drop unused |
| `browser_resize` | Viewport set via config |

**Kept tools (14):** `navigate`, `snapshot`, `click`, `type`, `file_upload`, `take_screenshot`, `wait_for`, `batch_execute`, `press_key`, `hover`, `select_option`, `tab_*`, `close`, `install`.

## Features

- **Token-efficient** -- Fewer tool definitions means smaller system prompts and less context waste
- **All upstream fast-playwright-mcp features** -- Batch execution, diff detection, snapshot control, image compression, expectation parameters
- **LinkedIn-focused** -- Only the tools you need for text posts, image/video uploads, and carousel publishing
- **MCP-compatible** -- Works with Claude Code, Claude Desktop, Cursor, Windsurf, or any MCP client

## Tech Stack

| Component | Technology |
|-----------|------------|
| Language | TypeScript |
| Runtime | Node.js 18+ / Bun |
| Browser engine | Playwright 1.58.0-alpha |
| Protocol | Model Context Protocol (MCP) |
| Upstream | [tontoko/fast-playwright-mcp](https://github.com/tontoko/fast-playwright-mcp) |
| Origin | [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) |

## Status: Archived

This repo is **archived** and no longer maintained. It served as a proof-of-concept for reducing MCP tool surface area per use-case. The approach worked, but has since been replaced by a custom multi-MCP architecture with 24 browser instances (13 dedicated + 11 pool) that provides better isolation, concurrency, and per-service session persistence.

## Author

**Jan Naftanaila** -- Media Buyer & AI Automation Specialist

- GitHub: [@JanNafta](https://github.com/JanNafta)
- LinkedIn: [jannafta](https://www.linkedin.com/in/jannafta/)
