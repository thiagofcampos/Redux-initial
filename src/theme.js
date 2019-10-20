import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
	defaultSpacingLeft: 30,
	defaultSpacingRight: 20,
	typography: {
		fontFamily: 'Rubik',
		h5: {
			fontSize: '24px',
			fontWeight: 'normal',
			lineHeight: '1.33'
		}
	},
	palette: {
		primary: {
			main: '#455eee'
		},
		secondary: {
			main: '#ffffff'
		},
	},
	buttonConfirm: {
		backgroundColor: '#7fe5b1',
	},
});

export default responsiveFontSizes(theme)
