import type { Config } from 'tailwindcss'
import { COLORS } from './src/constants/colors.const'

const config: Config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: COLORS,
			padding: {
				layout: '1.25rem'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '333ms'
			}
		}
	},
	plugins: []
}
export default config
