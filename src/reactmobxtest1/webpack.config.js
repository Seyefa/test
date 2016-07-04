var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var config = {
    debug: false,
    // devtool: 'source-map',
    bail: true,
    entry: {
        app: [
            './src/sass/main.scss',
            './src/js/main.js'
        ],
        vendor: [
            'babel-polyfill',
            'mobx',
            'mobx-react',
            'react',
            'react-dom',
            'whatwg-fetch'
        ]
    },
    externals: {
        './config.js': 'config'
    },
    output: {
        path: path.join(__dirname, 'wwwroot'),
        filename: './js/app.js'
    },
    resolveLoader: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.resolve('./src'),
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                },
            },
            {
                test: /\.scss$/,
                // loaders: ["style", "css", "sass"],
                loader: ExtractTextWebpackPlugin.extract('style', 'css!sass')
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            // { from: './Frontend/assets/images', to: './static/images' },
            // { from: './Frontend/assets/fonts', to: './static/fonts' }
        ]),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', './js/vendor.js'),
        new ExtractTextWebpackPlugin('./css/styles.css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ],
}

if (process.env.NODE_ENV === "production") {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }));
}

module.exports = config;