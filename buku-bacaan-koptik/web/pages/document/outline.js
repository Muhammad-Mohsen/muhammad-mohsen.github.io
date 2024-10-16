export const DocumentOutline = (() => {

	const HEADER_TEMPLATE = '<button id="close-outline" class="fab ripple" onclick="DocumentOutline.toggle()"><span class="material-symbols-outlined">close</span></button>';

	let outlineContainer, documentContainer;

	function create(document, outline) {
		documentContainer = document;
		outlineContainer = outline;

		const titles = [...documentContainer.querySelectorAll('title-html')];
		titles.forEach((t, i) => t.setAttribute('outline-index', i));

		const html = titles.reduce((a, t) => a += t.outerHTML, HEADER_TEMPLATE);

		outlineContainer.innerHTML = html;
		[...outlineContainer.querySelectorAll('title-html')].forEach(t => t.setAttribute('onclick', 'DocumentOutline.scroll(this);'))
	}

	function toggle(force) {
		outlineContainer.classList.toggle('show', force);
	}

	function scroll(outlineTitle) {
		const index = outlineTitle.getAttribute('outline-index');
		const documentTitle = documentContainer.querySelector(`[outline-index="${index}"]`);
		documentTitle.scrollIntoView({ behavior: 'smooth', block: 'center' });

		toggle(false);
	}

	return {
		create: create,
		toggle: toggle,
		scroll: scroll
	}

})();
