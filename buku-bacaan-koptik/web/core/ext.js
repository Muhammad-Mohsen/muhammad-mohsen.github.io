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
