import { z } from 'zod';
import { defineTool } from './tool.js';

// LinkedIn Lite: Only browser_close (resize removed - viewport set via config)
const close = defineTool({
  capability: 'core',
  schema: {
    name: 'browser_close',
    title: 'Close browser',
    description: 'Close the page',
    inputSchema: z.object({}),
    type: 'readOnly',
  },
  handle: async (context, _params, response) => {
    await context.closeBrowserContext();
    response.setIncludeTabs();
    response.addCode('await page.close()');
  },
});

export default [close];
