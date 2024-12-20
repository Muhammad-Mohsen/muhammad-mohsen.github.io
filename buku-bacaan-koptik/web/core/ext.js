HTMLElement.create = (htmlStr) => {
	const template = document.createElement('template');
    htmlStr = htmlStr.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = htmlStr;

	return template.content.firstChild;
}

NodeList.prototype.toArray = function () {
	return [...this];
}
HTMLCollection.prototype.toArray = function () {
	return [...this];
}
Element.prototype.childrenArray = function () {
	return [...(this.children)];
}

HTMLElement.prototype.show = function (delay) {
	if (delay) setTimeout(() => this.classList.add('show'), delay);
	else this.classList.add('show');
}
HTMLElement.prototype.hide = function () {
	this.classList.remove('show');
}

IDBDatabase.prototype.select = function (store, key) {
	return new Promise((resolve, reject) => {
		const transaction = this.transaction([store]);
		const objectStore = transaction.objectStore(store);

		const request = objectStore.get(key);
		transaction.oncomplete = (event) => resolve(request.result, event);
		transaction.onerror = (event) => reject(event);
	});
}
IDBDatabase.prototype.insert = function (store, objects) {
	return new Promise((resolve, reject) => {
		const transaction = db.transaction([store], 'readwrite');
		const objectStore = transaction.objectStore(store);

		if (!Array.isArray(objects)) objects = [objects];
		objects.forEach(o => objectStore.add(o));
		transaction.oncomplete = (event) => resolve(event);
		transaction.onerror = (event) => reject(event);
	});
}