export const SettingsPage = (() => {

	const element = document.querySelector('settings');

	const DEFAULTS = {
		fontSize: '1',
		langEn: 'true',
		langCo: 'true',
		langAr: 'true',
		langId: 'false',
		comments: 'true',
		silentPrayers: 'true',
		nonCustomaryPrayers: 'false',
		rolePriest: 'true',
		roleDeacon: 'true',
		rolePeople: 'true',
		transitionTime: '00:00'
	}

	function init() {
		element.innerHTML = template();
		setTimeout(() => element.classList.add('show'), 50);

		load();
		setPreviewFontSize(element.querySelector('[setting="fontSize"]'));
	}

	function change(target) {
		const key = target.getAttribute('setting');
		const val = target.type == "checkbox" ? target.checked : target.value;
		save(key, val);
	}

	function save(key, val) {
		localStorage.setItem(key, val);
	}
	function load() {
		const settings = element.querySelectorAll('[setting]');
		[...settings].forEach(s => {
			let val = localStorage.getItem(s.getAttribute('setting'));
			if (val == null) val = DEFAULTS[s.getAttribute('setting')];

			s.type == "checkbox"
				? s.checked = val.toString() == 'true'
				: s.value = val;
		});
	}

	function get() {
		const settings = JSON.parse(JSON.stringify(DEFAULTS));
		for (const s in settings) {
			const storedSetting = localStorage[s];
			settings[s] = storedSetting || settings[s];
		}

		return settings;
	}

	function setPreviewFontSize(target) {
		element.querySelector('text').style = `font-size: ${target.value}rem`
	}
	function checkSelectedLanguageCount(target) {
		const checked = element.querySelectorAll('.document-language-select input:checked');
		if (checked.length <= 3) return;

		// override this shit!!
		target.checked = false;
		change(target);
	}

	function template() {
		return `
		<header>
			<button class="fab ripple" onclick="Router.back()"><span class="material-symbols-outlined">arrow_back</span></button>
			<div class="col">
				<h3 i18n>Settings</h3>
			</div>
		</header>

		<div class="input-container font-size-container">

			<label i18n>Text Size</label>

			<!-- SNIPPET -->
			<text>
				<language id="Coptic">Qen v~ran m~Viwt nem Ps/ri nem Pip~neuma eyouab ounou] n~ouwt: a~m/n.</language>
				<language id="English">In the name of the Father and the Son and the Holy Spirit, one God. Amen.</language>
				<language id="Arabic">باسم الآب والابن والرّوح القدس الإله الواحد. آمين.</language>
			</text>

			<input type="range" min=".8" max="2" step="0.2" setting="fontSize" onchange="SettingsPage.change(this);SettingsPage.setPreviewFontSize(this);">
			<div class="notches">
				<i></i><i></i><i></i><i></i><i></i><i></i><i></i>
			</div>
		</div>

		<h4 i18n>Document Languages</h4>
		<p i18n>Up to 3 languages can be selected at the same time</p>
		<div class="document-language-select">
			<label class="big-switch">
				<i>En</i>
				<span>English</span>
				<input type="checkbox" setting="langEn" onchange="SettingsPage.change(this);SettingsPage.checkSelectedLanguageCount(this);">
			</label>
			<label class="big-switch">
				<i style="font-family:noto; font-size: 30px;">أب</i>
				<span style="font-family:noto; margin: -7px 0 7px;">عربي</span>
				<input type="checkbox" setting="langAr" onchange="SettingsPage.change(this);SettingsPage.checkSelectedLanguageCount(this);">
			</label>

			<label class="big-switch">
				<i style="font-family:coptic;font-size: 36px; margin: -2px 0 2px;">v~r</i>
				<span>Coptic</span>
				<input type="checkbox" setting="langCo" onchange="SettingsPage.change(this);SettingsPage.checkSelectedLanguageCount(this);">
			</label>

			<label class="big-switch">
				<i>Id</i>
				<span>Indonesian</span>
				<input type="checkbox" setting="langId" onchange="SettingsPage.change(this);SettingsPage.checkSelectedLanguageCount(this);">
			</label>
		</div>

		<label class="input-container switch" i18n>
			Display Comments
			<input type="checkbox" setting="comments" onchange="SettingsPage.change(this);">
			<span class="slider"></span>
		</label>

		<div class="input-group">
			<label class="input-container switch" i18n>
				Display Silent Prayers
				<input type="checkbox" setting="silentPrayers" onchange="SettingsPage.change(this);">
				<span class="slider"></span>
			</label>

			<label class="input-container switch" i18n>
				Display Non-Customary Prayers
				<input type="checkbox" setting="nonCustomaryPrayers" onchange="SettingsPage.change(this);">
				<span class="slider"></span>
			</label>
		</div>

		<h4>Roles</h4>
		<div class="input-group">
			<label class="input-container switch" i18n>
				Priest
				<input type="checkbox" setting="rolePriest" onchange="SettingsPage.change(this);">
				<span class="slider"></span>
			</label>
			<label class="input-container switch" i18n>
				Deacon
				<input type="checkbox" setting="roleDeacon" onchange="SettingsPage.change(this);">
				<span class="slider"></span>
			</label>
			<label class="input-container switch" i18n>
				People
				<input type="checkbox" setting="rolePeople" onchange="SettingsPage.change(this);">
				<span class="slider"></span>
			</label>
		</div>

		<div class="input-container">
			<label i18n>Coptic Day Transition</label>
			<input type="time" id="transition-time" setting="transitionTime" onchange="SettingsPage.change(this);">
		</div>
		`;
	}

	return {
		init: init,
		change: change,
		setPreviewFontSize: setPreviewFontSize,
		checkSelectedLanguageCount: checkSelectedLanguageCount,

		get: get,
	}

})();
