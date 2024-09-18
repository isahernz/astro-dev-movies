// @ts-check
import { defineConfig, envField} from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Start a server for components that require server-side rendering
  integrations: [tailwind(), icon()],
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({ context: 'server', access: 'public' }),
      // SCORE_API_ENDPOINT: envField.string({ context: 'client', access: 'public' }),
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
    }
  }
});