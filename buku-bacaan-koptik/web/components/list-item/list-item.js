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
