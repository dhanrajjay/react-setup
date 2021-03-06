import React, { Component } from 'react';
import { Translation } from 'react-i18next';
import i18n from '../i18n';
import Header from './header';
import Footer from './footer';
import ROUTES_LIST, { Routes } from '../core/routes';
import '../style/app.scss';

class App extends Component {
	render() {
		return(
			<div>
				<Header />
				<Routes routes={ROUTES_LIST} />
				<Footer />
			</div>
		)
	}
}

export default App;