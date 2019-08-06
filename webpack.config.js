const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "/")
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(s*)css$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	resolve: {
		alias: {
			CORE: path.resolve(__dirname, "./src/js/core/"),
			APP_COMPONENTS: path.resolve(__dirname, "./src/js/components/"),
			UTILS: path.resolve(__dirname, "./src/js/utilities/"),
			REDUX: path.resolve(__dirname, "./src/js/redux/")
		},
		extensions: [".js", ".jsx", "*"]
	},
	devServer: {
		port: 3000,
		proxy: {
			"/api/**": {
				target: "http://localhost:6200"
			}
		},
		// contentBase: "/",
		hot: true
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};
