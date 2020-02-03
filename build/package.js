// Import required modules
const path = require('path')
const packager = require('electron-packager')
const electronPackagerConfig = require('../config')

// Get environment variables
const platform = process.env.PACKAGE_PLATFORM
const arch = process.env.PACKAGE_ARCH

const bundleElectronApp = async (options) => {
	const appPaths = await packager(options)
	console.log(`Electron app bundles created:\n${appPaths.join("\n")}`)
}

bundleElectronApp(electronPackagerConfig)
