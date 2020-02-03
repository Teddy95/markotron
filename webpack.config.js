// Import required modules
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Get node environment
const { NODE_ENV } = process.env
const isDev = NODE_ENV === 'development'
const env = isDev ? 'development' : 'production'

// Define webpack rules
const markoRule = {
	test: /\.marko?$/,
	loader: '@marko/webpack/loader'
}

const htmlRule = {
	test: /\.html$/,
	use: [
		{
			loader: 'html-loader',
			options: {
				minimize: isDev ? false : true,
				interpolate: true
			}
		}
	]
}

const styleRule = {
	test: /\.(sass|scss|css)$/,
	use: [
		MiniCssExtractPlugin.loader,
		'css-loader',
		'sass-loader'
	]
}

const vectorRule = {
	test: /\.svg/,
	loader: 'svg-url-loader'
}

const imageRule = {
	test: /\.(jpg|jpeg|gif|png|ico)$/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: 'images/[name]-[hash:8].[ext]'
			}
		}
	]
}

const mediaRule = {
	test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|m4a)$/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: 'media/[name]-[hash:8].[ext]'
			}
		}
	]
}

const fontRule = {
	test: /\.(woff|woff2|ttf|eot)$/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: 'webfonts/[name]-[hash:8].[ext]'
			}
		}
	]
}

// Webpack config for renderer process
const renderer = {
	target: 'web',
	name: 'Renderer',
	mode: env,
	entry: {
		renderer: './app/renderer.js'
	},
	output: {
		filename: 'renderer.js',
		path: path.join(__dirname, 'dist')
	},
	devServer: isDev ? {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		port: 8080,
		overlay: true,
		hot: true,
        stats: 'minimal',
	} : undefined,
    devtool: isDev ? 'source-map' : undefined,
	resolve: {
		extensions: ['.js', '.json', '.marko']
	},
	module: {
		rules: [markoRule, htmlRule, styleRule, vectorRule, imageRule, mediaRule, fontRule]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env),
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new HTMLWebpackPlugin({
			template: './app/index.html',
			filename: 'index.html',
			inject: true,
			minify: isDev ? false : {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		})
	]
}

// Webpack config for main process
const main = {
    name: 'Main',
    mode: env,
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    },
    externals: nodeExternals(),
    entry: {
        main: ['./app/main.js']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.marko']
    },
    // module: {
    //     rules: []
    // }
}

// Export configurations
module.exports = [
	main,
	renderer
]
