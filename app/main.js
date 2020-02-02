const path = require('path')
const electron = require('electron')

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
	win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	})

	if (isDev) {
		win.loadURL(`http://localhost:8080`)
		win.webContents.openDevTools()
	} else {
		win.loadFile(path.join(__dirname, '..', 'build', 'index.html'))
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
