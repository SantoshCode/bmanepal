import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
	startBtn: {
		...theme.typography.tab,
		minWidth: 0,
		letterSpacing: 'normal',
		padding: '0 20px',
		color: '#fff',
		marginLeft: '1em',
		marginRight: '23px',
		borderRadius: 50,
		height: 45,
		width: 145,
		backgroundColor: theme.palette.common.blue,
		'&:hover': {
			backgroundColor: theme.palette.primary.light,
		},
	},
}))

export default function CustomButton({ text, ...rest }) {
	const classes = useStyles()
	return (
		<Button className={classes.startBtn} {...rest}>
			{text}
		</Button>
	)
}
