// Import package.json
const path = require('path')
const package = require('./package.json')

// Get environment variables
const platform = process.env.PACKAGE_PLATFORM

// Mac OS (App Store) configurations
const macOSConfig = {
	appBundleId: package.appBundleId,
	appCategoryType: 'public.app-category.developer-tools',
	darwinDarkModeSupport: false,
	protocols: [
		{

			// Open markotron:// links in app
			name: 'Open Link in markotron',
			schemes: [
				'markotron'
			]
		}
	],
	usageDescription: {
		Camera: 'Needed for video calls',
		Microphone: 'Needed for voice calls',
		// ...
	}
}

// Windows configurations
const windowsConfig = {
	win32metadata: {
		CompanyName: package.author,
		FileDescription: package.productName,
		OriginalFilename: package.productName + '.exe',
		ProductName: package.productName,
		InternalName: package.productName
	}
}

// Export configurations for Electron Packager
module.exports = {
	dir: path.join(__dirname),
	appCopyright: package.author,
	appVersion: package.version,
	arch: 'all',
	asar: false,
	executableName: package.productName,
	icon: platform === 'darwin' ? './resources/icons/icon.icns' : platform === 'win32' && './resources/icons/icon.ico',
	ignore: [
		/app/,
		/build/,
		/.dockerignore/,
		/.gitignore/,
		/.jshintrc/,
		/Dockerfile/,
		/webpack.config.js/,
	],
	name: package.productName,
	out: path.join(__dirname, 'release'),
	overwrite: true,
	platform: platform,
	...macOSConfig,
	...windowsConfig
}
