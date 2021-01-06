import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Arrow from '../components/Arrow'
import Hero1 from '../assets/startup.svg'
import CustomButton from '../components/CustomButton'

const useStyles = makeStyles(theme => ({
	hero: {
		maxWidth: '50em',
		minWidth: '21em',
		marginTop: '2em',
		marginLeft: '10%',
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
		fontFameily: 'Roboto',
		fontWeight: 'bold',
		fontSize: '0.9rem',
		height: 45,
		width: 145,
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
	heroTextContainer: {
		minWidth: '21.5em',
		marginLeft: '1em',
		[theme.breakpoints.down('xs')]: {
			// marginRight: '2em',
			marginLeft: 0,
		},
	},
}))

export default function LandingPage() {
	const classes = useStyles()
	const theme = useTheme()
	return (
		<Grid container direction="column" className={classes.mainContainer}>
			<Grid item>
				<Grid
					container
					justify="flex-end"
					alignItems="center"
					direction="row"
				>
					<Grid sm item className={classes.heroTextContainer}>
						<Grid container direction="column">
							<Typography variant="h2" align="center">
								For Startups & Founders
							</Typography>
							<Typography variant="subtitle1" align="center">
								Providing opportunities for mentorship, funding,{' '}
								<br />
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
							src={Hero1}
							height={'100%'}
							width={'100%'}
							alt="startupimage"
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
