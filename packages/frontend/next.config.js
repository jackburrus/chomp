/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	theme: {
		fontFamily: {
			kanit: ['Kanit', 'ui-sans-serif', 'system-ui'],
			SFPro_Rounded_Regular: ['SFRounded'],
			SFPro_Rounded_Bold: ['SFRounded-Bold'],
		},
		colors: {
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
};

module.exports = nextConfig;
