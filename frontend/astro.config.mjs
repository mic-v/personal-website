import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			config: { applyBaseStyles: true },
		}),
		mdx(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		}) ],
	site: 'https://www.michaelvictorino.dev/',
});
