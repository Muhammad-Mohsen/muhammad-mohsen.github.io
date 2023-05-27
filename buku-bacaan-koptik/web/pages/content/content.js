const ContentPage = (() => {

	const element = document.querySelector('content');

	async function init(entry) {

		element.innerHTML = template({
			header: entry.text,
			subHeader: getParent(entry.uri).text,
			back: 'Router.back()',
			onSearch: 'console.log(`SEARCH`)',
			onOutline: 'console.log(`OUTLINE`)'
		});

		element.classList.add('show');

		const doc = await renderDocument(entry.path);
		element.querySelector('main').innerHTML = postProcessDocument(doc);

		element.querySelector('loading').classList.remove('show'); // hide the loading indicator
		element.querySelector('#document-actions').classList.add('show'); // show document actions
	}

	async function renderDocument(path) {
		const doc = await HTTP.get(path);

		if (!doc) return '';

		const includes = doc.querySelectorAll('InsertDocument');

		for (let i of [...includes]) {
			const path = i.getAttribute('path');
			const innerDoc = await renderDocument(path);
			i.replaceWith(innerDoc);
		}

		return doc;
	}
	function postProcessDocument(doc) {
		// track down section headers so we can add expand/collapse functions on them
		const sectionHeaders = doc.querySelectorAll('Section Title');
		for (let h of [...sectionHeaders]) h.setAttribute('data-section-header', 'true');

		return doc.outerHTML
			// remove post-decryption encoding error
			.replace(/\?�?/gi, '')
			.replace(/�/gi, '')

			// title element can only have text nodes, so we change it so it renders its inner HTML correctly
			.replace(/<title>/gi, '<title-html>')
			.replace(/<title /gi, '<title-html ')
			.replace(/<\/title>/gi, '</title-html>')

			// remove extra 'document' elements
			.replace(/<document xmlns="http:\/\/www.suscopts.org\/CopticReader">/gi, '')
			.replace(/<\/document>/gi, '')
			.replace(/data-section-header="true"/gi, `onclick="this.closest('section').setAttribute('expanded', this.closest('section').getAttribute('expanded') == 'false');"`);
	}

	function toggleSearchMode(force) {
		element.classList.toggle('search-mode', force);
	}

	// will have to use this apparently https://linuxhint.com/highlight-text-using-javascript
	// window.find doesn't work for us because it only scrolls the body element, unfortunately
	function search(backwardSearch) {
		const searchBox = element.querySelector('input[type="search"]');
		return window.find(searchBox.value, false, backwardSearch, true, false, false, false);
	}

	function getOutline() {
		return [...element.querySelectorAll('title-html')];
	}

	function template(params) {
		return `
		<header>
			<button class="fab ripple" onclick="${params.back}"><span class="material-symbols-outlined">arrow_back</span></button>
			<div class="col">
				<h5 i18n>${params.subHeader}</h5>
				<h3 i18n>${params.header}</h3>
			</div>

			<!-- a bit of an unfortunate positioning, but I'll live with it -->
			<div id="document-actions" class="actions-container">
				<button class="fab ripple"><span class="material-symbols-outlined">format_align_left</span></button>
				<button class="fab ripple" onclick="ContentPage.toggleSearchMode(true)"><span class="material-symbols-outlined">search</span></button>
			</div>

			<div class="actions-container search-container">
				<input type="search">
				<button class="fab ripple" onclick="ContentPage.search(true)"><span class="material-symbols-outlined">expand_less</span></button>
				<button class="fab ripple" onclick="ContentPage.search(false)"><span class="material-symbols-outlined">expand_more</span></button>
				<button class="fab ripple" onclick="ContentPage.toggleSearchMode(false)"><span class="material-symbols-outlined">close</span></button>
			</div>
		</header>
		<loading class="show"></loading>

		<!-- document is rendered asynchronously, and is injected after that completes -->
		<main></main>
		`;
	}

	return {
		init: init,

		toggleSearchMode: toggleSearchMode,
		search: search,
	}

})();