import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'

const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: '#f5f5f5',
		width: '100%',
		position: 'relative',
		zIndex: 1302,
	},
	link: {
		...theme.typography.tab,
		fontFamily: 'Arial',
		fontSize: '0.75em',
		paddingLeft: 0,
		fontWeight: 'bold',
		textDecoration: 'none',
		'&:hover': {
			color: theme.palette.common.blue,
		},
	},
	gridItem: {
		margin: '3em',
	},
	termSection: {
		borderTop: '1px solid #e3e3e3',
		padding: '10px calc(50% - 410px)',
	},
	icon: {
		height: '2.5em',
		width: '2.5em',
		[theme.breakpoints.down('xs')]: {
			height: '1.5em',
			width: '1.5em',
		},
	},
	footerTitle: {
		...theme.typography.tab,
		fontSize: '1.3em',
		fontWeight: 'bold',
		paddingLeft: 0,
		borderBottom: '1px solid #6e6e6e',
	},
}))

export default function Footer({
	value,
	setValue,
	selecetedIndex,
	setSelectedIndex,
}) {
	const classes = useStyles()

	return (
		<footer className={classes.footer}>
			<Grid container direction="column">
				<Grid container justify="center">
					<Grid item>
						<Grid container direction="row">
							<Grid item className={classes.gridItem}>
								<Grid container direction="column" spacing={2}>
									<Grid
										item
										className={classes.footerTitle}
										onClick={() => setValue(0)}
									>
										Company
									</Grid>
									<Grid
										item
										component={Link}
										to="/"
										className={classes.link}
										onClick={() => setValue(0)}
									>
										Home
									</Grid>
									<Grid
										item
										component={Link}
										to="/about"
										className={classes.link}
									>
										About Us
									</Grid>
									<Grid
										item
										component={Link}
										className={classes.link}
										to="/contact"
									>
										Contact Us
									</Grid>
								</Grid>
							</Grid>

							<Grid item className={classes.gridItem}>
								<Grid container direction="column" spacing={2}>
									<Grid
										item
										className={classes.footerTitle}
										onClick={() => setValue(0)}
									>
										Solutions
									</Grid>
									<Grid
										item
										component={Link}
										className={classes.link}
										to="/start-a-company"
										onClick={() => {
											setValue(1)
											setSelectedIndex(1)
										}}
									>
										Start a Company
									</Grid>
									<Grid
										item
										component={Link}
										className={classes.link}
										to="/grow-your-startup"
										onClick={() => {
											setValue(2)
											setSelectedIndex(2)
										}}
									>
										Grow Your Startup
									</Grid>
									<Grid
										item
										component={Link}
										className={classes.link}
										to="/raise-capital"
										onClick={() => {
											setValue(3)
											setSelectedIndex(3)
										}}
									>
										Raise Capital
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container direction="row">
							<Grid item className={classes.gridItem}>
								<Grid container direction="column" spacing={2}>
									<Grid
										item
										className={classes.footerTitle}
										onClick={() => setValue(0)}
									>
										Products
									</Grid>
									<Grid
										item
										component={Link}
										className={classes.link}
										to="/startups"
									>
										Bmanepal for startups
									</Grid>
									<Grid
										item
										component={Link}
										className={classes.link}
										to="/investors"
									>
										Bmanepal for investors
									</Grid>
								</Grid>
							</Grid>
							<Grid item className={classes.gridItem}>
								<Grid container direction="column" spacing={2}>
									<Grid
										item
										className={classes.footerTitle}
										onClick={() => setValue(0)}
									>
										Resources
									</Grid>
									<Grid
										item
										component={Link}
										className={classes.link}
										to="/blog"
									>
										Blog
									</Grid>
									<Grid
										item
										component={Link}
										className={classes.link}
										to="/support"
									>
										Support
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.termSection}>
					<Grid container direction="row" justify="center">
						<Grid item>
							<Grid container>
								<Grid
									item
									component={Link}
									className={classes.link}
									to="/terms"
									style={{ marginRight: '0.6rem' }}
								>
									Terms of Service
								</Grid>
								<Grid
									item
									component={Link}
									className={classes.link}
									to="/policy"
									style={{ marginRight: '0.6rem' }}
								>
									Privary Policy
								</Grid>
								<Grid
									item
									component={Link}
									className={classes.link}
									style={{ marginRight: '0.6rem' }}
									to="/policy"
								>
									&copy; Bmanepal 2021
								</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<Grid container>
								<Grid
									item
									component={'a'}
									href="https://www.facebook.com"
									rel="noopener noreferrer"
									target="_blank"
									style={{ marginRight: '0.6rem' }}
								>
									<img
										src={facebook}
										alt="facebook logo"
										className={classes.icon}
									/>
								</Grid>
								<Grid
									item
									component={'a'}
									href="https://www.twitter.com"
									rel="noopener noreferrer"
									target="_blank"
									style={{ marginRight: '0.6rem' }}
								>
									<img
										src={twitter}
										alt="facebook logo"
										className={classes.icon}
									/>
								</Grid>
								<Grid
									item
									component={'a'}
									href="https://www.instagram.com"
									rel="noopener noreferrer"
									target="_blank"
									style={{ marginRight: '0.6rem' }}
								>
									<img
										src={instagram}
										alt="facebook logo"
										className={classes.icon}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</footer>
	)
}
