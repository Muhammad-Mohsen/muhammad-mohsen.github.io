import { ListItem2 } from '../../components/list-item/list-item.js';
import { Router } from '../../core/router.js';
import { Translation } from '../../core/Translation.js';
import { Occasions } from '../../data/occasions.js';
import { HomePage } from '../home/home.js';

export const CalendarPage = (() => {

	const element = document.querySelector('calendar');
	let selectTodayContainer, subHeader;

	let live = new Date();

	function init() {
		element.innerHTML = template({
			header: 'Calendar',
			subHeader: ``,
			back: 'Router.back();',
			list: createItems(),
			date: live,
		});

		element.show(50);

		subHeader = element.querySelector('header h5');
		selectTodayContainer = element.querySelector('.date-container');

		setLive(live, false);
	}

	function createItems() {
		return Occasions.displayable().map(o => {
			const [_c, cDay, cMonth, cRest] = o.date.formatCoptic().match(/(\w+), (\w+) (\d{1,2}, \d{4})/);
			const [_, month, rest] = o.date.formatGregorian().match(/(\w+) (\d{1,2}, \d{4})/);

			return ListItem2({
				title: o.name,
				subtitle: `${Translation.of(cDay).current}, ${Translation.of(cMonth).current} ${cRest} &bull; <i>${Translation.of(month).current} ${rest}</i>`,
				clickHandler: `CalendarPage.setLive('${o.date.toJSON()}')`,
			});
		}).join('');
	}

	function setLive(date, withNav = true) {
		live = date ? new Date(date) : new Date();
		const [_c, cDay, cMonth, cRest] = live.formatCoptic().match(/(\w+), (\w+) (\d{1,2}, \d{4})/);
		const [_, month, rest] = live.formatGregorian().match(/(\w+) (\d{1,2}, \d{4})/);

		subHeader.innerHTML = `${Translation.of(cDay).current}, ${Translation.of(cMonth).current} ${cRest} &bull; <i>${Translation.of(month).current} ${rest}</i>`;
		HomePage.setDate(live);
		if (withNav) Router.back();
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
				<button class="fab ripple text" onclick="CalendarPage.setLive();"><span>${new Date().getDateOrdinal()}</span></button>
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
