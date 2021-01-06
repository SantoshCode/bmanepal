import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import theme from './Theme'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './Pages/LandingPage'

function App() {
	const [value, setValue] = useState(0)
	const [selectedIndex, setSelectedIndex] = useState(0)

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route
						exact
						path="/start-a-company"
						component={() => <div>start-a-company</div>}
					/>
					<Route
						exact
						path="/grow-your-startup"
						component={() => <div>grow-your-startup</div>}
					/>
					<Route
						exact
						path="/raise-capital"
						component={() => <div>raise-capital</div>}
					/>
					<Route
						exact
						path="/sign-in"
						component={() => <div>sign-in</div>}
					/>
					<Route
						exact
						path="/start"
						component={() => <div>Get Started</div>}
					/>
				</Switch>
				<Footer
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
