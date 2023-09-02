const Extractor = (() => {

	const keys = {
		BOOK: 'BIBLEBOOK',
		NUM: 'bname'
	}

	function openBible() {
		document.querySelector('input[type="file"]').click();
	}

	function load(input) {
		const file = input.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (event) => {

			const parser = new DOMParser();
			const doc = parser.parseFromString(event.target.result, "text/xml").documentElement;
			if (!doc) return;

			process(doc, downloadBook);
		}

		reader.readAsText(file);

		input.value = null; // clear out the input
	}

	async function process(doc, fn) {

		const books = [...doc.querySelectorAll(keys.BOOK)];

		const errs = [];
		let i = 0;
		const workers = Array(5)
			.fill()
			.map(async () => {
				while (i < books.length)
					await fn(books[i++])
						.catch((e) => errs.push(e));
			});
		await Promise.all(workers);
		return errs;
	}

	// mock process function
	async function downloadBook(book) {
		return new Promise((resolve, reject) => {

			const filename = book.getAttribute(keys.NUM) + '.cr.xml'

			book = processBook(book);

			const anchor = document.createElement('a');
			const data = new Blob([book], { type: 'text/plain' });

			anchor.setAttribute('href', window.URL.createObjectURL(data));
			anchor.setAttribute('download', filename);

			anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
			anchor.draggable = true;
			anchor.classList.add('dragout');

			anchor.click();

			setTimeout(() => resolve(), 1000);
		});
	}

	function processBook(book) {
		return `<book>${book.innerHTML
			.replace(/CHAPTER/g, 'chapter')
			.replace(/cnumber/g, 'num')
			.replace(/vnumber/g, 'num')
			.replace(/VERS/g, 'verse')}
		</book>`;
	}

	return {
		load,
		openBible,
	}

})();