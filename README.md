<p align="center">
	<img src="app/assets/repo-header.jpg" alt="" />
	<span>with Marko, Browserify and Gulp.</span>
</p>

![Marko App Electron Window](app/assets/app-window.png)

```shell
# Clone Repository
$ git clone https://github.com/Teddy95/markotron.git my-project

# Go into root directory
$ cd my-project

# Install dependencies
$ npm install

# Compile & run App...
$ npm run build
$ npm start

# ...or run App in dev mode
$ npm run dev
```

- Live reloading of web contents in all browser windows after filechanges :fire:
- Watch task for live compiling of Sass/Scss and Marko files after changes :dizzy:
- Compiling Marko files to Html, Js & Css and bundle it with Browserify :crystal_ball:
- Gulp included + Tasks for compiling, packaging & more :wine_glass:
- Included Electron Packager for packaging application for Mac OS X, Windows and Linux :gift:

Happy Coding! :heart: :sparkles:

## File structure

### Development in `/app`

- `/app` Electron index.html & main.js
- `/app/assets` Logos, images, icons, ...
- `/app/css` Your Css files
- `/app/js` Your React Js files
- `/app/sass` Your Sass/Scss files

### Production in `/build`

- `/build` Electron index.html & main.js copied from `/app`
- `/build/assets` Files copied from `/app/assets`
- `/build/css` Here you find the `style.min.css` generated from all Css files in `/app/css`
- `/build/js` Here you find the `bundle.min.js` with contains the Js code of your React application

### Packaging in `/release`

- `/release` Compiled applications for Mac OS X, Windows and Linux

## Scripts

### Start App

```shell
$ npm start
```

### Start App in dev mode

1. Compile Sass/Scss & Jsx
2. Build application
3. Start `gulp watch` for recompiling Sass/Scss & Jsx after filechanges
4. Start Electron

```shell
$ npm run dev
```

### Watch Scripts

Watching the following scripts and compile they, if there were changes.

```
app/sass/*.scss
app/css/*.css
app/js/**/*
app/*.html
app/*.js
```

```shell
$ npm run watch
```

### Build App

Compile application and generate `/build` directory.

```shell
$ npm run build
```

### Release App

##### Configurations

Set product name & icons in `package.json`.

```json
{
	"name": "reactron",
	"productName": "Reactron - Electron Boilerplate",
	"build": {
		"icon": {
			"mac": "build/assets/icons/icon.icns",
			"windows": "build/assets/icons/icon.ico",
			"linux": "build/assets/icons/icon.png"
		}
	}
}
```

##### Packaging

_Packaging for Mac OS X_:

```shell
$ npm run build
$ npm run package-mac
```

_Packaging for Windows_:

```shell
$ npm run build
$ npm run package-windows
```

_Packaging for Linux_:

```shell
$ npm run build
$ npm run package-linux
```

...or release it all at once:

```shell
$ npm run release
```
