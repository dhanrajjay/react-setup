import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
import Agent from './agent';

export default class CustomAgentTab extends HTMLElement {
	constructor() {
		super();
	}

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
	}
}

window.customElements.define('custom-agent-tab', CustomAgentTab)