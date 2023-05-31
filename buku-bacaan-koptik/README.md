# Buku Bacaan Koptik

An unapologetic clone of the [Coptic Reader](https://play.google.com/store/apps/details?id=com.app.copticreader&hl=en_US) Android app.

## Design
I've been saying for years that the web platform doesn't need frameworks any more!

So, I this app is me putting my money where my mouth is.

## TODO
- home
	- DONE - click handlers
	- settings
	- about the season
	- calendar
- DONE - list
- reading
	- DONE - loading & parsing resources
	- DONE - outline
	- DONE - search
- constraints
- utils
	- coptic date
- DONE - editor
	- DONE - load file
	- DONE - processing
		- add `content-editable` attr
		- render using `content component` (ignoring the `InsertDocument`)
		- add closing tags to `InsertDocument`
		- switch out the `Language` value
	- DONE - save file
		- dump the `innerHTML` to an anchor tag

- Android wrapper with capacitor
	- build the app to a `dist` directory
	- intercepting resource http calls

## Environment Setup

### Decrypter App (Android)
- Android Studio should take care of everything
- Add the encrypted folders under the `app\src\main\assets` folder

### Decrypter (Java)
This one gave great results, but it failed to render some of the arabic characters (on Windows at least)
- Using VSCode, install the Java extension pack, and set the source/destination folders.

### web
No setup necessary!
Just run index.html (or use IIS for example, create an application point it to the `web` folder, and just browse)

### web-ng (incomplete code)
- Go to your new project: cd .\web-ng
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition

### Android App (TODO)