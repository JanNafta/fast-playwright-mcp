/**
 * LinkedIn Lite MCP - Optimized for LinkedIn automation
 * Removed: console, dialogs, evaluate, inspectHtml, network, mouse, pdf, diagnose, findElements
 * Modified: navigate (no back/forward), snapshot (no drag), common (no resize)
 */
import type { FullConfig } from './config.js';
import { batchExecuteTool } from './tools/batch-execute.js';
import common from './tools/common.js';
import files from './tools/files.js';
import install from './tools/install.js';
import keyboard from './tools/keyboard.js';
import navigate from './tools/navigate.js';
import screenshot from './tools/screenshot.js';
import snapshot from './tools/snapshot.js';
import tabs from './tools/tabs.js';
import type { AnyTool } from './tools/tool.js';
import wait from './tools/wait.js';

export const allTools: AnyTool[] = [
  ...common,
  ...files,
  ...install,
  ...keyboard,
  ...navigate,
  ...screenshot,
  ...snapshot,
  ...tabs,
  ...wait,
  batchExecuteTool,
];

export function filteredTools(config: FullConfig): AnyTool[] {
  return allTools.filter(
    (tool) =>
      tool.capability.startsWith('core') ||
      config.capabilities?.includes(tool.capability)
  );
}
