const Router = (() => {

	window.onpopstate = function () {
		if (history.length <= 1) return console.log('NOTIFY CONTAINER!!');

		const route = location.hash.substring(1);
		const entry = getEntry(route);

		document.querySelector('.show').classList.remove('show');

		if (route == '') {
			document.querySelector('home').classList.add('show');

		} else if (entry?.menu) {
			DetailsPage.initFromUri(route);

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
		goto: goto,
		back: back,
	}

})();
