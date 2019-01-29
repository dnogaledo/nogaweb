const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		main: "./src/js/main.js",
		nogajobs: "./src/js/nogajobs.js"
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
		        test: /\.jsx?$/,
		        exclude: /node_modules/,
		        loader: 'babel-loader',
		        query: {
		          cacheDirectory: true,
		        },
	      	},
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: function() {
								return [
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					},
					{
						loader: 'sass-loader',
					}
				]
			},
		    {
		        test: /\.css$/,
		        loader: ['style-loader', 'css-loader']
		    },
			{
	         test: /.(jpe?g|png|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
	         use: [{
	           loader: 'file-loader',
	           options: {
	             name: '[name].[ext]',
	             outputPath: 'fonts/',
	             publicPath: '../public/fonts/',
	           }
	         }]
	       },
		]
	}
}