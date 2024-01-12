import { ListItem2 } from "../../components/list-item/list-item.js";
import { Occasions } from "../../data/occasions.js";

export const CalendarPage = (() => {

	const element = document.querySelector('calendar');
	let selectTodayContainer, subHeader;

	let live = new Date();

	function init() {
		element.innerHTML = template({
			header: 'Calendar',
			subHeader: `${live.formatGregorian('full')}<br><i>${live.formatCoptic(true)}</i>`,
			back: 'Router.back();',
			list: createItems(),
			date: live,
		});

		element.show(50);

		subHeader = element.querySelector('header h5');
		selectTodayContainer = element.querySelector('.date-container')
	}

	function createItems() {
		let html = '';

		Object.keys(Occasions).forEach(k => {
			if (!(Occasions[k] instanceof Date)) return;

			html += ListItem2({
				title: k.replace(/_/g, ' '),
				subtitle: `${Occasions[k].formatGregorian('full')} &bull; <i>${Occasions[k].formatCoptic(true)}</i>`,
				clickHandler: `CalendarPage.setLive('${Occasions[k].toJSON()}')`,
			});
		});

		return html;
	}

	function setLive(date) {
		live = date ? new Date(date) : new Date();
		subHeader.innerHTML = `${live.formatGregorian('full')}<br><i>${live.formatCoptic(true)}</i>`;
	}

	function getLive() {
		return live;
	}

	function template(params) {
		return `
		<header>
			<button class="fab ripple" onclick="${params.back}"><span class="material-symbols-outlined">arrow_back</span></button>
			<div class="col">
				<h3 i18n>${params.header}</h3>
				<h5>${params.subHeader}</h5>
			</div>

			<!-- a bit of an unfortunate positioning, but I'll live with it -->
			<div class="actions-container">
				<button class="fab ripple text" onclick="CalendarPage.setLive();"><span>${params.date.getDateOrdinal()}</span></button>
				<button class="fab ripple">
					<span class="material-symbols-outlined">calendar_month</span>
					<input type="date" onchange="CalendarPage.setLive(this.value)" value="${params.date.value()}">
				</button>
			</div>

		</header>

		<ul class="list">
			${params.list}
		</ul>`;
	}

	return {
		init,

		getLive,
		setLive
	}

})();
