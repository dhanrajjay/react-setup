import Agent from './agent';

export default class CustomAgentTab extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.appendChild = Agent;
	}
}

window.customElements.define('custom-agent-tab', CustomAgentTab)