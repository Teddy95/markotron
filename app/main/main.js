// Import required modules
const { app, Menu } = require('electron')
const path = require('path')
const i18next = require('../lib/i18next')
const createWindow = require('../lib/createWindow')

// Get node environment
const env = process.env.NODE_ENV || 'production'
const isDev = env === 'development'

// Reload all web contents in all windows after filechanges in dev mode
if (isDev) {
	require('electron-reload')(path.join(__dirname, '..', '..', 'dist'))
}

// Set i18next as global variable for remote use in renderer process
global.i18next = i18next

// Define variable for main window instance & window options
var mainWindow
const mainWindowOptions = {
	width: 700,
	height: 500,
	webPreferences: {
		nodeIntegration: true
	}
}

// Define app events
app.on('ready', () => {
	mainWindow = createWindow(mainWindowOptions)
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (mainWindow === null) {
		mainWindow = createWindow(mainWindowOptions)
	}
})

// Define title menu
const menu = Menu.buildFromTemplate([
	{
		label: i18next.t('electron.menu.language'),
		submenu: [
			{
				label: i18next.t('electron.menu.english'),
				click() {
					i18next.changeLanguage('en-US', (err, t) => {
						if (err) console.log(err)
						mainWindow.reload()
					})
				}
			},
			{
				label: i18next.t('electron.menu.german'),
				click() {
					i18next.changeLanguage('de-DE', (err, t) => {
						if (err) console.log(err)
						mainWindow.reload()
					})
				}
			}
		]
	}
])

// Set title menu for all windows
Menu.setApplicationMenu(menu)
