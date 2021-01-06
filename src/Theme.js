import { createMuiTheme } from '@material-ui/core/styles'

const bBlue = '#1983CA'
const bWhite = '#ffffff'
const bGreen = '#004E61'

export default createMuiTheme({
	props: {
		// Name of the component
		MuiButtonBase: {
			// The properties to apply
			disableRipple: true, // No more ripple, on the whole application!
		},
	},
	palette: {
		common: {
			blue: bBlue,
			white: bWhite,
			green: bGreen,
		},
		primary: {
			main: bBlue,
		},
		secondary: {
			main: bWhite,
		},
	},
	typography: {
		tab: {
			fontFamily: 'Raleway',
			textTransform: 'none',
			fontWeight: 600,
			fontSize: '15px',
			color: '#6e6e6e',
			padding: '8px',
		},
		h2: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '2.5rem',
			color: bBlue,
			lineHeight: 1.5,
		},
		subtitle1: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '1rem',
			color: '#6e6e6e',
			lineHeight: 1.5,
		},
	},
})
