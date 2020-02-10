import React, { Component } from 'react';
import { Translation } from 'react-i18next';
import i18n from '../i18n';
import LocaleComponent from './localeComponent';
import '../style/app.scss';

class App extends Component {
	render() {
		return(
			<div>
				<LocaleComponent />
				<Translation>
				{
					t =>
						<div className="app">
							<span>{t('header')}</span>
							<div>{t('new.header')}</div>
						</div>
				}
				</Translation>
			</div>
		)
	}
}

export default App;