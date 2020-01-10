import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Intro from './containers/intro'

class App extends Component {
	render() {
		return (
			<Router>
				<section>
					<Switch>
						<Route exact path="/v2/" component={Intro} />
					</Switch>
				</section>
			</Router>
		);
	}
}

export default App;