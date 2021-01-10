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
		background: 'linear-gradient(145deg, #1b8cd8, #1776b6)',
		boxShadow: '5px 5px 10px #d6d6d6,-5px -5px 10px #ffffff',
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
