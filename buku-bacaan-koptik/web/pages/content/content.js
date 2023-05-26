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
		const sectionHeaders = doc.querySelectorAll('Section Title');
		for (let h of [...sectionHeaders]) h.setAttribute('data-section-header', 'true');

		return doc.outerHTML
			.replace(/<title>/gi, '<titleElem>')
			.replace(/<title /gi, '<titleElem ')
			.replace(/<\/title>/gi, '</titleElem>')
			.replace(/<document xmlns="http:\/\/www.suscopts.org\/CopticReader">/gi, '')
			.replace(/<\/document>/gi, '')
			.replace(/data-section-header="true"/gi, `onclick="this.closest('section').setAttribute('expanded', this.closest('section').getAttribute('expanded') == 'false');"`);
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
			<div class="fab-container">
				<button class="fab ripple"><span class="material-symbols-outlined">format_align_left</span></button>
				<button class="fab ripple"><span class="material-symbols-outlined">search</span></button>
			</div>
		</header>
		<loading class="show"></loading>

		<main></main>
		`;
	}

	return {
		init: init,
	}

})();