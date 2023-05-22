const ContentEditor = (() => {

	let main, file, title;

	function init() {
		main = document.querySelector('main');
		file = document.querySelector('input[type="file"]');
		title = document.querySelector('#main-title');
	}

	function open() {
		file.click();
	}
	function load(input) {
		// READ FILE
		const file = input.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (event) => {
			main.innerHTML = '';
			const data = JSON.parse(event.target.result);
			data.forEach(d => add(d));

			title.value = file.name.substring(0, file.name.lastIndexOf('.'));
		}

		reader.readAsText(file);

		input.value = null; // clear out the input
	}

	function download() {
		// PARSE OUT THE SECTIONS
		let sections = main.querySelectorAll('section');
		if (!sections.length) return;

		sections = [...main.querySelectorAll('section')].map(s => { // for every section...
			const sectionData = {};
			// ...get all fields that have data-attr attribute then push that attribute into the sectionData object
			[...s.querySelectorAll('[data-attr')].forEach(ss => sectionData[ss.getAttribute('data-attr')] = ss.value);

			return sectionData;
		});

		// DOWNLOAD JSON FILE
		const a = document.createElement('a');
		a.download = `${title.value || ''}.json`;
		a.href = 'data:text/plain;charset=UTF-8,\uFEFF' + encodeURIComponent(JSON.stringify(sections));
		a.click();
	}

	function add(data) {
		main.insertAdjacentHTML('beforeend', sectionTemplate);

		if (!data) return;

		const sectionElement = main.querySelector('section:last-child');
		for (let key in data) sectionElement.querySelector(`[data-attr="${key}"]`).value = data[key];
	}
	function remove(button) {
		button.parentElement.parentElement.remove();
	}
	function drag(button) {
		// TODO
	}

	return {
		init: init,
		open: open,
		load: load,
		download: download,

		add: add,
		remove: remove,
		drag: drag,
	}

})();