const Card = (params) => {

	function template(params) {
		return `<li onclick="${params.clickHandler}" data="${params.data}" class="card ripple">
			<img src="${params.src}" alt="${params.alt || 'Card Image'}">
			<h5 i18n>${params.title}</h5>
		</li>`;
	}

	return template(params);
};
