const ContentEditor = (() => {

	let file, documentContainer;
	let fileName;
	let isBible;

	function init() {
		file = document.querySelector('input[type="file"]');
		documentContainer = document.querySelector('main');
	}

	function sectionExpandCollapse(target) {
		const section = target.closest('section');
		section.setAttribute('expanded', section.getAttribute('expanded') == 'false');
	}

	function open() {
		file.click();
	}
	function load(input) {
		const file = input.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (event) => {
			const parser = new DOMParser();
			const doc = parser.parseFromString(event.target.result,"text/xml").documentElement;
			if (!doc) return;

			isBible = doc.tagName.toLowerCase() == 'book';
			fileName = file.name;
			documentContainer.innerHTML = postProcessDocument(doc);
		}

		reader.readAsText(file);

		input.value = null; // clear out the input
	}
	function postProcessDocument(doc) {
		// for bible XML, simply set the contenteditable attribute on the verses
		if (isBible) {
			doc.querySelectorAll('verse').forEach(v => v.setAttribute('contenteditable', true));
			return doc.outerHTML;
		}

		// track down section headers so we can add expand/collapse functions on them
		const sectionHeaders = doc.querySelectorAll('Section Title, section title');
		for (let h of [...sectionHeaders]) h.setAttribute('data-section-header', 'true');

		// force a proper closing tag for self-closing tags...the html parser ignores the 'closing' in self-closing tags
		doc.querySelectorAll('*').forEach(elem => {
			if (elem.childNodes.length) return;
			elem.innerHTML = '&#xA0;';
			elem.setAttribute('self-closing', 'true');
		});

		// copy one language and add a contenteditable="true" to the copied one
		let langs = doc.querySelectorAll('[id="Indonesian"]');

		if (langs.length) {
			for (let l of [...langs]) l.setAttribute('contenteditable', true);

		} else {
			langs = doc.querySelectorAll('[id="English"]');

			for (let l of [...langs]) {
				const added = l.cloneNode(true);
				added.setAttribute('id', 'Indonesian');
				added.setAttribute('contenteditable', true);

				l.insertAdjacentElement('afterend', added);
			}
		}

		return doc.outerHTML
			// title element can only have text nodes, so we change it so it renders its inner HTML correctly
			.replace(/<title|<\/title>/gi, match => match.toLowerCase() == '<title' ? '<title-html' : '</title-html>');
	}

	function download() {
		const data = '<?xml version="1.0" encoding="UTF-8"?>' + documentContainer.innerHTML
			.replace(/<title-html|<\/title-html>/gi, match => match.toLowerCase() == '<title-html' ? '<Title' : '</Title>')
			.replace(/ contenteditable="true"/gi, '')
			.replace(/>x<\/insertdocument>/gi, '/>') // change insertdocument node to be self-closing again
			.replace(/<br>/gi, '<br/>')
			.replace(/&nbsp;/gi, ' '); // reaplce html-entity space with a text space

		const a = document.createElement('a');
		a.download = fileName || '';
		a.href = 'data:text/plain;charset=UTF-8,\uFEFF' + encodeURIComponent(data);
		a.click();
	}

	return {
		init: init,

		open: open,
		load: load,
		download: download,

		sectionExpandCollapse: sectionExpandCollapse,
	}

})();
