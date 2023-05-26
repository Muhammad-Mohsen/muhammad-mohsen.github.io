// import { mainMenu } from "../../data/main-menu";

const HomePage = (() => {

	let element = document.querySelector('home');

	function init() {
		element.innerHTML = template({
			copticDate: new Date().toCoptic(),
			gregorianDate: new Date().toGregory(),
			cards: createItems(mainMenu)
		});
	}

	function createItems(menu) {
		let html = '';
		menu.forEach(i => {
			html += Card({
				clickHandler: `Router.goto('${i.uri}')`,
				src: i.image,
				title: i.text
			});
		});

		return html;
	}

	function template(params) {
		return `
		<header>
			<h4 i18n>Coptic Orthodox Church</h4>
			<h1 i18n>Buku Bacaan Koptik</h1>

			<div id="copticDate">${params.copticDate}</div>
			<div id="gregorianDate">${params.gregorianDate}</div>

			<div class="header-buttons">
				<button class="fab ripple"><span class="material-symbols-outlined">settings</span></button>
				<button class="fab ripple"><span class="material-symbols-outlined">info</span></button>
				<button class="fab ripple"><span class="material-symbols-outlined">calendar_today</span></button>
			</div>
		</header>

		<ul class="cards">
			${params.cards}
		</ul>`;
	}

	return {
		init: init,
	}

})();
