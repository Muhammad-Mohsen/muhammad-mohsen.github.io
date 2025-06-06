# Buku Bacaan Koptik

An unapologetic clone of the [Coptic Reader](https://play.google.com/store/apps/details?id=com.app.copticreader&hl=en_US) Android app.

## Design
I've been saying for years that the web platform doesn't need frameworks any more!

So, I this app is me putting my money where my mouth is.

## TODO
- BibleReference sections (that show book names and the like)
	- handle attributes:
		- intro/conclusion
			- get intro/conclusion
				- go to http://localhost/buku-bacaan-koptik/#/readings/matins/prophecies (weekday)
				- intro missing. should be:
				- need to double check the `ignoreAddendums` condition
				- need to show intro only for the first `bibleverse` element
				- need to show conclusion only for last `bibleverse` element
			- hideIntroConclusion
			- hideIntro
			- hideConclusion
		- type: section/title -> doesn't matter apparently?
		- showVerseNumbers -> doesn't matter to me

	- handle vars
		[AUTHOR]
		[BOOK]
		[BOOK_NAME]
		[ORDINAL]

	- non-bibleverse vars
		baptism/...
		consecrations/
			church
			oil
			reception
		crowning
		funeral
		lakkan
		liturgies/index/pentecost
		papal
		pascha
		prostration
		raisingofincense
			LitanyOfTheGospel
				include\GospelBishopIntro.cr.xml

		Papal Hymns
			include\GospelBishopIntro.cr.xml

		include\LitanyOfTheGospel.cr.xml
		include\PopeGospelIntro.cr.xml
		readings\StandInTheFear.cr.xml

	- BibleBooks creation loops through `BibleBooks.cr.xml`
		- `m_oStyles` = <Style id>
			- <Introduction> & <Conclusion>
			- possible 3 languages
		- `m_oBooks` = <Book id style>
			- <Book> & <Author>
			- possible 3 languages
			- style attr is the link between <Style> & <Book>

- DONE - repository
	- network data source
	- internal data source

- DONE - translations

- DONE - SeasonEvaluator tests
	- isFeast blows up
		- in java, isFeast => Seasons.isSeason => Seasons.matchesCurrentSeason => SeasonEvaluator.checkCurrentSeason (including its leaves)
		- SeasonEvaluator.checkCurrentSeason is like a mini version of SeasonEvaluator.isCurrentSeason it only checks:
			- isSaintSeason
			- isForceSeason

## TODO 2: MOAR STUFF
- DONE - get intro/conclusion
	- go to http://localhost/buku-bacaan-koptik/#/readings/matins/prophecies (weekday)
	- DONE - intro missing. should be:
	- DONE - need to double check the `ignoreAddendums` condition
	- DONE - need to show intro only for the first `bibleverse` element
	- DONE - need to show conclusion only for last `bibleverse` element
	- DONE - need to use `innerHTML` instead of `outerHTML` for `bibleref` tag and set its `display` to `contents`
- DONE - go back after selecting a calendar date
- DONE - localize the dates using code (in home header + calendar header + each event entry) :'(
- support bible xml format in editor
- DONE - issue with nested bibleverse nodes "pascha\resurrection\Prophecies.cr.xml"
- DONE - menu
- bibleref title + outline

- DONE - combine bible chapters into a single document (similar to existing documents)
- hide outline button if empty

## Notes

## Environment Setup

### Decrypter App (Android)
- Android Studio should take care of everything
- Add the encrypted folders under the `app\src\main\assets` folder

### Decrypter (Java)
This one gave great results, but it failed to render some of the arabic characters (on Windows at least)
- Using VSCode, install the Java extension pack, and set the source/destination folders.

### web
No setup necessary! (That's a lie!!)
Just run index.html (or use IIS for example, create an application point it to the `web` folder, and just browse)

### editor
This is a document editor app where we can add new languages to the existing documents.
- open `index.html`, open the document, make the changes in the right-hand column, and save
- replace the old XML under `web/assets/documents/...` with the updated XML

### mobile
This is a Capacitor app that is used to create the actual Android app.
- run `npm install` (only after cloning the repo for the first time)
- run `npm run build`
- run `npx capacitor sync android`
- open Android Studio and build the app!

#### Generating App Icon & Splash Screen
- The `www/manifest.json` file is needed for the assets package to work!
- run the below command
```
npx @capacitor/assets generate --iconBackgroundColor #fff0d9 --iconBackgroundColorDark #fff0d9 --splashBackgroundColor #fff0d9 --splashBackgroundColorDark #fff0d9
```
More info [here](https://github.com/ionic-team/capacitor-assets)

### web-ng (incomplete code) - DELETED in 4476f262bc397607dd3048ec2e4e3e2342f65fa3
- Go to your new project: cd .\web-ng
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition

## Notes
menu URI code (for future reference)
```javascript
const xml = new DOMParser().parseFromString(DEFAULT_MENU, 'text/xml').documentElement;
xml.querySelectorAll('[path]').toArray().forEach(p => {
	let segments = [];
	let seg = p;

	while (seg) {
		segments.unshift(seg);
		seg = seg.parentElement;
	}

	p.setAttribute('uri', segments.map(s => s.getAttribute('name')).join('/').toLowerCase().replace(/ /g, '-').replace(/'/g, ''));
});
```
