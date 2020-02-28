import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import * as retargetEvents from 'react-shadow-dom-retarget-events';
import i18n from '../i18n';
import { create } from 'jss';
import Agent from './agent';

export default class CustomAgentTab extends HTMLElement {
	// Attributes we care about getting values from.
	static get observedAttributes() {
	   return ['locale'];
	}

	constructor() {
		super();
	}

	changeLanguage (lang) {
		i18n.changeLanguage(lang);
		window.localStorage.setItem('locale', lang);
	};

	createCollapsed(title) {
	  return React.createElement(Agent, { title }, React.createElement('slot'));
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
	    const mountPoint = document.createElement('span');
	    const reactRoot = shadowRoot.appendChild(mountPoint);
	    const jss = create({
	      ...jssPreset(),
	      insertionPoint: reactRoot
	    });

	    ReactDOM.render(
	      <StylesProvider jss={jss}>
	        <Agent />
	      </StylesProvider>,
	      mountPoint
	    );
	    retargetEvents(shadowRoot);
	}

	attributeChangedCallback(attrName, oldValue, newValue) {
	   console.log(attrName);
	   if (attrName === 'locale') {
	     this.changeLanguage(newValue);
	   }
	}
}

window.customElements.define('custom-agent-tab', CustomAgentTab)