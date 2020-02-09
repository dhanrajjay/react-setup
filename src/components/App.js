import React, { Component } from 'react';
import { Translation } from 'react-i18next';
import '../style/app.scss';

class App extends Component {
	render() {
		return(
			<Translation>
			{
				t => 
					<div className="app">
						<span>{t('header')}</span>
						<div>{t('new.header')}</div>						
					</div>				
			}
			</Translation>
		)
	}
}

export default App;