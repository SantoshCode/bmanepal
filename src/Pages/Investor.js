import { useMediaQuery } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Link } from 'react-router-dom'
import audit from '../assets/audit.svg'
import bar from '../assets/bar-chart.svg'
import SideBlob from '../assets/SideBlob.js'
import SideBubble from '../assets/SideBubble.js'
import InvestorHero from '../assets/investor.svg'
import market from '../assets/market.svg'
import sales from '../assets/sales.svg'
import tax from '../assets/tax.svg'
import Announcement from '../components/Announcement'
import Arrow from '../components/Arrow'
import Calender from '../components/Calender'
import HighLight from '../components/HighLight'
import Program from '../components/Program'
import Service from '../components/Service'

const useStyles = makeStyles(theme => ({
	hero: {
		position: 'relative',
		top: -50,
		maxWidth: '40em',
		minWidth: '29em',
		marginTop: '4em',
		marginLeft: '10%',
		'&>img': {
			width: '80%',
			height: '80%',
			[theme.breakpoints.down('xs')]: {
				// margin: 'auto',
				padding: '0 68px',
				width: '70%',
				height: '70%',
			},
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
		top: 500,
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
	heroItems4: {
		marginBottom: '6em',
	},
	dash: {
		marginTop: '0.8em',
		width: '70px',
		border: `1px solid ${theme.palette.common.blue}`,
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

export default function Investor() {
	const classes = useStyles()
	const theme = useTheme()
	const lgMatches = useMediaQuery(theme.breakpoints.only('lg'))
	const mdMatches = useMediaQuery(theme.breakpoints.only('md'))
	const smMatches = useMediaQuery(theme.breakpoints.only('sm'))
	const xsMatches = useMediaQuery(theme.breakpoints.down('xs'))

	const smWidth = lgMatches
		? '180mm'
		: mdMatches
		? '150mm'
		: smMatches
		? '120mm'
		: '180mm'
	const smHeight = lgMatches
		? '267mm'
		: mdMatches
		? '237mm'
		: smMatches
		? '207mm'
		: '267mm'

	const bgWidth = lgMatches
		? '1000'
		: mdMatches
		? '800'
		: smMatches
		? '695'
		: '1098'
	const bgHeight = lgMatches
		? '984'
		: mdMatches
		? '800'
		: smMatches
		? '680'
		: '1024'

	return (
		<>
			<div className={classes.wave}>
				{xsMatches ? null : (
					<SideBlob width={bgWidth} height={bgHeight} />
				)}
			</div>
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
									{xsMatches ? null : (
										<SideBubble
											width={smWidth}
											height={smHeight}
										/>
									)}
								</section>
								<Typography variant="h2" align="center">
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
								src={InvestorHero}
								height={'80%'}
								width={'80%'}
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
				<Grid item sm>
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
				{/* ----------------------------------------------------------Programmes--------------------------------------- */}

				<Grid item style={{ marginBottom: '5em' }}>
					<Grid container direction="row" justify="center">
						<Grid item>
							<Grid container direction="column">
								<Grid item>
									<Typography className={classes.highlight}>
										Programmes
									</Typography>
								</Grid>
								<Grid item>
									<Grid container direction="column">
										<Grid
											container
											direction="row"
											justify="center"
										>
											<Grid item>
												<Program
													title="Bmanepal Investor"
													desc="Support for investors looking to invest in the startup
                                    ecosystem."
												/>
											</Grid>
											<Grid item>
												<Program
													title="Bmanepal Equity"
													desc="Co-investment opportunities for investors that provide funding support for startups."
												/>
											</Grid>
											<Grid item>
												<Program
													title="Bmanepal Infrastructure"
													desc="Infrastructural support for startups, multipliers, and investors."
												/>
											</Grid>
										</Grid>
										<Grid
											container
											direction="row"
											justify="center"
										>
											<Grid item>
												<Program
													title="Bmanepal Investor"
													desc="Support for investors looking to invest in the startup
                                    ecosystem."
												/>
											</Grid>
											<Grid item>
												<Program
													title="Bmanepal Equity"
													desc="Co-investment opportunities for investors that provide funding support for startups."
												/>
											</Grid>
											<Grid item>
												<Program
													title="Bmanepal Infrastructure"
													desc="Infrastructural support for startups, multipliers, and investors."
												/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
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
