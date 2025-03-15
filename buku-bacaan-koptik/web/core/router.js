import { Menu } from '../data/menu.js';
import { CalendarPage } from '../pages/calendar/calendar.js';
import { DocumentPage } from '../pages/document/document.js';
import { ListPage } from '../pages/list/list.js';
import { SettingsPage } from '../pages/settings/settings.js';
import { Translation } from './Translation.js';

export const Router = (() => {

	window.onpopstate = process;
	handleAndroidBack();

	function process(event) {
		// if (history.length <= 1) return console.log('NOTIFY CONTAINER!!');

		const [route, query] = location.hash.substring(1).split('?');
		const entry = Menu.getItem(route);
		if (entry) entry.query = query;

		const currentRoute = document.querySelector('.page.show');
		currentRoute.hide();
		document.querySelector('html').scrollTop = 0;

		if (route == '') {
			document.querySelector('home').show(50);

		} else if (entry?.menu) {
			// add a small delay when going from a list to another list to give the hide/show animation a bit of time
			setTimeout(() => ListPage.init(entry),
				currentRoute.tagName.toLowerCase() == 'list' ? 50 : 0);

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

		Translation.exec();
	}

	function goto(uri) {
		location.hash = '#' + uri;
	}

	function setQuery(param) {
		const [currentPath, _] = location.href.split('?');
		history.replaceState({ path: currentPath + `?${param}` }, '', currentPath + `?${param}`);
	}

	function back() {
		history.back();
	}

	async function handleAndroidBack() {
		try {
			const app = require('@capacitor/app');

			app.addListener('backButton', () => {
				if (history.length > 1) back();
				else app.exitApp();
			})

		} catch {}

	}

	return {
		process,
		goto,
		setQuery,
		back,
	}

})();
