import { ListItem } from '../../components/list-item/list-item.js';

export const ListPage = (() => {

	let element = document.querySelector('list');

	function init(entry) {
		element.innerHTML = template({
			header: entry.name,
			back: 'Router.back();',
			list: createItems(entry.menu),
		});

		element.show(50);
	}

	function createItems(menu) {
		let html = '';
		menu.forEach(i => {
			html += ListItem({
				title: i.name,
				clickHandler: `Router.goto('${i.uri}')`,
				disabled: i.disabled,
			});
		});

		return html;
	}

	function template(params) {
		return `
		<header>
			<button class="fab ripple" onclick="${params.back}"><span class="material-symbols-outlined">arrow_back</span></button>
			<h3 i18n>${params.header}</h3>
		</header>

		<ul class="list">
			${params.list}
		</ul>`;
	}

	return {
		init: init,
	}

})();