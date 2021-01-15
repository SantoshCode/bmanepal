import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import sample from '../assets/sample.png'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		boxShadow:
			'0px 1px 3px rgba(0, 0, 0, 0.05), 0px 20px 40px rgba(92, 103, 153, 0.2)',
		borderRadius: 10,
		border: '4px solid #fff',
		padding: 10,
		backgroundColor: 'rgba(255, 255, 255, 0.1);',
		transition: 'all .5s',
		cursor: 'pointer',
		'&:hover': {
			transform: 'translateY(-8px)',
		},
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 151,
	},

	announceTitle: {
		...theme.typography.h5,
	},
	announceDesc: {
		...theme.typography.h6,
	},
}))

export default function HighLight() {
	const classes = useStyles()
	return (
		<Card className={classes.root} elevation={0}>
			<CardMedia
				className={classes.cover}
				image={sample}
				title="Live from space album cover"
			/>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography className={classes.announceTitle}>
						Our domain name is now bmanepal.com
					</Typography>
					<Typography className={classes.announceDesc}>
						23 SEP 2020, Bmanepal
					</Typography>
				</CardContent>
			</div>
		</Card>
	)
}
