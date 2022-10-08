const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			kanit: ['Kanit', 'ui-sans-serif', 'system-ui'],
			SFPro_Rounded_Regular: ['SFRounded'],
			SFPro_Rounded_Bold: ['SFRounded-Bold'],
		},
		colors: {
			...colors,
			coreblue: '#E9EFF9',
			corepurple: '#535A86',
			darkpurple: '#635777',
			coreRed: '#ED555C',
		},
		extend: {
			keyframes: {
				compress: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(.95)' },
				},
			},
			animation: {
				compress: 'compress 200ms ease-in-out',
			},
		},
	},
	plugins: [],
};
