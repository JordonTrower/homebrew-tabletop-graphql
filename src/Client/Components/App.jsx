import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Styled/Header';
import Main from './Main';

const App = () => (
	<BrowserRouter>
		<div>
			<Header />

			<Switch>
				<Route exact path="/" component={Main} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default App;
