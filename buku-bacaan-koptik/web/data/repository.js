import { LS, XML, HTTP, IS_DEBUG } from '../core/util.js';

export const Repository = (() => {

	const UPDATES_URL = `${location.origin}/buku-bacaan-koptik/web/assets/documents/system/updates.json`;
	const EXTERNAL_DOCS = `${location.origin}/buku-bacaan-koptik/web/assets/documents/`;
	const INTERNAL_DOCS = 'assets/documents/';

	const DEFAULT_UPDATES = `{ "docs": {}, "menu": "" }`;

	let db;
	let cache = {};

	// get the list of uri => ver & menu
	async function getUpdates() {
		if (await HTTP.isConnected() && !IS_DEBUG) {
			cache = (await HTTP.get(UPDATES_URL, 'text')) || DEFAULT_UPDATES;
			LS.set(LS.K.UPDATES, cache);

		} else {
			cache = LS.get(LS.K.UPDATES, DEFAULT_UPDATES);
		}

		return cache = JSON.parse(cache);
	}

	function getLatestVersion(uri) {
		return cache.docs[uri];
	}

	async function getDocument(uri) {
		const ver = getLatestVersion(uri);
		if (ver) { // if uri is on the updates list
			db ||= await openDB();

			let doc = await db.select('documents', uri); // get it from the DB, if possible
			if (doc?.ver == ver) return XML.parse(doc.xml); // if versions match, we're golden

			// otherwise, fetch, store, and return
			doc = await XML.fetch(EXTERNAL_DOCS + uri);
			db.insert('documents', { ver: ver, xml: XML.stringify(doc) });
			return doc;
		}

		// get internal version
		return await XML.fetch(INTERNAL_DOCS + uri);
	}

	function getMenu() {
		return cache.menu;
	}

	async function openDB() {
		return new Promise((resolve, reject) => {
			const dbRequest = indexedDB.open('BBK_DB', 1);
			dbRequest.onerror = (event) => reject(event);
			dbRequest.onsuccess = () => resolve(augmentDB(dbRequest.result));

			dbRequest.onupgradeneeded = event => {
				const db = event.target.result;
				db.createObjectStore('documents', { keyPath: 'uri' });

				resolve(db);
			};
		});
	}

	return {
		getUpdates,

		getDocument,
		getMenu,
	}

})();
