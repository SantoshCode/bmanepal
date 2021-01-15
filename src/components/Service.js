import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	service: {
		textAlign: 'center',
		width: '250px',
		// border: `1px solid ${theme.palette.common.blue}`,
		borderRadius: 10,
		padding: '30px 20px 60px 20px',
		// background: '#ffffff',
		// boxShadow: `20px 20px 40px #d9d9d9,-20px -20px 40px #ffffff`,
		// borderRadius: '10px',
		// boxShadow: '4px 8px 12px 0 rgba(35,31,32,.1)',
		transition: 'all .5s',
		cursor: 'pointer',
		'&:hover': {
			transform: 'translateY(-8px)',
		},
		margin: '0 3em',
		[theme.breakpoints.down('md')]: {
			margin: '0 2em',
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: '2em',
			marginLeft: '2em',
			marginRight: '2em',
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '2em',
		},
	},
	serviceImage: {
		height: '3em',
		width: '3em',
		padding: '10px',
		marginBottom: '1em',
		borderRadius: '10px',
		background: 'linear-gradient(145deg, #1b8cd8, #1776b6)',
		boxShadow: `20px 20px 40px #d9d9d9,-20px -20px 40px #ffffff`,
	},
	serviceTitle: {
		...theme.typography.h2,
		fontSize: '1.3rem',
		marginBottom: '1em',
	},
	serviceDesc: {
		...theme.typography.subtitle2,
		fontSize: '1rem',
	},
}))

export default function Service({ image, title, desc }) {
	const classes = useStyles()
	return (
		<Grid item className={classes.service}>
			<Grid container direction="column">
				<Grid item>
					<img
						src={image}
						className={classes.serviceImage}
						alt="icon"
					/>
				</Grid>
				<Grid item className={classes.serviceTitle}>
					{title}
				</Grid>
				<Grid item className={classes.serviceDesc}>
					{desc}
				</Grid>
			</Grid>
		</Grid>
	)
}
