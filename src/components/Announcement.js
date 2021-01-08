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
