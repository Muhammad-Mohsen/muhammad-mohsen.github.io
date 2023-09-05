import { ListItem2 } from "../../components/list-item/list-item.js";
import { Occasions } from "../../data/occasions.js";

export const CalendarPage = (() => {

	let element = document.querySelector('calendar');

	function init(entry) {
		element.innerHTML = template({
			header: 'Calendar',
			back: 'Router.back();',
			list: createItems(),
		});

		element.classList.add('show');
	}

	function createItems() {
		let html = '';
		const occasions = Occasions();

		Object.keys(occasions).forEach(k => {
			console.log(k, occasions[k]);

			html += ListItem2({
				title: k.replace(/_/g, ' '),
				subtitle: `${occasions[k].formatCoptic()} -- <i>${occasions[k].formatGregorian()}</i>`,
				clickHandler: `console.log('bitch')`,
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