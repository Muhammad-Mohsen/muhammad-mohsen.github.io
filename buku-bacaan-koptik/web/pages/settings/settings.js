const SettingsPage = (() => {

	const element = document.querySelector('settings');

	function init() {
		element.innerHTML = template();
		element.classList.add('show');
	}

	function template(params) {
		return `
		<header>
			<button class="fab ripple" onclick="Router.back()"><span class="material-symbols-outlined">arrow_back</span></button>
			<div class="col">
				<h3 i18n>Settings</h3>
			</div>
		</header>

		<div class="input-container">
			<input type="range" min="1" max="2" step="0.1" id="font-size">
			<label i18n>Font Size</label>
		</div>

		<div id="document-language-select">
			<label i18n>Document Languages</label>

			<div>
				<input type="checkbox">
				<label>Arabic</label>
			</div>
			<div>
				<input type="checkbox">
				<label>Coptic</label>
			</div>
			<div>
				<input type="checkbox">
				<label>English</label>
			</div>
			<div>
				<input type="checkbox">
				<label>Indonesian</label>
			</div>

		</div>

		<div>
			<input type="checkbox" id="comment-display">
			<label i18n>Display Comments</label>
		</div>

		<div id="roles-select">
			<label>Roles</label>

			<div>
				<input type="checkbox">
				<label i18n>Deacon</label>
			</div>
			<div>
				<input type="checkbox">
				<label>Coptic</label>
			</div>
			<div>
				<input type="checkbox">
				<label>English</label>
			</div>
			<div>
				<input type="checkbox">
				<label>Indonesian</label>
			</div>

		</div>

		<div>
			<input type="time" id="transition-time">
			<label i18n>Coptic Day Transition</label>
		</div>

		<div>
			<input type="checkbox" id="non-customary-prayer-display">
			<label i18n>Display Non-Customary Prayers</label>
		</div>
		`;
	}

	return {
		init: init,
	}

})();
