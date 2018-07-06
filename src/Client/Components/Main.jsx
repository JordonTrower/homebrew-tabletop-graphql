import React from 'react';

import Sidebar from './Common/Sidebar';
import '../Styles/App.css';
import logo from './logo.svg';
import Body from './Styled/Body';
import Container from './Styled/Container';
import Row from './Styled/Row';

export default () => (
	<Body className="App">
		<Sidebar />
		<Container>
			<Row>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
			</Row>
			<Row>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to
					reload.
				</p>
			</Row>
		</Container>
	</Body>
);
