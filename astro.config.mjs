// @ts-check
import { defineConfig, envField} from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  // Start a server for components that require server-side rendering
  output: 'server',

  integrations: [tailwind(), icon()],

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({ context: 'server', access: 'public' }),
      // SCORE_API_ENDPOINT: envField.string({ context: 'client', access: 'public' }),
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
    }
  },

  adapter: vercel()
});