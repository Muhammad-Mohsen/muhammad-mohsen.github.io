import { ListItem } from '../../components/list-item/list-item.js';
import { Menu } from '../../data/menu.js';

export const DocumentOutline = (() => {

	const HEADER_TEMPLATE = `<div class="actions">
		<button class="fab ripple close-outline" onclick="DocumentOutline.toggle()"><span class="material-symbols-outlined">close</span></button>
	</div>`;

	const MENU_HEADER_TEMPLATE = `<div class="actions">
		<button class="fab ripple" onclick="Router.goto('')"><span class="material-symbols-outlined">home</span></button>
		<button class="fab ripple" onclick="Router.goto('/settings')"><span class="material-symbols-outlined">settings</span></button>
		<button class="fab ripple" onclick="Router.goto('/calendar')"><span class="material-symbols-outlined">calendar_month</span></button>
		<button class="fab ripple close-outline" onclick="DocumentOutline.toggleMenu()"><span class="material-symbols-outlined">close</span></button>
	</div>`;

	let outlineContainer, documentContainer, backButton, menuContainer, menuButton;

	function create(document, outline, back, menu) {
		documentContainer = document;
		outlineContainer = outline;
		backButton = back;
		menuButton = menu;

		const titles = [...documentContainer.querySelectorAll('title-html, linkdocument')];
		titles.forEach((t, i) => t.setAttribute('outline-index', i));

		const html = titles.reduce((a, t) => a += t.outerHTML, HEADER_TEMPLATE);

		outlineContainer.innerHTML = html;
		outlineContainer.querySelectorAll('title-html, linkdocument').forEach(t => t.setAttribute('onclick', 'DocumentOutline.scroll(this);'));
	}
	function toggle(force) {
		outlineContainer.classList.toggle('show', force);
		backButton.classList.toggle('hide', force);
		menuButton.classList.toggle('hide', force);
	}
	function scroll(outline) {
		const index = isNaN(outline) ? outline.getAttribute('outline-index') : outline;
		const documentTitle = documentContainer.querySelector(`[outline-index="${index}"]`);
		documentTitle.scrollIntoView({ block: 'start' });

		toggle(false);
	}

	function createMenu(container, uri) {
		menuContainer = container;

		const parent = Menu.getItem(uri.split('/').slice(0, -1).join('/'));
		const ancestors = uri.split('/')
			.slice(1, -1) // remove the first empty element (because of the leading slash) + the current route segment
			.reduce((ancestors, m) => {
				ancestors.push([...ancestors.slice(-1) || '', m].join('/')); // append the current part to the previous path
				return ancestors;
			}, [])
			.map(a => Menu.getItem('/' + a)); // add the leading slash back in

		menuContainer.innerHTML = MENU_HEADER_TEMPLATE + `
			<ul class="list">
				${[...ancestors, ...parent.menu].map(m => ListItem({
					title: m.name,
					clickHandler: `Router.goto('${m.uri}')`,
					disabled: m.disabled,
				})).join('')}
			</ul>`;
	}
	function toggleMenu(force) {
		menuContainer.classList.toggle('show', force);
		backButton.classList.toggle('hide', force);
		menuButton.classList.toggle('hide', force);
	}

	return {
		create,
		toggle,
		scroll,

		createMenu,
		toggleMenu,
	}

})();
