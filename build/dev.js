// Import required modules
const nodemon = require('nodemon')
const webpack = require('webpack')
const config = require('../webpack.config.js')

// Start Electron with Nodemon
nodemon('--watch ./dist/main.js --exec "electron ."')

// Webpack
const compiler = webpack(config)

// Start Webpack watching
compiler.watch({
	aggregateTimeout: 300
}, (err, stats) => {
	if (err) console.log(err)
})
