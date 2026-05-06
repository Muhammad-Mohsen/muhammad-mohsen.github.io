// coverts the coptic reader format to ours
const Converter = (() => {

	const keys = {
		BOOK: 'BIBLEBOOK',
		NUM: 'bname'
	}

	function open() {
		document.querySelector('input[type="file"]').click();
	}

	function load(input) {
		if (!input.files?.length) return;

		for (let file of input.files) {
			const reader = new FileReader();

			reader.onload = (event) => {
				const parser = new DOMParser();
				const doc = parser.parseFromString(event.target.result, "text/xml").documentElement;
				if (!doc) return;
				processBook(doc, file.name);
			}
			reader.readAsText(file);
		}

		input.value = null; // clear out the input
	}

	/*
	g
	*/
	function processBook(book, filename) {
		book = book.outerHTML
			.replace(/chapter=|verse=/g, 'num=')
			.replace(/<(\/?)Bible/g, '<$1book')
			.replace(/<(\/?)Chapter/g, '<$1chapter')
			.replace(/<(\/?)Text/g, '<$1verse');

		const anchor = document.createElement('a');
		const data = new Blob([book], { type: 'text/plain' });

		anchor.setAttribute('href', window.URL.createObjectURL(data));
		anchor.setAttribute('download', filename);

		anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
		anchor.draggable = true;
		anchor.classList.add('dragout');

		anchor.click();
	}

	return {
		load,
		open,
	}

})();
