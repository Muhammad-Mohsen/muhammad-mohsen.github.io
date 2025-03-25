import { Card } from '../../components/card/card.js';
import { Menu } from '../../data/menu.js';

export const HomePage = (() => {

	let element = document.querySelector('home');

	function init() {
		element.innerHTML = template({
			copticDate: new Date().formatCoptic(),
			gregorianDate: new Date().formatGregorian(),
			cards: createItems(Menu.getData())
		});
	}

	function createItems(menu) {
		let html = '';
		menu.forEach(i => {
			if (i.hidden) return;

			html += Card({
				clickHandler: `Router.goto('${i.uri}')`,
				src: i.image,
				title: i.name,
				disabled: i.disabled
			});
		});

		return html;
	}

	function template(params) {

		const [cDay, cMonth, cDate, cY] = params.copticDate.split(' ');
		const [month, date, year] = params.gregorianDate.split(' ');

		return `
		<header>
			<h4 i18n>Coptic Orthodox Church</h4>
			<h1 i18n>Buku Bacaan Koptik</h1>

			<div id="copticDate"><span i18n>${cDay} </span><span i18n>${cMonth}</span><span> ${cDate} ${cY}</span></div>
			<div id="gregorianDate"><span i18n>${month}</span><span> ${date} ${year}</span></div>

			<div class="header-buttons">
				<button class="fab ripple" onclick="Router.goto('/settings')"><span class="material-symbols-outlined">settings</span></button>
				<button class="fab ripple" onclick="Router.goto('/about')"><span class="material-symbols-outlined">info</span></button>
				<button class="fab ripple" onclick="Router.goto('/calendar')"><span class="material-symbols-outlined">calendar_month</span></button>
			</div>
		</header>

		<ul class="cards">
			${params.cards}
		</ul>`;
	}

	function setDate(date) {
		document.querySelector('home #copticDate').innerHTML = date.formatCoptic();
		document.querySelector('home #gregorianDate').innerHTML = date.formatGregorian();
	}

	return {
		init,
		setDate,
	}

})();
