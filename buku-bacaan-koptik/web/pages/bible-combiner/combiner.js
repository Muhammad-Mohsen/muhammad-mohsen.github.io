const Combiner = (() => {

	const bibles = {
		english: {},
		arabic: {},
		indonesian: {}
	};

	const combined = {};

	function open(lang) {
		document.querySelector(`input[type="file"][lang="${lang}"]`).click();
	}

	function load(input) {
		const lang = input.getAttribute('lang');
		const files = input.files;
		if (!files?.length) return;

		Array.from(files).forEach(async f => bibles[lang.toLowerCase()][f.name] = await readAsXML(f));
	}

	// missing arabic verses :D
	// Wisdom.cr.xml-- 17: 21
	// Wisdom.cr.xml-- 19: 21
	// Wisdom.cr.xml-- 19: 22

	function exec() {
		Object.keys(bibles.english).forEach(name => { // books
			bibles.english[name].querySelectorAll('chapter').forEach(chapter => { // chapters
				const verses = chapter.querySelectorAll('verse');
				verses.forEach(verse => { // verses

					const cnum = chapter.getAttribute('num');
					const vnum = verse.getAttribute('num');

					const arabicVerse = bibles.arabic[name].querySelector(`chapter[num="${cnum}"] verse[num="${vnum}"]`);
					const indonesianVerse = bibles.indonesian[name].querySelector(`chapter[num="${cnum}"] verse[num="${vnum}"]`);

					if (!arabicVerse) console.log(`${name} -- ${cnum}:${vnum}`);

					// combine arabic + indonesian verses with english verse
					const verseText = verse.innerHTML;
					verse.innerHTML = `
						<language id="English" verse="${vnum}">${verseText}</language>
						<language id="Arabic" verse="${vnum}">${arabicVerse?.innerHTML || verseText}</language>
						<language id="Indonesian" verse="${vnum}">${indonesianVerse?.innerHTML || verseText}</language>
					`.replace(/\n|\t/g, '');
				});
			});
		});

		downloadAllBooks();
	}

	async function downloadAllBooks(doc, fn) {
		const names = Object.keys(bibles.english);

		const errs = [];
		let i = -1;
		const workers = Array(5)
			.fill()
			.map(async () => {
				while (i < names.length)
					await downloadBook(names[++i], bibles.english[names[i]])
						.catch((e) => errs.push(e));
			});
		await Promise.all(workers);
		return errs;
	}

	async function downloadBook(filename, xml) {
		return new Promise(resolve => {
			const anchor = document.createElement('a');
			const data = new Blob([xml.outerHTML], { type: 'text/plain' });

			anchor.setAttribute('href', window.URL.createObjectURL(data));
			anchor.setAttribute('download', filename);

			anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
			anchor.draggable = true;
			anchor.classList.add('dragout');

			anchor.click();

			setTimeout(() => resolve(), 1000);
		});
	}

	function readAsXML(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = (event) => {
				const doc = new DOMParser().parseFromString(event.target.result, "text/xml").documentElement;
				resolve(doc);
			}

			reader.readAsText(file);
		});
	}

	return {
		load,
		open,
		exec,
	}

})();
