import { Menu } from '../data/menu.js';
import { CalendarPage } from '../pages/calendar/calendar.js';
import { DocumentPage } from '../pages/document/document.js';
import { ListPage } from '../pages/list/list.js';
import { SettingsPage } from '../pages/settings/settings.js';

export const Router = (() => {

	window.onpopstate = process;

	function process(event) {
		// if (history.length <= 1) return console.log('NOTIFY CONTAINER!!');

		const route = location.hash.substring(1);
		const entry = Menu.getItem(route);

		document.querySelector('.page.show').hide();
		document.querySelector('html').scrollTop = 0;

		if (route == '') {
			document.querySelector('home').show(50);

		} else if (entry?.menu) {
			ListPage.init(entry);

		} else if (entry?.path) {
			DocumentPage.init(entry);

		} else if (route == '/about') {
			DocumentPage.init({ name: 'About The Season', sub: '', path: 'About The Season', uri: 'About The Season' });

		} else if (route == '/settings') {
			SettingsPage.init();

		} else if (route == '/calendar') {
			CalendarPage.init();

		} else {
			document.querySelector('home').show(50);
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
