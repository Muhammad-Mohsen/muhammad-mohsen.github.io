// a block custom component
export class ContentBlock extends HTMLElement {

	constructor() {
		super();

		this.reference = this.previousElementSibling.tagName == 'content-block'
			? this.previousElementSibling
			: document.querySelector('main :first-child').getBoundingClientRect();

		this.header = this.querySelector('header').innerHTML.trim().replace(/\t/g, '');
		this.content = this.querySelector('content').innerHTML.trim().replace(/\t/g, '');
		this.open = this.hasAttribute('open');
	}

	connectedCallback() {
		this.render();
		this.renderLineNumbers();
	}

	render() {
		this.innerHTML = `<div class="line-nums"></div>
			<details ${this.open ? 'open' : ''}>
				<summary>${this.header} {</summary>
				<pre>${this.content}</pre>
			</details>`;
	}

	/*
		fucking hate this!!!
		need to:
		- find better way to calc lineHeight
		- find better way to calc height rather than opening every details element
	 */
	renderLineNumbers() {
		const lineHeight = Math.floor(document.querySelector('main :first-child').getBoundingClientRect().height);

		const details = [...document.querySelectorAll('details')];
		details.forEach(d => d.setAttribute('open', true));
		const bounds = this.getBoundingClientRect();
		details.forEach(d => d.removeAttribute('open'));

		const start = Math.floor((bounds.top - this.reference.top) / lineHeight);
		const end = Math.floor(bounds.height / lineHeight + start);

		this.querySelector('.line-nums').innerHTML =
			this.#range(Math.floor(start + this.reference.height / lineHeight), end).reduce((html, n) => html += n + '<br>', '');
	}

	#range(start, end) {
		const arr = [];
		for (let i = start; i <= end; i++) arr.push(i);
		return arr;
	}
}

customElements.define('content-block', ContentBlock);