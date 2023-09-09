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
