import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Agent from './agent';

export default class CustomAgentTab extends HTMLElement {
	constructor() {
		super();
	}

	createCollapsed(title) {
	  return React.createElement(Agent, { title }, React.createElement('slot'));
	}

	connectedCallback() {
		this.mountPoint = document.createElement('span');
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.appendChild(this.mountPoint);

		const title = this.getAttribute('title');
		ReactDOM.render(this.createCollapsed(title), this.mountPoint);
	}
}

window.customElements.define('custom-agent-tab', CustomAgentTab)