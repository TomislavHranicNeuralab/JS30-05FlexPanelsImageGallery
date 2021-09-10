const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve( __dirname, 'dist' )
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				template: './src/index.html'
			}
		),
		new BrowserSyncPlugin(
			{
				host: 'localhost',
				port: 3000,
				proxy: 'http://localhost:3100/'
			},
			{
				reload: false
			}
		)
	],
}
