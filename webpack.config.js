const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = (env, args) => {	
	const config = {
		// used to know which file caused the error, in the minified compressed files.
		devtool: (args.mode === 'development') ? 'inline-source-map' : false, 
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
			  // html minifica
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
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all'
					}
				}
			}
		},
		plugins: [
			new HtmlWebPackPlugin({
				template: "./src/index.html",
				filename: "./index.html"
			}),
			new MiniCssExtractPlugin("style.css"),
			new MinifyPlugin()
		]
	}

	return config;
};