import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import React from 'react'
import logo from '../assets/logo.png'

const useStyles = makeStyles(theme => ({
	root: {
		margin: '0px 10px',
		padding: 10,
		maxWidth: 490,
		width: 345,
		marginTop: '1em',
		[theme.breakpoints.down('md')]: {
			width: 270,
			// marginTop: '4em',
		},
		[theme.breakpoints.down('sm')]: {
			width: 450,
			// marginTop: '4em',
		},
		[theme.breakpoints.down('xs')]: {
			width: 345,
			// marginTop: '4em',
		},
		// height: 500,
		textAlign: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.9);',
		boxShadow:
			'0px 1px 3px rgba(0, 0, 0, 0.05), 0px 20px 40px rgba(92, 103, 153, 0.2)',
		borderRadius: 10,
		transition: 'all .5s',
		// cursor: 'pointer',
		'&:hover': {
			transform: 'translateY(-8px)',
		},
	},
	logo: {
		// height: 100,
		// width: 100,
		padding: 20,
	},
	title: {
		fontFamily: 'Raleway',
		fontWeight: 700,
		fontSize: '20px',
		letterSpacing: 1,
		color: '#161e2e',
		padding: '5px 10px',
	},
	desc: {
		fontFamily: 'Raleway',
		fontSize: '16px',
		padding: 10,
	},
}))

export default function Program({ title, desc }) {
	const classes = useStyles()

	return (
		<Card className={classes.root} elevation={0}>
			<div className={classes.logo}>
				<img src={logo} alt="" height={'50px'} width={'50px'} />
			</div>
			<div className={classes.title}>{title}</div>
			<div className={classes.desc}>{desc}</div>
		</Card>
	)
}
