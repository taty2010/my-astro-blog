module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				'main-bg': "url('/public/images/main_bg/png')"
			},
			fontFamily: {
				'display': ['Bungee', 'cursive'],
				'barlow': ['Barlow Condensed', 'sans-serif']
			  }
		},
	},
	plugins: [],
}
