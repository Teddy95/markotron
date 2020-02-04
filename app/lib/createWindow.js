// Import required modules
const { BrowserWindow } = require('electron')
const path = require('path')

// Get node environment
const env = process.env.NODE_ENV || 'production'
const isDev = env === 'development'

// Creates a new browser window and loads the renderer
module.exports = (options) => {
	// Create a new browser window
	var window = new BrowserWindow(options)

	// Load renderer
	window.loadFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))

	// Open development tools in dev mode
	if (isDev) {
		window.webContents.openDevTools()
	}

	window.on('closed', () => {
		window = null
	})

	return window
}
