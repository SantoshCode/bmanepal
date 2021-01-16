import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import React from 'react'
import logo from '../assets/logo.png'

const useStyles = makeStyles(theme => ({
	root: {
		margin: 13,
		padding: 10,
		maxWidth: 490,
		width: 345,
		height: 210,
		marginTop: '1em',
		[theme.breakpoints.down('md')]: {
			width: 270,
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
		background: '#DEF3FA',
		// boxShadow: ' 20px 20px 35px #ced9d9, -20px -20px 35px #ffffff',
		// border: `10px solid white`,

		borderRadius: 10,
		transition: 'all .5s',
		cursor: 'pointer',
		'&:hover': {
			transform: 'translateY(-8px)',
		},
	},
	logo: {
		// height: 100,
		// width: 100,
		padding: 2,
		// border: '1px solid red',
	},
	logoImg: {
		padding: 10,
		boxShadow: ' 20px 20px 35px #ced9d9, -20px -20px 35px #ffffff',
		borderRadius: 50,
	},
	title: {
		...theme.typography.h2,
		fontSize: '1.3rem',
		padding: '5px 10px',
		letterSpacing: 1,
	},
	desc: {
		fontFamily: 'Open Sans',
		// fontWeight: '500',
		fontSize: '16px',
		padding: 10,
	},
}))

export default function Program({ title, desc }) {
	const classes = useStyles()

	return (
		<Card className={classes.root} elevation={0}>
			<div className={classes.logo}>
				<img
					className={classes.logoImg}
					src={logo}
					alt=""
					height={'50px'}
					width={'50px'}
				/>
			</div>
			<div className={classes.title}>{title}</div>
			<div className={classes.desc}>{desc}</div>
		</Card>
	)
}
