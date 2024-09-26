// a block custom component
export class ContentBlock extends HTMLElement {

	constructor() {
		super();

		this.header = this.querySelector('header').innerHTML.trim().replace(/\t/g, '');
		this.content = this.querySelector('content').innerHTML.trim().replace(/\t/g, '');
		this.open = this.hasAttribute('open');

		this.render();
	}

	render() {
		this.innerHTML = `<div class="line-nums"></div>
			<details ${this.open ? 'open' : ''}>
				<summary>${this.header} {</summary>
				<pre>${this.content}</pre>
			</details>`;
	}

	static renderLineNumbers() {
		function range(start, end) {
			const arr = [];
			for (let i = start; i <= end; i++) arr.push(i);
			return arr;
		}
		const ref = document.querySelector('main :first-child').getBoundingClientRect();
		const lineHeight = Math.floor(ref.height);

		const blocks = [...document.querySelectorAll('content-block')];
		blocks.forEach(b => {
			const details = b.querySelector('details');
			details.setAttribute('open', true); // open the details to get the proper bounds

			// calculate the start/end line numbers
			const bounds = details.getBoundingClientRect();
			const start = Math.floor((bounds.top - ref.top) / lineHeight);
			const end = Math.floor(bounds.height / lineHeight + start);

			b.querySelector('.line-nums').innerHTML =
				range(Math.floor(start + ref.height / lineHeight), end).reduce((html, n) => html += n + '<br>', '');

		});

		// restore which blocks were open and which were closed, cause we opened them all like barbarians
		blocks.forEach(b => {
			if (!b.hasAttribute('open')) b.querySelector('details').removeAttribute('open');
		});
	}
}

customElements.define('content-block', ContentBlock);

ContentBlock.renderLineNumbers(); // calculate the lineNumbers at the end