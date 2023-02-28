import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			config: { applyBaseStyles: true },
		}),
		mdx(), ],
	site: 'https://mic-v.github.io/',
});
