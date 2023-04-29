// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const HTTP = (() => {

	const BASE_URL = 'https://muhammad-mohsen.github.io/coptic-neo-reader/content/';

	async function get(path, headers) {
		const response = await fetch(BASE_URL + path);
		const json = await response.json();
		console.log(json);
	}

	return {
		BASE_URL: BASE_URL,

		get: get,
	}

})();
