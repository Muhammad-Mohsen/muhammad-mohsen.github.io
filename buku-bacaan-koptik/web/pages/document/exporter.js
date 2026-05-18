import { Translation } from '../../core/Translation.js';

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
			/* Make all exported tables the same width */
			table {
				width: 100%;
				table-layout: fixed;
				border-collapse: collapse;
			}

			/* Table cells */
			td {
  				padding: 8px;
				vertical-align: top;
				word-wrap: break-word;
			}


			td#English {
				font-family: Poppins;
				text-align: justify;
			}

			/* Arabic text */
			td#Arabic {
				direction: rtl;
				font-family : Noto Sans Arabic;
				font-size : 16px;
				text-align: justify;
			}

			/* Coptic font */
			td#Coptic {
				font-family: Coptic;
				text-align: justify;
				font-size : 16px;
			}

			td#Indonesian {
				font-family: Poppins;
				text-align: justify;
				font-size : 16px;
			}

			

			/* Title rows */
			tr.title{
				font-size: 18px;
				font-weight: bold;
				color: rgb(66, 98, 142);
			}

			.role {
				font-size: 16px;
				font-weight: bold;
				color: red;
			}
			/* Comments in blue */
			tr.comment td {
				color: rgb(66, 98, 142);
			}
			/* Role rows in red */
			tr.role td {
				color: red;
				font-weight: bold;
			}

		</style>
			</head>
			<body>
				${html.body.innerHTML
    				.replace(/<title-html/gi, '</table><table><tr class="title"').replace(/<\/title-html>/gi, '</tr>')

					// ROLE SUPPORT
					.replace(/<role\b([^>]*)id="([^"]+)"([^>]*)>/gi,
					(match, before, roleId, after) => {
						// Create one <td> for each language
						const cells = languages.map((lang, index) => {
						let text = '';

						// Put custom text in each column
						switch (lang) {
							case 'Arabic':
							text = Translation.ofwithlang(roleId,'ar').current; // or translate to Arabic if you want
							break;

							case 'Coptic':
							text = ''; // leave blank
							break;

							case 'English':
							text =  Translation.ofwithlang(roleId,'en').current;
							break;

							case 'Indonesian':
							text =  Translation.ofwithlang(roleId,'id').current;
							break;

							default:
							text = roleId;
						}

						return `<td id="${lang}">${text}</td>`;
						}).join('');

						return `</table><table><tr class="role title">${cells}</tr>`;
					}
					)
					.replace(/<\/role>/gi, '')


					
					.replace(/<comment\b[^>]*>/gi, '<tr class="comment">').replace(/<\/comment>/gi, '</tr>')
					.replace(/<text>/gi, '<tr>').replace(/<\/text>/gi, '</tr>')
					.replace(/<bibleverse/gi, '<tr').replace(/<\/bibleverse>/gi, '</tr>')
					.replace(/<Language/gi, '<td').replace(/<\/Language>/gi, '</td>')
					.replace(/<group>/gi, '').replace(/<\/group>/gi, '')
					.replace(/<season\b[^>]*>/gi, '').replace(/<\/season>/gi, '')
					.replace(/<section\b[^>]*>/gi, '').replace(/<\/section>/gi, '')
					.replace(/<span\b[^>]*>/gi, '').replace(/<\/span>/gi, '')
					.replace(/<br\b[^>]*>/gi, '').replace(/<\/br>/gi, '')
					.replace(/<biblereference\b[^>]*>/gi, '').replace(/<\/biblereference>/gi, '')
					.replace(/<font\b[^>]*>/gi, '').replace(/<\/font>/gi, '')
				}
			</body>
		</html>`;
		console.log(raw);
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
						.replace(/<comment>/gi, '<table class="comment">').replace(/<\/comment>/gi, '</table>') // table
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