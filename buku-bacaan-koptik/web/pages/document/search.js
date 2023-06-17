// I can't believe I had to do all this because the window.find couldn't scroll!!!
export const DocumentSearch = (() => {

	let current = undefined;
	let matches = [];

	function exec(container, query) {
		// window.find doesn't work for us because it only scrolls the body element, unfortunately
		// return window.find(element.querySelector('input').value, false, backwardSearch, true, false, false, false);

		if (container.children.length) { // element has child elements (not child nodes)
			for (let c of [...container.childNodes]) {

				// swap out inner text nodes with spans (if any) so we can highlight the matches with a mark tag (text nodes don't have no 'innerHTML'!)
				if (c.nodeType == 3) {
					if (!c.textContent.trim()) continue; // ignore whitespace-only text nodes

					const replacement = document.createElement('span');
					replacement.innerHTML = c.textContent;

					c.replaceWith(replacement);
					c = replacement;
				}

				exec(c, query);
			}

		} else {
			// to maintain match casing...this is quite annoying really
			let matches = container.innerHTML.match(new RegExp(query, 'gi')); // search through everything - case insensitive
			if (!matches) return;

			matches = matches.filter((value, index, array) => array.indexOf(value) == index);

			let html = container.innerHTML;
			matches.forEach(m => html = html.replace(new RegExp(m, 'g'), `<mark>${m}</mark>`)); // the replace however, is case sensitive
			container.innerHTML = html;
		}
	}

	function execDogSlow(container, query) {
		const matches = container.innerHTML.match(new RegExp(query, 'gi')); // search through everything - case insensitive
		let html = container.innerHTML;
		matches.forEach(m => html = html.replace(new RegExp(m, 'g'), `<mark>${m}</mark>`)); // the replace however, is case sensitive

		container.innerHTML = html;
	}

	function scroll(scrollElement, forward) {
		if (current == undefined) return;

		const dir = forward ? 1 : -1;
		current = (current + dir + matches.length) % matches.length;

		scrollElement.scrollBy(0, matches[current].getBoundingClientRect().y - 76);
	}

	function index(container) {
		matches = [...container.querySelectorAll('mark')];
		current = current || 0;
		return `${current}/${matches.length}`;
	}

	function reset() {
		for (const r of matches) r.replaceWith(r.textContent); // remove all <mark> tags
		matches = [];
		current = undefined;
	}

	return {
		exec: exec,
		scroll: scroll,
		index: index,
		reset: reset,
	}

})();
