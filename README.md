<p align="center">
	<img src="resources/repo-header.jpg" alt="" />
	<span>with Marko & Webpack.</span>
</p>

![Marko App Electron Window](resources/app-window.png)

```shell
# Clone Repository
$ git clone https://github.com/Teddy95/markotron.git my-project

# Go into root directory
$ cd my-project

# Install dependencies
$ npm install

# Compile & run App...
$ npm run build
$ npm run start

# ...or run App in dev mode
$ npm run dev
```

## Features

- Electron 🔮
- Marko.js 🧩
- i18next internationalization 🌐
- Webpack 📦
- FontAwesome 🔣
- Electron Packager with configs for Mac OS, Linux & Windows 🍷
- Hot reloading after filechanges for both: main & renderer process 🔥

Happy Coding! ❤️✨

### Components

Components are written in [marko.js](https://github.com/marko-js/marko). Add new components in the `/app/renderer/components` directory.

### Stylesheets

Write your stylesheets in CSS or SCSS and save them to `/app/renderer/style` and import them to `style.scss`. This stylesheet file will be compiled and included in your application.

### Language variables

All language variables are stored in `/app/locales` and can be accessed by a marko.js component. Markotron uses the i18next module.

```marko
// Simple language variable
<lang var="greeting" /> // -> Hello world!

// Language variable with value
<lang var="interpolatedGreeting" value={ name: 'Andre' } /> // -> Hello Andre!

// Language variables with singular and plural
<lang var="cats" value={ count: 1 } /> // -> One cat
<lang var="cats" value={ count: 2 } /> // -> 2 cats
```

## File structure

### Development in `/app`

- `/app/lib` JavaScript modules / libraries
- `/app/locales` Localization files
- `/app/main` Electron main process
- `/app/renderer` Electron renderer process
- `/app/renderer/assets` Assets like logos, images, icons, etc.
- `/app/renderer/components` Marko components
- `/app/renderer/style` CSS / SCSS Stylesheets
- `/app/renderer/view` Marko.js views for the windows

### Production in `/dist`

- `/dist` App compiled from `/app`

### Build tools in `/build`

- `/build` Tools for development and packaing

### Packaging in `/release`

- `/release` Compiled applications for Mac OS X, Windows and Linux

## Scripts

### Start App

```shell
$ npm run start
```

### Start App in dev mode

```shell
# Recompile app after file changes and reload contents in Electron
$ npm run dev
```

### Build App

Compile application and generate `/build` directory.

```shell
$ npm run build
```

### Release App

##### Configurations

Set appBundleId, productName, version & author in `package.json`.

```json
{
	"appBundleId": "com.markotron.myapp",
	"productName": "Markotron - Electron Boilerplate",
	"version": "2.0.0",
	"author": "Author"
}
```

More configurations for packaging are in `/config.js`. See [electron-packager configurations](https://github.com/electron/electron-packager/blob/master/docs/api.md) for more info.

##### Packaging

```shell
# Packaging for Mac OS X
$ npm run package-mac

# Packaging for Linux
$ npm run package-linux

# Packaging for Windows
$ npm run package-windows

# ...or release it all at once
$ npm run release
```
