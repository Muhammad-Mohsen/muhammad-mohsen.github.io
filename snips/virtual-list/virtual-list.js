const VirtualList = ({
	container, // HTMLElement the container that's intended to hold the items
	data, // any[]

	getItemType, // (data[i]) => string: takes an item, returns the type string
	getItemHeight, // (string) => number: takes the item type, returns the height
	getItemTemplate, // (string) => DOM string: takes the item type, returns the HTML string
	bindItem, // (HTMLElement, data[i]) => void: takes the html element to bind to and the data item to bind!

}) => {

	// calculate item positions, total height, & item types
	let scrollHeight = 0, itemTypes = {};
	data.forEach(item => {
		item.vlTop = scrollHeight; // pollute the original data objects for good measure
		item.vlType = getItemType(item);

		itemTypes[item.vlType] = 1;
		scrollHeight += getItemHeight(item.vlType);
	});
	itemTypes = Object.keys(itemTypes);

	const RENDER_COUNT = optimalRenderCount();
	const RENDER_BUFFER = optimalRenderBuffer();

	// create an inner container to have the actual height of the whole list and the spacer element to shove things down
	container.innerHTML = `<div style="height: ${scrollHeight}px;"><div class="vl-spacer"></div></div>`;
	const actualContainer = container.children[0];
	const vlSpacer = actualContainer.children[0];

	// create a pool of rendered items itemTypes * RENDER_COUNT
	const elementPool = {};
	itemTypes.forEach(type => {
		elementPool[type] = [];

		[...Array(RENDER_COUNT).keys()].forEach(i => {
			actualContainer.insertAdjacentHTML('beforeend', getItemTemplate(type));
			elementPool[type].push(actualContainer.children[actualContainer.childElementCount - 1]); // a bit nasty
		});
	});

	// attach scroll listener
	let scrolling = false;
	container.onscroll = () => {
		if (scrolling) return;

		scrolling = true;
		requestAnimationFrame(() => { // g-sync :D
			Object.keys(elementPool).forEach(type => elementPool[type].index = 0); // initialize the pool indices

			const firstVisible = firstVisibleIndex(container.scrollTop);
			for (let i = 0; i < RENDER_COUNT; i++) {
				const item = data[firstVisible + i];
				if (!item) continue;

				const typeIndex = elementPool[item.vlType].index++; // move to the next item in the pool
				const element = elementPool[item.vlType][typeIndex];

				bindItem(element, item);
				element.style.display = ''; // make sure to unhide the element
				actualContainer.insertBefore(element, actualContainer.children[i]);
			}

			Object.keys(elementPool).forEach(type => { // hide remaining (unused) elements
				for (let i = elementPool[type].index; i < RENDER_COUNT; i++) elementPool[type][i].style.display = 'none';
			});

			vlSpacer.style.height = data[firstVisible].vlTop + 'px';
			actualContainer.insertAdjacentElement('afterbegin', vlSpacer);

			scrolling = false;
		});
	}

	container.onscroll(); // force first render

	function firstVisibleIndex(scrollTop) { // TODO more efficient with binary search
		var visibleIndex = data.findIndex(d => Math.abs(d.vlTop - (scrollTop - RENDER_BUFFER)) < getItemHeight(d.vlType));
		return visibleIndex == -1 ? 0 : visibleIndex;
	}
	function optimalRenderCount() {
		// honestly, using the total screen height won't be a bad idea (window.screen.height)
		const minItemHeight = itemTypes.reduce((min, type) => Math.min(min, getItemHeight(type)), Infinity);
		return Math.ceil(container.getBoundingClientRect().height / minItemHeight * 3);
	}
	function optimalRenderBuffer() {
		const maxItemHeight = itemTypes.reduce((max, type) => Math.max(max, getItemHeight(type)), 0);
		return Math.ceil(maxItemHeight * 3);
	}
};