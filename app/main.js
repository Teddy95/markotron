// Import required modules
const path = require('path')
const i18n = require('i18n')
const i18next = require('i18next')
const { app, BrowserWindow } = require('electron')

const env = process.env.NODE_ENV || 'production'
const isDev = env === 'development'

// Reload all web contents in all windows after filechanges in dev mode
if (isDev) {
	require('electron-reload')(path.join(__dirname, '..', 'dist'))
}

i18next.init({
	lng: 'en-US',
	resources: {
		'de-DE': {
			translation: {
				"greeting": "Hallo Welt!",
				"interpolatedGreeting": "Hallo %s!",
				"cats": {
					"one": "%s Katze",
					"other": "%s Katzen"
				}
			}
		},
		'en-US': {
			translation: {
				"greeting": "Hello world!",
				"interpolatedGreeting": "Hello %s!",
				"cats": {
					"one": "%s cat",
					"other": "%s cats"
				}
			}
		}
	}
})

// // Configure i18n
// i18n.configure({
// 	locales: ['en-US', 'de-DE'],
// 	defaultLocale: 'en-US',
// 	directory: path.join(__dirname, 'locales')
// })
//
// // Set default locale
// i18n.setLocale('en-US')

// Set i18n object as global variable for use in renderer process
// global.i18n = i18n
global.i18next = i18next

let win

function createWindow () {
	win = new BrowserWindow({
		width: 700,
		height: 500,
		webPreferences: {
			nodeIntegration: true
		}
	})

	win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'))

	if (isDev) {
		win.webContents.openDevTools()
	}

	win.on('closed', () => {
		win = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (win === null) {
		createWindow()
	}
})
