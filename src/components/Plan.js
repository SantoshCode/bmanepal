import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CheckIcon from '@material-ui/icons/Check'
import React from 'react'

const useStyles = makeStyles(theme => ({
	root: {
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
			marginTop: '4em',
		},
		[theme.breakpoints.down('xs')]: {
			width: 345,
			marginTop: '4em',
		},
		height: 500,
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
	special: {
		// marginTop: '1em',
		border: `4px solid ${theme.palette.common.blue}`,
		transform: 'translateY(-50px)',
		'&:hover': {
			transform: 'translateY(-58px)',
		},
		[theme.breakpoints.down('sm')]: {
			transform: 'translateY(0px)',
			'&:hover': {
				transform: 'translateY(-8px)',
			},
		},
	},
	title: {
		padding: 15,
		borderBottom: '1px solid lightgrey',
		textTransform: 'uppercase',
	},
	price: {
		padding: 13,
	},
	btnPrice: {
		border: `1px solid ${theme.palette.common.blue}`,
		color: theme.palette.common.blue,
		padding: '1em',
		fontSize: 14,
		fontWeight: 600,
		marginTop: 24,
		borderRadius: 4,
		width: '13em',
		cursor: 'pointer',
		'&:hover': {
			background: 'transparent',
			// background: theme.palette.common.blue,
			// color: '#fff',
		},
	},
	itemContainer: {
		padding: '20px 10px',
		marginTop: '1em',
	},
	item: {
		display: 'flex',
		justifyContent: 'flex-start',
		padding: '5px 10px',
	},
	tick: {
		marginRight: '1em',
		color: theme.palette.common.blue,
		// padding: 10,
	},
}))

export default function Plan({ title, price, items }) {
	const classes = useStyles()

	return (
		<Card
			className={`${classes.root} ${
				title === 'Standard' ? classes.special : ''
			}`}
			elevation={0}
		>
			<div className={classes.title}>
				<Typography variant="h4">{title}</Typography>
			</div>
			<div className={classes.price}>
				<Typography variant="h1">{`NRP ${price}`}</Typography>
			</div>
			<div className={classes.btn}>
				<Button variant="outlined" className={classes.btnPrice}>
					<span style={{ marginRight: 10 }}>GET STARTED</span>
				</Button>
			</div>
			<div className={classes.itemContainer}>
				{items.map(item => (
					<div className={classes.item} key={`plan-${item}`}>
						<span className={classes.tick}>
							<CheckIcon />
						</span>
						<span>
							<Typography variant="h5">{item}</Typography>
						</span>
					</div>
				))}
			</div>
		</Card>
	)
}
