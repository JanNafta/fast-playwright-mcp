import { z } from 'zod';
import { expectationSchema } from '../schemas/expectation.js';
import { generateNavigationCode } from '../utils/common-formatters.js';
import { defineTool } from './tool.js';

// LinkedIn Lite: Only browser_navigate (goBack, goForward removed)
const navigate = defineTool({
  capability: 'core',
  schema: {
    name: 'browser_navigate',
    title: 'Navigate to a URL',
    description: 'Navigate to a URL',
    inputSchema: z.object({
      url: z.string().describe('The URL to navigate to'),
      expectation: expectationSchema.describe('Page state after navigation'),
    }),
    type: 'destructive',
  },
  handle: async (context, params, response) => {
    const tab = await context.ensureTab();
    await tab.navigate(params.url);
    response.addCode(generateNavigationCode(params.url));
  },
});

export default [navigate];
