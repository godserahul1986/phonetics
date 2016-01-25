import webpackConfig from './webpack.config.js';
import webPack, { HotModuleReplacementPlugin, NoErrorsPlugin } from 'webpack';

const getHotEntries = () => {
    return [
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:8555',
        webpackConfig.entry
    ];
};

export default {
    ...webpackConfig,
    entry: getHotEntries(),
    module: {
		loaders: webpackConfig.module.loaders || []
	},
    plugins: [
        new webPack.HotModuleReplacementPlugin(),
        new webPack.NoErrorsPlugin()
    ]
};
