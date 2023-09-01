# Buku Bacaan Koptik

An unapologetic clone of the [Coptic Reader](https://play.google.com/store/apps/details?id=com.app.copticreader&hl=en_US) Android app.

## Design
I've been saying for years that the web platform doesn't need frameworks any more!

So, I this app is me putting my money where my mouth is.

## TODO
- home
	- DONE - click handlers
	- DONE - settings
		- CANCELED - app language (radio)
		- DONE - font size (slider)
		- DONE - document languages (checkboxes)
		- DONE - comments (single checkbox)
		- DONE - roles (checkboxes)
		- DONE - day transition (time input)
		- DONE - non-customary prayers (single checkbox)
	- about the season
	- calendar (seasons)
		- see occasions.java for dates
		- parsed from Seasons.cr.xml

- DONE - list
- DONE - document
	- DONE - recursive loading & parsing resources
	- DONE - parallel recursive loading & parsing resources!
	- DONE - outline
	- DONE - search
	- DONE - links
	- DONE - apply settings
	- DONE - BibleReference
		- CANCELED - SQL DB decryption

- constraints
- DONE - finish up the menu
	- parse Menus.cr.xml into the MainMenu.DATA JSON
- DONE - replace CopticReadings language with Coptic

- DONE? - coptic date
	- Need to add the "Coptic day transition" to the calculation
- DONE - editor
	- DONE - load file
	- DONE - processing
		- add `content-editable` attr
		- render using `content component` (ignoring the `InsertDocument`)
		- add closing tags to `InsertDocument`
		- switch out the `Language` value
	- DONE - save file
		- dump the `innerHTML` to an anchor tag

- DONE - Android wrapper with capacitor

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

### Capacitor App
This is a Capacitor app that is used to create the actual Android app.
- run `npm install`
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
