const MainComponent = (() => {

	let element, configuration;

	async function init() {

		configuration = dummyConfig; // await getConfiguration();

		element = document.querySelector('main');
		element.innerHTML = mainTemplate
			.replace('{subHeaderImage}', '')
			.replace('{copticDate}', new Date().toUTCString())
			.replace('{gregorianDate}', new Date().toUTCString())
			.replace('{mainMenuList}', createItems(configuration));
	}

	async function getConfiguration() {
		let c = await HTTP.get('config.json');
		c = await config.json();

		// TODO fallback to cache

		return c;
	}

	function createItems(configuration) {
		let html = '';
		dummyConfig.menu.forEach(i => {
			html += mainMenuItemTemplate
				.replace('{menuItemImage}', i.img)
				.replace('{menuItemTitle}', i.en) // TODO get language

				// TODO add click listener
		});

		return html;
	}

	return {
		init: init,
		getConfiguration: getConfiguration,
	}

})();

var dummyConfig = {
	"menu": [
		{
			"en": "Agpeya",
			"img": "",
			"constraints": null,

			"menu": [
				{
					"en": "Agpeya SUB 1",
					"constraints": null,
					"img": "",
					"menu": [
						{
							"en": "Agpeya SUB SUB 1",
							"constraints": null,
							"img": "",
							"content": [
								{
									"en": "Content 1",
									"url": ""
								}
							]
						}
					]
				},
				{
					"en": "Agpeya SUB 2",
					"constraints": null,
					"menu": []
				},
				{
					"en": "Agpeya SUB 3",
					"constraints": null,
					"menu": [

					]
				}
			]
		},
		{
			"en": "Psalmody",
			"img": "",
			"constraints": null
		},
		{
			"en": "Bible",
			"img": "",
			"constraints": null
		},
		{
			"en": "Liturgies",
			"img": "",
			"constraints": null
		},
		{
			"en": "Readings",
			"img": "",
			"constraints": null
		},
		{
			"en": "Melodies",
			"img": "",
			"constraints": null
		},
		{
			"en": "Index",
			"img": "",
			"constraints": null
		},
		{
			"en": "Clergy",
			"img": "",
			"constraints": null
		},
		{
			"en": "Special",
			"img": "",
			"constraints": null
		}
	]
}
