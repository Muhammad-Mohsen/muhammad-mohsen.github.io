const ContentEditor = (() => {

	// TODO replace the language id attr
	// TODO add contenteditable="true"
	// TODO add save button

	let file, documentContainer;
	let fileName;

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

			fileName = file.name;
			documentContainer.innerHTML = postProcessDocument(doc);
		}

		reader.readAsText(file);

		input.value = null; // clear out the input
	}
	function postProcessDocument(doc) {
		// track down section headers so we can add expand/collapse functions on them
		const sectionHeaders = doc.querySelectorAll('Section Title');
		for (let h of [...sectionHeaders]) h.setAttribute('data-section-header', 'true');

		// add closing tags to InsertDocument so that they render correctly
		const insertDocuments = doc.querySelectorAll('InsertDocument');
		for (let e of [...insertDocuments]) e.innerHTML = 'x';

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
			; // .replace(/data-section-header="true"/gi, `onclick="ContentEditor.sectionExpandCollapse(this);"`);
	}

	function download() {
		const data = documentContainer.innerHTML
			.replace(/<title-html>/gi, '<Title>')
			.replace(/<title-html /gi, '<Title ')
			.replace(/<\/title-html>/gi, '</Title>')
			.replace(/ contenteditable="true"/gi, '');

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
