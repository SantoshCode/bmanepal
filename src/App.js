import { ThemeProvider } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Investor from './Pages/Investor'
import LandingPage from './Pages/LandingPage'
import Startup from './Pages/Startup'
import theme from './Theme'

function App() {
	const [isLoading, setLoading] = useState(true)
	const [value, setValue] = useState(0)
	const [selectedIndex, setSelectedIndex] = useState(0)

	function fakeRequest() {
		return new Promise(resolve => setTimeout(() => resolve(), 2500))
	}

	useEffect(() => {
		fakeRequest().then(() => {
			const el = document.querySelector('.loader-container')
			if (el) {
				el.remove()
				setLoading(!isLoading)
			}
		})
	}, [isLoading])

	if (isLoading) {
		return null
	}

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
					{/* <Route exact path="/learn-more" component={LearnMore} /> */}
					<Route exact path="/investor" component={Investor} />
					<Route exact path="/startup" component={Startup} />
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
