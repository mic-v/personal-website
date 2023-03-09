module.exports = {
	content: ['./public/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: [
				"Golos Text, sans-serif",
			]
		},
		extend: {
			colors: {
				main: '#A16BA0',
				darkacc: '#006DAA',
				lightacc: '#DB9D47',
				light: '#f0f0f0',
				dark: '#182825',
			}, 
		}
	},
	plugins: [
		function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1080px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    }
  ],
};
