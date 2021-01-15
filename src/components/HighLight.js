import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

import sample from '../assets/sample.png'

const useStyles = makeStyles(theme => ({
	root: {
		width: 445,
		maxWidth: 445,
		// boxShadow: '4px 8px 12px 0 rgba(35,31,32,.1)',
		backgroundColor: 'rgba(255, 255, 255, 0.1);',
		padding: 20,
		boxShadow:
			'0px 1px 3px rgba(0, 0, 0, 0.05), 0px 20px 40px rgba(92, 103, 153, 0.2)',
		borderRadius: 30,
		border: '8px solid #fff',
		transition: 'all .5s',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			width: 400,
		},
		'&:hover': {
			transform: 'translateY(-8px)',
		},
	},
	media: {
		height: 240,
	},
	hightLightTitile: {
		padding: '10px 60px',
	},
	applyNow: {
		border: `1px solid ${theme.palette.common.blue}`,
		color: theme.palette.common.blue,
		fontSize: 14,
		fontWeight: 600,
		marginBottom: 24,
		borderRadius: 4,
		cursor: 'pointer',
		'&:hover': {
			background: theme.palette.common.blue,
			color: '#fff',
		},
	},
}))

export default function HighLight() {
	const classes = useStyles()
	return (
		<Card className={classes.root} elevation={0}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={sample}
					title="Sustaintech Acelerator"
				/>
			</CardActionArea>
			<Typography
				gutterBottom
				variant="h5"
				component="h2"
				className={classes.hightLightTitile}
			>
				Sustaintech Xcelerator
			</Typography>
			<CardActions>
				<Button size="small" className={classes.applyNow}>
					Apply Now
				</Button>
			</CardActions>
		</Card>
	)
}
