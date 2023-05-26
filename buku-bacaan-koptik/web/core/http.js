// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const HTTP = (() => {

	const BASE_URL = location.host
		? '' // ACTUAL
		: 'https://muhammad-mohsen.github.io/buku-bacaan-koptik/web/assets/documents/'; // DEV

	async function get(path) {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					resolve(request.responseXML?.documentElement);
				}
			};
			request.open('GET', `${BASE_URL}${path}.cr.xml`, true);
			// request.setRequestHeader('cache-control', 'max-age=1892160000'); // 1yr
			request.send();
		});
	}

	return {
		get: get
	}

})();
