// import { mainMenu } from "../../data/main-menu";

const HomePage = (() => {

	let element = document.querySelector('home');

	function init() {
		element.innerHTML = template({
			copticDate: new Date().toCoptic(),
			gregorianDate: new Date().toUTCString(),
			cards: createItems()
		});
	}

	function createItems() {
		let html = '';
		mainMenu.forEach(i => {
			html += Card({
				clickHandler: 'console.log(`there you go`)',
				src: i.img,
				title: i.text
			});

			// TODO add click listener :D
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
