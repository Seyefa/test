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
            './frontend/styles/index.scss',
            './frontend/js/index.js'
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
        './config': 'config',
        './config.js': 'config',
        './config.jsx': 'config'
    },
    output: {
        path: path.join(__dirname, 'wwwroot'),
        filename: './js/app.js'
    },
    resolveLoader: {
        modulesDirectories: ['node_modules']
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-1', 'react'],
                    plugins: ['transform-decorators-legacy']
                },
            },
            {
                test: /\.scss$/,
                // loader: 'style!css!sass',
                loader: ExtractTextWebpackPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2|otf)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=../fonts/[name].[ext]&emitFile=false'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=10000&name=../images/[name].[ext]&emitFile=false'
            }
        ],
        noParse: [
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './frontend/index.html' },
            { from: './frontend/config.js', to: './js' },
            { from: './frontend/images', to: './images' },
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
    devServer: {
    }
}

// TODO: webpack.config.production.js 
if (process.env.NODE_ENV === "production") {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
    }));
}

module.exports = config;