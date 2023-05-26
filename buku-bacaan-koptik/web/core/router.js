const Router = (() => {

	window.onpopstate = process;

	function process(event) {
		// if (history.length <= 1) return console.log('NOTIFY CONTAINER!!');

		const route = location.hash.substring(1);
		const entry = getEntry(route);

		document.querySelector('.show').classList.remove('show');
		document.querySelector('html').scrollTop = 0;

		if (route == '') {
			document.querySelector('home').classList.add('show');

		} else if (entry?.menu) {
			ListPage.initFromUri(route);

		} else if (entry?.path) {
			console.log('TODO');

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
