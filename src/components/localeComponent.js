import React, { Component } from 'react';
import i18n from '../i18n';

class LocaleComponent extends Component {
	changeLanguage(event) {			
		i18n.changeLanguage(event.target.value)
	}	

	render() {
		let localeList = [{
			value: 'en',
			label: 'English'
		}, {
			value: 'fr',
			label: 'French'
		}]
		let optionItems = localeList.map((option) => {
			return <option key={option.label} value={option.value}>{option.label}</option> 
		})
		console.log(optionItems);

		return(			
			<div>							
				<select onChange={this.changeLanguage}>
					{optionItems}
				</select>		      	
		    </div>
		)
	}
}

export default LocaleComponent;