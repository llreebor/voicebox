/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		screens: {
			xl: { max: '1449.99px' },
			lg: { max: '1199.99px' },
			md: { max: '991.99px' },
			sm: { max: '767.99px' },
			xs: { max: '479.99px' },
		},
		container: {
			center: true,
			padding: '20px',
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				primary: {
					400: '#1879FF',
					500: '#1964FF',
					800: '#193879',
					900: '#121826',
				},
				secondary: {
					50: '#A79DAB',
					100: '#EDEDF5',
					200: '#EAEAEA',
					250: '#9A9DB3',
					300: '#B0B3BD',
					400: '#9597B2',
					500: '#878787',
					600: '#758699',
					700: '#4F647D',
					800: '#444444',
					900: '#273246',
				},
				violet: {
					200: '#EAE1FF',
					400: '#956CFF',
					500: '#6E41E2',
				},
				orange: {
					100: '#C3C5AF',
					200: '#FFF7EF',
					400: '#FEBA16',
					500: '#FD5B01',
				},
				pink: {
					200: '#6C6288',
					400: '#FD2B9C',
					500: '#FE0496',
				},
				green: {
					400: '#2ECB71',
				},
			},
			boxShadow: {
				header: '0px 2px 8px 0px rgba(0, 0, 0, 0.08)',
				dropdown: '0px 2px 8px 0px rgba(0, 0, 0, 0.04)',
				'price-card': '0px 1px 4px 0px rgba(0, 0, 0, 0.08)',
			},
			letterSpacing: {
				sm: '0.28px',
				md: '0.32px',
				lg: '0.72px',
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: 'fade-in .3s ease',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
