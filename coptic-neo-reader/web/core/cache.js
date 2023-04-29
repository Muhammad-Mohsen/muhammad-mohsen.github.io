// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
const Cache = (() => {

	const DB_NAME = 'coptic-neo-reader';
	const DB_VER = 1;

	async function get(path) {
		const db = indexedDB.open(DB_NAME, DB_VER);
	}

	async function set(path, data) {
		const db = indexedDB.open(DB_NAME, DB_VER);
	}

	return {
		get: get,
		set: set
	}

})();