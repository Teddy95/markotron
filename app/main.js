// Import required modules
const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const i18next = require('./lib/i18next')

const env = process.env.NODE_ENV || 'production'
const isDev = env === 'development'

// Reload all web contents in all windows after filechanges in dev mode
if (isDev) {
	require('electron-reload')(path.join(__dirname, '..', 'dist'))
}

let win

function createWindow () {
	var menu = Menu.buildFromTemplate([
		{
			label: i18next.t('electron.menu.language'),
			submenu: [
				{
					label: i18next.t('electron.menu.english'),
					click() {
						i18next.changeLanguage('en-US', (err, t) => {
							if (err) console.log(err)
							win.reload()
						})
					}
				},
				{
					label: i18next.t('electron.menu.german'),
					click() {
						i18next.changeLanguage('de-DE', (err, t) => {
							if (err) console.log(err)
							win.reload()
						})
					}
				}
			]
		}
	])

	Menu.setApplicationMenu(menu)

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
