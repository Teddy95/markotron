module.exports = {
	// mode: 'development',
	mode: 'production',
	entry: './client.js',
	output: {
		path: __dirname,
		// filename: 'build/js/bundle.js',
		filename: 'build/js/bundle.min.js'
	},
	resolve: {
		extensions: ['.js', '.marko']
	},
	module: {
		rules: [
			{
				test: /\.marko$/,
				use: 'marko-loader'
			},
			{
				test: /\.(sass|scss|css)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
}
