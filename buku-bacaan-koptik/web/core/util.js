export const HTTP = (function () {

	function isConnected() {
		return navigator.onLine;
	}

	function get(fullURI, accept) {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) resolve(accept == 'text' ? request.responseText : request.responseXML?.documentElement);
			};

			request.open('GET', fullURI, true);
			if (location.host && location.host != 'localhost') request.setRequestHeader('cache-control', 'max-age=1892160000'); // 1yr
			request.send();
		});
	}

	return {
		isConnected,
		get
	}

})();

export const XML = (function () {
	const parser = new DOMParser();
	const serializer = new XMLSerializer();

	function parse(str) {
		return parser.parseFromString(str, 'text/xml');
	}
	function stringify(xml) {
		return serializer.serializeToString(xml);
	}

	function fetch(fullURI) {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) resolve(request.responseXML?.documentElement);
			};

			request.open('GET', `${fullURI}.cr.xml`, true);
			if (location.host) request.setRequestHeader('cache-control', 'max-age=1892160000'); // 1yr
			request.send();
		});
	}

	return {
		parse,
		stringify,
		fetch,
	}
})();

export const LS = (function () {

	const K = {
		UPDATES: 'updates',
		MENU: 'menu',
	}

	function get(key, defaulValue) {
		return localStorage.getItem(key) || defaulValue;
	}

	function set(key, value) {
		return localStorage.setItem(key, value);
	}

	return {
		K,
		get,
		set,
	}

})();

export const IS_DEBUG = false;

export function isIOS() {
	const platform = window.navigator?.userAgentData?.platform || window.navigator.platform;
	return ['iPhone', 'iPad', 'iPod'].includes(platform)
}