// Import required modules
const path = require('path')

const env = process.env.NODE_ENV || 'production'
const isDev = env === 'development'

// Reload all web contents in all windows after filechanges in dev mode
if (isDev) {
	require('electron-reload')(path.join(__dirname, '..', 'dist'))
}

const { app, BrowserWindow } = require('electron')

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
