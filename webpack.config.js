import webPack, { HotModuleReplacementPlugin, NoErrorsPlugin } from 'webpack';

const fileLoaderParams = 'limit=1&name=images/[sha512:hash:12].[ext]';

export default {
    entry: __dirname + '/src/scripts/index.js',
    output: {
        path: __dirname + "/build/",
		filename: "build.js"
	},
	module: {
		loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'babel'
                ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loaders: [ 'style', 'css' ]
            },
            {
                test: /\.(png)$/,
                loader: `file?${ fileLoaderParams }&mimetype=image/png`,
            }
		]
	},
    devtool: '#eval-source-map'
};
