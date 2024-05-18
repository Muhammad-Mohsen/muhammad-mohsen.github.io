# V List
A sub-100 lines, vanilla JS virtual list implementation that supports multiple item types.

## How It Works
1. Go through the data and calculate the `total_height` of the items using `getItemType` & `getItemHeight` functions.
1. At the same time, calculate the `y` position for each item
1. Create a `div` element and set its height to the `total_height`
1. Calculate the required `rendered` (inflated) item count is calculated works out to `RENDER_COUNT = screen_height * height_of_shortest_item`
	- ensures there's always have enough `rendered` items to bind to regardless of window height.
	- can be improved by having separate count for each item type.
1. Render each item type `RENDER_COUNT` times and append them to the div created above.
1. Depending on the current scroll position, find the index of first item that should be rendered based on its `y` position.
1. Rebind the data from that position until `RENDER_COUNT` or end of data is reached.
1. 'Push' the rendered elements down by the `y` position of the first item that should be rendered using a 'spacer' div


## Usage
1. Include the script in your html
```html
<script src="path/to/script/vritual-list.js">
```

2. Initialize the list as below
```javascript
VirtualList({
	// HTMLElement
	container: vList,
	// any[]
	data: data,

	// (any) => string: function that takes an item and returns the item type
	getItemType: item => item.index % 10 ? 'n' : 'x',

	// (string) => number : function that takes an item type and returns its height
	getItemHeight: type => type == 'n' ? 60 : 24,

	// (string) => string: function that takes an item type and returns its corresponding HTML string template
	getItemTemplate: type => {
		if (type == 'n') {
			return `<div class="item">
				<div>Index: {placeholder}</div>
				<div class="subscript">pos: {placeholder}</div>
			</div>`;

		} else {
			return `<div class="item item2">HEADER</div>`;
		}
	},

	// (HTMLElement, any) => void: function that takes an html element (created from the template) and an item and binds them
	bindItem: (elem, item) => {
		if (item && item.index % 10) {
			const [main, sub] = elem.getElementsByTagName('div');
			main.textContent = `Index: ${item.index}`;
			sub.textContent = `pos: ${item.vlTop}`;
		}
	}
});
```

## TODO
- use binary instead of linear search to find the first element to render