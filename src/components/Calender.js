import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		boxShadow:
			'0px 1px 3px rgba(0, 0, 0, 0.05), 0px 20px 40px rgba(92, 103, 153, 0.2)',
		borderRadius: 10,
		padding: 10,
		border: '4px solid #fff',
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

	announceTitle: {
		...theme.typography.h5,
	},
	announceDesc: {
		...theme.typography.h6,
	},
	box: {
		width: 80,
		height: 75,
		WebkitBoxShadow: '4px 8px 12px 0 rgba(35,31,32,.1)',
		boxShadow: '4px 8px 12px 0 rgba(35,31,32,.1)',
		WebkitBoxOrient: 'vertical',
		WebkitBoxDirection: 'normal',
		flexDirection: 'column',
		WebkitBoxPack: 'center',
		MsFlexPack: 'center',
		justifyContent: 'center',
		WebkitBoxAlign: 'center',
		MsFlexAlign: 'center',
		alignItems: 'center',
		MsFlexPreferredSize: 80,
		flexBasis: 80,
		MsFlexNegative: 0,
		flexShrink: 0,
	},
	boxDay: {
		...theme.typography.h2,
		textAlign: 'center',
	},
	boxMonth: {
		display: 'block',
		color: '#757575',
		fontSize: 14,
		fontWeight: 600,
		lineHeight: 19,
		textAlign: 'center',
	},
}))

export default function HighLight() {
	const classes = useStyles()
	return (
		<Card className={classes.root} elevation={0}>
			<div className={classes.box}>
				<span>
					<Typography className={classes.boxDay}>15</Typography>
				</span>
				<span className={classes.boxMonth}>
					<Typography>JAN</Typography>
				</span>
			</div>
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
