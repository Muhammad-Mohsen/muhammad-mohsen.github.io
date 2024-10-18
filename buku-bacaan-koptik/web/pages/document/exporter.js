export const DocumentExporter = (() => {

	const NAMESPACES = 'xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"';

	function exec() {
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

	// doesn't work unfortunately
	function exec2() {
		const raw = `<html ${NAMESPACES}>
			<head>
				<meta charset='utf-8'>
				<title>Buku Bacaan Koptik Document</title>
				<style>
					title-html, comment, text { display: table; }
					Language { display: table-cell; }
					#Coptic { font: Coptic; }
				</style>
			</head>
			<body>
				${document.querySelector('body > document > main').innerHTML}
			</body>
		</html>`;

		const anchor = document.createElement('a');
		anchor.href = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(raw);
		anchor.download = `${document.querySelector('document header h5').innerHTML} - ${document.querySelector('document header h3').innerHTML}.doc`;
		anchor.click();
	}

	return {
		exec,
		exec2
	}

})();