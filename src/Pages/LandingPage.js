import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Arrow from '../components/Arrow'
import Hero1 from '../assets/startup.svg'
import bar from '../assets/bar-chart.svg'
import audit from '../assets/audit.svg'
import market from '../assets/market.svg'
import sales from '../assets/sales.svg'
import tax from '../assets/tax.svg'
import CustomButton from '../components/CustomButton'
import Service from '../components/Service'
import HighLight from '../components/HighLight'
import Announcement from '../components/Announcement'
import Calender from '../components/Calender'

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
			marginRight: '2em',
		},
	},
	wave: {
		position: 'absolute',
		top: 0,
		margin: 0,
		padding: 0,
		background: theme.palette.common.blue,
		opacity: 0.07,
		width: '100%',
		height: '870px',
		zIndex: -1,
	},
	curve: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		'&>path': {
			fill: '#fff',
		},
	},
	heroItems: {
		marginBottom: '10em',
	},
	heroItems2: {
		marginBottom: '6em',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '0em',
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: '0',
		},
	},
	heroItems3: {
		marginBottom: '7em',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '1em',
		},
	},
	heroItems4: {
		marginBottom: '6em',
	},
	dash: {
		marginTop: '0.8em',
		width: '70px',
		border: `4px solid ${theme.palette.common.blue}`,
		borderRadius: 5,
	},
	highlight: {
		fontSize: 36,
		color: '#383838',
		marginBottom: 30,
	},
	highlightMargin: {
		margin: '0 2em',
	},
	announceAll: {
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
			background: theme.palette.common.blue,
			color: '#fff',
		},
	},
}))

export default function LandingPage() {
	const classes = useStyles()
	const theme = useTheme()
	return (
		<>
			<section className={classes.wave}>
				<svg
					className={classes.curve}
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1416.99 174.01"
				>
					<path
						className="cls-1"
						d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
						transform="translate(0-135.53)"
					/>
				</svg>
			</section>
			{/* --------------------------------------------------------------------------------------------------------------------------- */}
			<Grid
				container
				direction="column"
				className={classes.mainContainer}
			>
				<Grid item className={classes.heroItems}>
					<Grid
						container
						justify="flex-end"
						alignItems="center"
						direction="row"
					>
						<Grid sm item className={classes.heroTextContainer}>
							<Grid container direction="column">
								<Typography variant="h2" align="center">
									Business Management <br />
									Consultant
								</Typography>
								<br />
								<Typography variant="subtitle1" align="center">
									You Run The Business, We help you How to Run
									It.
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
				{/* --------------------------------------------------------------------------------------------------------------------------- */}
				<Grid item className={classes.heroItems2}>
					<Grid container alignItems="center" direction="column">
						<Grid item>
							<Typography variant="subtitle2">
								Our Services
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="h3">What we do</Typography>
						</Grid>
						<Grid item>
							<hr className={classes.dash} />
						</Grid>
					</Grid>
				</Grid>
				{/* --------------------------------------------------------------------------------------------------------------------------- */}
				<Grid item className={classes.heroItems3} sm>
					<Grid container justify="center" direction="row">
						<Service
							image={bar}
							title="Corporate Finance"
							desc="In the tumultuos business of
					              cutting-in and attending to a
					            whale, there is much running"
						/>
						<Service
							image={audit}
							title="Audit & Evaluation"
							desc="Retro occupy organic, stumptown shabby chich pour-over roof party DIY normore"
						/>
						<Service
							image={market}
							title="Market Analysis"
							desc="Ready to analysis your e-product to ready live"
						/>
					</Grid>
				</Grid>
				{/* --------------------------------------------------------------------------------------------------------------------------- */}
				<Grid item className={classes.heroItems4} sm>
					<Grid container justify="center" direction="row">
						<Service
							image={tax}
							title="Tax & Efficiency"
							desc="In the tumultuos business of
					              cutting-in and attending to a
					            whale, there is much running"
						/>
						<Service
							image={sales}
							title="Sales & Trade"
							desc="Ready to sales and comfortable with other, ever trade to made you be a billionare"
						/>
					</Grid>
				</Grid>
				{/* --------------------------------------------HIGHLIGHTS------------------------------------------------------------------------------- */}
				<Grid item>
					<Grid container direction="row" justify="center">
						<Grid item>
							<Grid container direction="column">
								<Grid item>
									<Typography className={classes.highlight}>
										Highlights
									</Typography>
								</Grid>
								<Grid item>
									<HighLight />
								</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							className={classes.highlightMargin}
							style={{ marginTop: '3em' }}
						>
							<Grid container direction="column">
								<Grid item>
									<Grid item>
										<Typography
											className={classes.highlight}
											style={{ fontSize: '20px' }}
										>
											Annoucements
										</Typography>
									</Grid>
									<Grid item>
										<Grid container direction="column">
											<Grid item>
												<Announcement />
											</Grid>
											<br />
											<Grid item>
												<Announcement />
											</Grid>
											<br />
											<Grid item>
												<Announcement />
											</Grid>
											<br />
											<Grid item>
												<Typography
													className={
														classes.announceAll
													}
												>
													View all annoucements
												</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* --------------------------------------------Featured News------------------------------------------------------------------------------- */}
				<Grid item style={{ marginBottom: '4em', padding: '0 1em' }}>
					<Grid container direction="row" justify="center">
						<Grid item style={{ marginTop: '3em' }}>
							<Grid container direction="column">
								<Grid item>
									<Grid item>
										<Typography
											className={classes.highlight}
											style={{ fontSize: '20px' }}
										>
											Featured News
										</Typography>
									</Grid>
									<Grid item>
										<Grid container direction="column">
											<Grid item>
												<Announcement />
											</Grid>
											<br />
											<Grid item>
												<Announcement />
											</Grid>
											<br />
											<Grid item>
												<Announcement />
											</Grid>
											<br />
											<Grid item>
												<Typography
													className={
														classes.announceAll
													}
													style={{ width: '7em' }}
												>
													View all news
												</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid item className={classes.highlightMargin}>
							<Grid container direction="column">
								<Grid item>
									<Typography
										className={classes.highlight}
										style={{
											fontSize: '20px',
											marginTop: '3em',
										}}
									>
										Upcoming events
									</Typography>
								</Grid>
								<Grid item>
									<Calender />
								</Grid>
								<br />
								<Grid item>
									<Calender />
								</Grid>

								<Grid item>
									<Typography
										className={classes.announceAll}
										style={{ width: '8em' }}
									>
										View all Events
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}
