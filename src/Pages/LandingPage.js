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
import Drawing from '../assets/drawing.js'
import Drawing2 from '../assets/drawing2.js'

import CustomButton from '../components/CustomButton'
import Service from '../components/Service'
import HighLight from '../components/HighLight'
import Announcement from '../components/Announcement'
import Calender from '../components/Calender'
import { useMediaQuery } from '@material-ui/core'

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
		right: 0,
		margin: 0,
		padding: 0,
		opacity: 0.7,
		zIndex: -1,
		[theme.breakpoints.down('md')]: {
			opacity: 0.3,
		},
	},
	wave2: {
		position: 'absolute',
		top: 0,
		left: 0,
		margin: 0,
		padding: 0,
		opacity: 0.7,
		[theme.breakpoints.down('md')]: {
			opacity: 0.3,
		},
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
		marginBottom: '5em',
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
	const lgMatches = useMediaQuery(theme.breakpoints.only('lg'))
	const mdMatches = useMediaQuery(theme.breakpoints.only('md'))
	const smMatches = useMediaQuery(theme.breakpoints.only('sm'))
	const xsMatches = useMediaQuery(theme.breakpoints.down('xs'))

	const bgWidth = lgMatches
		? '830mm'
		: mdMatches
		? '610mm'
		: smMatches
		? '495mm'
		: '1000mm'
	const bgHeight = lgMatches
		? '650mm'
		: mdMatches
		? '520mm'
		: smMatches
		? '480mm'
		: '744mm'

	const smWidth = lgMatches
		? '180mm'
		: mdMatches
		? '150mm'
		: smMatches
		? '120mm'
		: '210mm'
	const smHeight = lgMatches
		? '267mm'
		: mdMatches
		? '237mm'
		: smMatches
		? '207mm'
		: '297mm'

	return (
		<>
			<section className={classes.wave}>
				{xsMatches ? null : (
					<Drawing width={bgWidth} height={bgHeight} />
				)}
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
								<section className={classes.wave2}>
									{/* <img src={drawing2} alt="curve" /> */}

									{xsMatches ? null : (
										<Drawing2
											width={smWidth}
											height={smHeight}
										/>
									)}
								</section>
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
