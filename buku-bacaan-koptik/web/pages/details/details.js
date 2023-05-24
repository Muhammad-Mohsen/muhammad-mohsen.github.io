const DetailsPage = (() => {

	let element = document.querySelector('detail');

	// menu uri initializer
	function initFromUri(uri) {
		const data = getEntry(uri);

		element.innerHTML = template({
			header: data.text,
			list: createItems(data.menu)
		});

		element.classList.add('show');
	}

	// raw data initializer
	function initFromData(data) {

	}

	function createItems(menu) {
		let html = '';
		menu.forEach(i => {
			html += ListItem({
				clickHandler: 'console.log(`there you go`)',
				title: i.text
			});
		});

		return html;
	}

	function template(params) {
		return `
		<header>
			<button class="fab ripple"><span class="material-symbols-outlined">arrow_back</span></button>
			<h4 i18n>${params.header}</h4>
		</header>

		<ul class="list">
			${params.list}
		</ul>`;
	}

	return {
		initFromUri: initFromUri,
		initFromData: initFromData
	}

})();