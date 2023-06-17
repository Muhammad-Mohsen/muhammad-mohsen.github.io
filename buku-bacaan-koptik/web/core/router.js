import { MainMenu } from "../data/main-menu.js";
import { DocumentPage } from "../pages/document/document.js";
import { ListPage } from "../pages/list/list.js";

export const Router = (() => {

	window.onpopstate = process;

	function process(event) {
		// if (history.length <= 1) return console.log('NOTIFY CONTAINER!!');

		const route = location.hash.substring(1);
		const entry = MainMenu.getEntry(route);

		document.querySelector('.show').classList.remove('show');
		document.querySelector('html').scrollTop = 0;

		if (route == '') {
			document.querySelector('home').classList.add('show');

		} else if (entry?.menu) {
			ListPage.init(entry);

		} else if (entry?.path) {
			DocumentPage.init(entry);

		} else if (route == '/about') {
			DocumentPage.init({ text: 'About The Season', path: 'About The Season', uri: 'About The Season' });

		} else if (route == 'settings') {

		} else if (route == 'calendar') {


		} else {
			document.querySelector('home').classList.add('show');
		}
	}

	function goto(uri) {
		location.hash = '#' + uri;
	}

	function back() {
		history.back();
	}

	return {
		process: process,
		goto: goto,
		back: back,
	}

})();
