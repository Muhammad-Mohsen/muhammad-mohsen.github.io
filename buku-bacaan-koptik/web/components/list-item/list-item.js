export const ListItem = (params) => {

	const dataAttr = params.data ? `data="${params.data}"` : '';

	function template(params) {
		return `<li onclick="${params.clickHandler}" ${dataAttr} class="list-item ripple" i18n>
			${params.title}
			<span class="material-symbols-outlined link-indicator">chevron_right</span>
		</li>`;
	}

	return template(params);
};

export const ListItem2 = (params) => {

	const dataAttr = params.data ? `data="${params.data}"` : '';

	function template(params) {
		return `<li onclick="${params.clickHandler}" ${dataAttr} class="list-item shallow ripple" i18n>
			<div>
				${params.title}
				<sub>${params.subtitle}</sub>
			</div>
		</li>`;
	}

	return template(params);
}
