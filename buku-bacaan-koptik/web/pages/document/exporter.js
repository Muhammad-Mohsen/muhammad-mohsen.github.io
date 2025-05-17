export const DocumentExporter = (() => {

	const NAMESPACES = 'xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"';

	function exec() {
		const html = new DOMParser().parseFromString(document.querySelector('body > document > main').innerHTML, 'text/html');

		// try to get the max language count (3 at most, and if not, then two), then get their IDs in a map
		const languages = (html.querySelector('language:nth-child(3)') || html.querySelector('language:nth-child(2)') || html.querySelector('language:nth-child(1)'))
			.parentElement.querySelectorAll('language').toArray().map(l => l.id);

		// if coptic is the first language, just put it in second, because I know this will be a requirment :D
		if (languages[0] == 'Coptic' && languages.length > 1) {
			languages[0] = languages[1];
			languages[1] = 'Coptic';
		}

		// check each element
		html.querySelectorAll('title-html, comment, text, bibleverse').toArray().forEach(e => {
			e.innerHTML = languages.reduce((html, l) => {
				html += e.querySelector('#' + l)?.outerHTML || `<Language id="${l}"></Language>`; // put in an empty language if it isn't already there
				return html;
			}, '');

		});

		// ↑↑ all that just to align the table in the doc file

		const raw = `<html ${NAMESPACES}>
			<head>
				<meta charset='utf-8'>
				<title>Buku Bacaan Koptik Document</title>
				<style>
					td { padding: 4px 6px 2px 6px; }
					td#Arabic { direction: rtl; }
					td#Coptic { font: Coptic; }
					.title {
						font-size: 16px;
						font-weight: bold;
					}

				</style>
			</head>
			<body>
				<table>
						${html.body.innerHTML
				.replace(/<title-html/gi, '</table><table><tr class="title"').replace(/<\/title-html>/gi, '</tr>')
				.replace(/<comment>/gi, '<tr>').replace(/<\/comment>/gi, '</tr>')
				.replace(/<text>/gi, '<tr>').replace(/<\/text>/gi, '</tr>')
				.replace(/<bibleverse/gi, '<tr').replace(/<\/bibleverse>/gi, '</tr>')
				.replace(/<Language/gi, '<td').replace(/<\/Language>/gi, '</td>')
			}
				</table>
			</body>
		</html>`;

		const anchor = document.createElement('a');
		anchor.href = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(raw);
		anchor.download = `${document.querySelector('document header h5').innerHTML} - ${document.querySelector('document header h3').innerHTML}.doc`;
		anchor.click();
	}

	function execSimple() {
		const raw = `<html ${NAMESPACES}>
			<head>
				<meta charset='utf-8'>
				<title>Buku Bacaan Koptik Document</title>
				<style>
					* { text-align: start; }
					#Coptic { font: Coptic; }
					.title {
						font-size: 16px;
						font-weight: bold;
					}
				</style>
			</head>
			<body>
				${document.querySelector('body > document > main').innerHTML
						.replace(/<title-html/gi, '<table class="title"').replace(/<\/title-html>/gi, '</table>') // table
						.replace(/<comment>/gi, '<table>').replace(/<\/comment>/gi, '</table>') // table
						.replace(/<text>/gi, '<table>').replace(/<\/text>/gi, '</table>') // table
						.replace(/<Language/gi, '<td').replace(/<\/Language>/gi, '</td>')
				}
			</body>
		</html>`;

		const anchor = document.createElement('a');
		anchor.href = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(raw);
		anchor.download = `${document.querySelector('document header h5').innerHTML} - ${document.querySelector('document header h3').innerHTML}.doc`;
		anchor.click();
	}

	function exec1_5() {
		const raw = `<html ${NAMESPACES}>
			<head>
				<meta charset='utf-8'>
				<title>Buku Bacaan Koptik Document</title>
				<style>
					* { text-align: start; }
					#Coptic { font: Coptic; }
					.title {
						font-size: 16px;
						font-weight: bold;
					}

				</style>
			</head>
			<body>
				<table>
						${document.querySelector('body > document > main').innerHTML
							.replace(/<title-html/gi, '</table><table><tr class="title"').replace(/<\/title-html>/gi, '</tr>')
							.replace(/<comment>/gi, '<tr>').replace(/<\/comment>/gi, '</tr>')
							.replace(/<text>/gi, '<tr>').replace(/<\/text>/gi, '</tr>')
							.replace(/<Language/gi, '<td').replace(/<\/Language>/gi, '</td>')
						}
				</table>
			</body>
		</html>`;

		const anchor = document.createElement('a');
		anchor.href = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(raw);
		anchor.download = `${document.querySelector('document header h5').innerHTML} - ${document.querySelector('document header h3').innerHTML}.doc`;
		anchor.click();
	}

	return {
		exec
	}

})();