import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(them => ({
	footer: {
		backgroundColoe: '#f5f5f5',
		width: '100%',
	},
}))

export default function Footer() {
	const classes = useStyles()

	return <footer className={classes.footer}></footer>
}
