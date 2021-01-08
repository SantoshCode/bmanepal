import React, { useEffect, useMemo, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import logo from '../assets/logo.png'
import {
	SwipeableDrawer,
	Tab,
	Tabs,
	Typography,
	useMediaQuery,
	IconButton,
	List,
	ListItem,
	ListItemText,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
	appbar: {
		// borderBottom: '1px solid #e3e3e3;',
		// background: theme.palette.common.blue,
		// opacity: 0.07,
		padding: '10px calc(50% - 640px)',
		zIndex: theme.zIndex.modal + 1,
		background: 'transparent',
	},
	logo: {
		height: '3em',
		[theme.breakpoints.down('md')]: {
			height: '2em',
		},
		[theme.breakpoints.down('xs')]: {
			height: '1.4em',
		},
	},
	logoContainer: {
		marginLeft: '23px',
		padding: 0,
		'&:hover': {
			backgroundColor: 'transparent',
		},
		marginRight: '1em',
	},
	logoName: {
		textTransform: 'none',
		letterSpacing: 1.8,
		fontSize: '1.8em',
		marginLeft: '0.3em',
	},
	tabContainer: {
		marginRight: 'auto',
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '0.4em',
	},
	button2: {
		...theme.typography.tab,
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	leave: {
		display: 'none',
	},
	drawerIconContainer: {
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	drawerIcon: {
		height: '50px',
		width: '50px',
	},
	drawerItemSelected: {
		'&. .MuiListItemText-root': {
			opacity: 1,
		},
	},
	drawerItem: {
		...theme.typography.tab,
		opacity: 0.7,
	},
	drawer: {
		backgroundColor: theme.palette.common.white,
	},
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em',
		[theme.breakpoints.down('md')]: {
			marginBottom: '2em',
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: '1.3em',
		},
	},
}))

function Header({ value, setValue, selectedIndex, setSelectedIndex }) {
	const theme = useTheme()
	const classes = useStyles()
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
	const matches = useMediaQuery(theme.breakpoints.down('sm'))

	const [openDrawer, setOpenDrawer] = useState(false)
	const handleChange = (e, newValue) => {
		setValue(newValue)
	}

	const routes = useMemo(
		() => [
			{
				id: 'r2',
				name: 'Start a Company',
				link: '/start-a-company',
				activeIndex: 1,
			},
			{
				id: 'r3',
				name: 'Grow Your Startup',
				link: '/grow-your-startup',
				activeIndex: 2,
			},
			{
				id: 'r4',
				name: 'Raise Capital',
				link: '/raise-capital',
				activeIndex: 3,
			},
			// { id: 'r5', name: 'Sign In', link: '/sign-in', activeIndex: 4 },
			// { id: 'r5', name: 'Sign In', link: '/start', activeIndex: 5 },
		],
		[]
	)

	useEffect(() => {
		routes.forEach(route => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (value !== route.activeIndex) {
						setValue(route.activeIndex)
						if (
							route.selectedIndex &&
							route.selectedIndex !== selectedIndex
						) {
							setSelectedIndex(route.selectedIndex)
						}
					}
					break
				default:
					break
			}
		})
	}, [routes, selectedIndex, setSelectedIndex, setValue, value])

	const tabs = (
		<React.Fragment>
			<Tabs
				value={value}
				onChange={handleChange}
				className={classes.tabContainer}
				indicatorColor="secondary"
			>
				<Tab className={classes.leave} value={0} />
				<Tab
					className={classes.tab}
					component={Link}
					label="Start a Company"
					to="/start-a-company"
					value={1}
				/>
				<Tab
					className={classes.tab}
					component={Link}
					label="Grow Your Startup"
					to="/grow-your-startup"
					value={2}
				/>

				<Tab
					className={classes.tab}
					component={Link}
					label="Raise Capital"
					to="/raise-capital"
					value={3}
				/>
				<Tab className={classes.leave} value={4} />
				<Tab className={classes.leave} value={5} />
			</Tabs>
			<Button
				component={Link}
				to="/sign-in"
				variant="text"
				className={classes.button2}
				onClick={() => setValue(4)}
				style={{ color: '#333' }}
			>
				Sign In
			</Button>
			<CustomButton
				component={Link}
				to="/start"
				onClick={() => setValue(5)}
				text="Get Started"
				variant="contained"
			/>
		</React.Fragment>
	)

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<div className={classes.toolbarMargin} />
				<List>
					{routes.map(route => (
						<ListItem
							key={`list-${route.id}`}
							onClick={() => {
								setOpenDrawer(false)
								setValue(route.activeIndex)
							}}
							divider
							button
							classes={{ selected: classes.drawerItemSelected }}
							selected={value === route.activeIndex}
							component={Link}
							to={`${route.link}`}
						>
							<ListItemText
								className={classes.drawerItem}
								disableTypography
							>
								{route.name}
							</ListItemText>
						</ListItem>
					))}
					<ListItem
						onClick={() => {
							setOpenDrawer(false)
							setValue(4)
						}}
						divider
						button
						classes={{
							root: classes.drawerItemEstimate,
							selected: classes.drawerItemSelected,
						}}
						selected={value === 4}
						component={Link}
						to="/sing-in"
					>
						<Button className={classes.button2}>Sign in</Button>
					</ListItem>
					<ListItem
						onClick={() => {
							setOpenDrawer(false)
							setValue(5)
						}}
						divider
						button
						classes={{
							root: classes.drawerItemEstimate,
							selected: classes.drawerItemSelected,
						}}
						selected={value === 5}
						component={Link}
						to="/start"
					>
						<Button
							className={classes.button2}
							style={{
								backgroundColor: theme.palette.common.blue,
								color: theme.palette.common.white,
							}}
						>
							Get Started
						</Button>
					</ListItem>
				</List>
			</SwipeableDrawer>
		</React.Fragment>
	)

	return (
		<React.Fragment>
			<AppBar
				position="static"
				color="secondary"
				className={classes.appbar}
				elevation={0}
			>
				<Toolbar disableGutters>
					{matches ? (
						<IconButton
							className={classes.drawerIconContainer}
							onClick={() => setOpenDrawer(!openDrawer)}
							disableRipple
						>
							<MenuIcon className={classes.drawerIcon} />
						</IconButton>
					) : null}
					<Button
						component={Link}
						to="/"
						disableRipple
						onClick={() => setValue(0)}
						className={classes.logoContainer}
					>
						<img
							src={logo}
							className={classes.logo}
							alt="company logo"
						/>
						<Typography className={classes.logoName}>
							bmanepal
						</Typography>
					</Button>
					{matches ? drawer : tabs}
				</Toolbar>
			</AppBar>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	)
}

export default Header
