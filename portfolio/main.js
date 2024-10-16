// a block custom component
export class DetailsBlock extends HTMLDetailsElement {

	// OUCH!!
	static LINE_HEIGHT = 17;
	static PADDING = 12;

	constructor() {
		super();

		this.initial = this.open;

		// nesting level
		this.level = 1;
		let block = this;
		while(block = block.parentElement) if (block.tagName.toLowerCase() == 'details') this.level++;
		this.style = `--level: ${this.level}`;

		// remove extra tabs...and the extra newline before a nested details element
		const pre = this.querySelector('pre');
		pre.innerHTML = pre.innerHTML.trim().replace(/\t/g, '').replace(/\n</g, '<');

		// toggle listener
		this.ontoggle = () => updateLineNumbers();
	}

	static calcBounds() {
		const blocks = [...document.querySelectorAll('details')];

		blocks.forEach(b => b.open = true); // open the details to get the proper bounds...blocks can be nested, so this has to be its own step
		blocks.forEach(b => b.top = Math.floor((b.getBoundingClientRect().top - this.PADDING) / this.LINE_HEIGHT)); // calculate the top of each block...
		blocks.forEach(b => b.height = Math.floor(b.getBoundingClientRect().height / this.LINE_HEIGHT) - 1); // ...and height
		blocks.forEach(b => b.open = b.initial); // restore initial state
	}
	static renderLineNumbers() {
		const numbers = { 1: 1, 2: 2 }; // the first two comment lines, no need to complicate this more than it already is!!
		function recurse(blocks) {
			blocks?.forEach(b => {
				numbers[b.top] = 1;
				for (let i = b.top + 1; i <= b.top + b.height; i++) b.open ? numbers[i] = 1 : delete numbers[i];
				if (b.open) recurse(b.querySelectorAll(':scope > pre > details')); // only look into the state of nested details if parent is open
			});
		}

		recurse([...document.querySelectorAll('editor > details')]);
		document.querySelector('gutter').innerHTML = Object.keys(numbers).reduce((html, n) => html += n + '<br>', '');
	}
}

customElements.define('details-block', DetailsBlock, { extends: "details" });

DetailsBlock.calcBounds();
DetailsBlock.renderLineNumbers(); // initial line number rendering

window.updateLineNumbers = DetailsBlock.renderLineNumbers;

const currentTheme = localStorage.getItem('theme');
const themeSelector = document.querySelector('.theme-selector');
const icon = themeSelector.children[0];

// set the icon
icon.className = `ic ic-${currentTheme}`;

themeSelector.onclick = () => {
	const currentTheme = localStorage.getItem('theme');
	const theme = currentTheme == 'moon' ? 'sun' : 'moon';

	localStorage.setItem('theme', theme);
	icon.className = `ic ic-${theme}`;
	document.body.dataset.theme = theme;
}