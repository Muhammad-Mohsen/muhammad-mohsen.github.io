// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export const HTTP = (() => {

	const BASE_URL = 'assets/documents/';

	async function get(path) {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) resolve(request.responseXML?.documentElement);
				//else if (this.readyState == 4) reject(request);
			};

			request.open('GET', `${BASE_URL}${path}.cr.xml`, true);
			if (location.host) request.setRequestHeader('cache-control', 'max-age=1892160000'); // 1yr
			request.send();
		});
	}

	return {
		get,
	}

})();
