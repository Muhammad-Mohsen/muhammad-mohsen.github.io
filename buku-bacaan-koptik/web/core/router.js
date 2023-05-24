const Router = (() => {

	function goto(uri) {
		// TODO
		DetailsPage.initFromUri(uri);
		document.querySelector('.show').classList.remove('show');

	}

	function back() {

	}

	return {
		goto: goto,
		back: back,
	}

})();
