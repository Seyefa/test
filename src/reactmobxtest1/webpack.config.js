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
            './assets/styles/main.scss',
            './assets/js/main.js'
        ],
        vendor: [
            'babel-polyfill',
            'classnames',
            'mobx',
            'mobx-react',
            'react',
            'react-bootstrap',
            'react-dom',
            'react-fontawesome',
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
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                },
            },
            {
                test: /\.scss$/,
                // loader: 'style!css!sass',
                loader: ExtractTextWebpackPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=../fonts/[name].[ext]&emitFile=false&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=../fonts/[name].[ext]&emitFile=false'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=5000&name=../images/[name].[ext]&emitFile=false'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './assets/index.html' },
            { from: './assets/config.js', to: './js' },
            { from: './assets/images', to: './images' },
            // { from: './node_modules/bootstrap-sass/assets/fonts/bootstrap', to: './fonts' },
            { from: './node_modules/font-awesome/fonts', to: './fonts' }
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
        })
    ],
}

// TODO: webpack.config.production.js 
if (process.env.NODE_ENV === "production") {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
    }));
}

module.exports = config;