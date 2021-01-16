import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
	startBtn: {
		...theme.typography.tab,
		fontFamily: 'Raleway',
		fontSize: '18px',
		minWidth: 0,
		letterSpacing: 'normal',
		padding: '10px 20px',
		color: '#fff',
		// marginLeft: '0em',
		marginRight: '23px',
		borderRadius: 30,
		height: 60,
		marginBottom: '1em',
		width: 200,
		background: 'linear-gradient(145deg, #1b8cd8, #1776b6)',
		boxShadow: '5px 5px 10px #d6d6d6,-5px -5px 10px #ffffff',
		'&:hover': {
			backgroundColor: theme.palette.primary.light,
		},
	},
}))

export default function CustomButton({ text, icon, ...rest }) {
	const classes = useStyles()
	return (
		<Button component={Link} className={classes.startBtn} {...rest}>
			{text}
			<span>
				{icon ? (
					<img src={icon} height={'40px'} width={'40px'} alt="" />
				) : null}
			</span>
		</Button>
	)
}
