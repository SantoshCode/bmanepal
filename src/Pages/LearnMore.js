import React from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CustomButton from '../components/CustomButton'

import { makeStyles, useTheme } from '@material-ui/core/styles'

import Startup2 from '../assets/startup2.svg'
import Investor from '../assets/investor.svg'
import Arrow from '../components/Arrow'

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
	heroTextContainer: {
		minWidth: '21.5em',
		[theme.breakpoints.down('xs')]: {
			marginRight: '2em',
		},
	},
	mainContainer: {
		marginTop: '5em',
		[theme.breakpoints.down('md')]: {
			marginTop: '3em',
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '2em',
		},
	},
	buttonContainer: {
		marginTop: '1em',
	},
	learnBtnHero: {
		borderColor: theme.palette.common.blue,
		color: theme.palette.common.blue,
		borderWidth: 2,
		textTransform: 'none',
		borderRadius: 50,
		fontWeight: 'bold',
		fontSize: '0.9rem',
		height: 45,
		width: 145,
	},
	hero: {
		maxWidth: '35em',
		minWidth: '18em',
		marginTop: '2em',
		marginLeft: '10%',
	},
}))

export default function LearnMore() {
	const classes = useStyles()
	const theme = useTheme()
	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			className={classes.mainContainer}
		>
			<Grid item style={{ marginBottom: '5em' }}>
				<Grid
					container
					justify="flex-end"
					alignItems="center"
					direction="row"
				>
					<Grid sm item className={classes.heroTextContainer}>
						<Grid container direction="column">
							<Typography
								variant="h2"
								align="center"
								style={{ fontSize: '2rem' }}
							>
								For Startups & Founders
							</Typography>
							<br />
							<Typography variant="subtitle1" align="center">
								Providing opportunities for mentorship, funding,
								talent, and infrastructure.
							</Typography>
						</Grid>
						<Grid
							container
							justify="center"
							direction="row"
							className={classes.buttonContainer}
						>
							<Grid item>
								<CustomButton
									variant="contained"
									disableElevation
									text="Get Started"
								/>
							</Grid>
							<Grid item>
								<Button
									component={Link}
									to="/learn-more"
									variant="outlined"
									className={classes.learnBtnHero}
								>
									<span style={{ marginRight: 10 }}>
										Learn More
									</span>
									<Arrow
										width={15}
										height={15}
										fill={theme.palette.common.blue}
									/>
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid sm item className={classes.hero}>
						<img
							src={Startup2}
							height={'100%'}
							width={'100%'}
							alt="startupimage"
						/>
					</Grid>
				</Grid>
			</Grid>
			{/* ----------------------------------------------------------------------------------------- */}
			<Grid item>
				<Grid
					container
					justify="flex-end"
					alignItems="center"
					direction="row"
				>
					<Grid sm item className={classes.heroTextContainer}>
						<img
							src={Investor}
							height={'100%'}
							width={'100%'}
							alt="startupimage"
						/>
					</Grid>
					<Grid sm item className={classes.hero}>
						<Grid container direction="column">
							<Typography
								variant="h2"
								align="center"
								style={{ fontSize: '2rem' }}
							>
								For Investors
							</Typography>
							<br />
							<Typography variant="subtitle1" align="center">
								Encouraging strategic investments into the
								startup ecosystem.
							</Typography>
						</Grid>
						<Grid
							container
							justify="center"
							direction="row"
							className={classes.buttonContainer}
						>
							<Grid item>
								<CustomButton
									variant="contained"
									disableElevation
									text="Get Started"
								/>
							</Grid>
							<Grid item>
								<Button
									component={Link}
									to="/learn-more"
									variant="outlined"
									className={classes.learnBtnHero}
								>
									<span style={{ marginRight: 10 }}>
										Learn More
									</span>
									<Arrow
										width={15}
										height={15}
										fill={theme.palette.common.blue}
									/>
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
