const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	// used to know which file caused the error, in the minified compressed files.
	devtool: 'inline-source-map', 
	// To place the output in build directory
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist"
	},
	module: {
		rules: [
		  // js & jsx minification
		  {
			test: /\.(js|jsx)$/,
		    exclude: /node_modules/,
		    use: {
		    	loader: "babel-loader"
		    }
		  },
		  // html minification
		  {
		    test: /\.html$/,
		    use: {
		    	loader: "html-loader"
		    }		    
		  },
		  // css minification
		  {
		  	test: /\.(s*)css$/,
		  	use: [{
	            loader: MiniCssExtractPlugin.loader, 	            
	          },
	          'css-loader',
	        ],
		  }
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin("style.css")
	]
};