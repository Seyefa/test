var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var isProduction = process.env.NODE_ENV === 'production';
console.log(isProduction ? 'Production' : 'Development');

var config = {
    bail: true,
    cache: true,
    devtool: 'source-map',
    entry: {
        app: [
            'babel-polyfill',
            './src/styles/global.scss',
            './src/index.js'
        ],
        lib: [
            'babel-polyfill',
            'classnames',
            'mobx',
            'mobx-react',
            'mobx-react-devtools',
            'mobx-react-form',
            'react',
            'react-bootstrap',
            'react-css-modules',
            'react-dom',
            'react-fontawesome',
            'react-router',
            'validatorjs',
            'whatwg-fetch'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: './js/[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader', options: { presets: ['es2015', 'es2016', 'stage-2', 'react'], plugins: ['transform-runtime', 'transform-decorators-legacy'] } },
                    { loader: 'ts-loader' }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader', options: { presets: ['es2015', 'es2016', 'stage-2', 'react'], plugins: ['transform-runtime', 'transform-decorators-legacy'] } }]
            },
            {
                test: /\.scss$/,
                include: searchPath => searchPath.startsWith(path.resolve(__dirname, 'src')),
                exclude: searchPath => searchPath.startsWith(path.resolve(__dirname, 'src/styles/global')),
                loader: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: `css-loader?modules&sourceMap&importLoaders=2&localIdentName=[local]-[hash:base64:5]&minimize=${isProduction}!postcss-loader!sass-loader?sourceMap&includePaths[]=./src/styles`
                    // localIdentName=[path][name]__[local]--[hash:base64:5]
                })
            },
            {
                test: /\.css$/,
                include: searchPath => searchPath.startsWith(path.resolve(__dirname, 'src')),
                exclude: searchPath => searchPath.startsWith(path.resolve(__dirname, 'src/styles/global')),
                loader: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: `css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]-[hash:base64:5]&minimize=${isProduction}!postcss-loader`
                    // localIdentName=[path][name]__[local]--[hash:base64:5]
                })
            },
            {
                test: /\.scss$/,
                exclude: searchPath => searchPath.startsWith(path.resolve(__dirname, 'src')) && !searchPath.startsWith(path.resolve(__dirname, 'src/styles/global')),
                loader: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: `css-loader?sourceMap&importLoaders=2&minimize=${isProduction}!postcss-loader!sass-loader?sourceMap&includePaths[]=./src/styles`
                })
            },
            {
                test: /\.css$/,
                exclude: searchPath => searchPath.startsWith(path.resolve(__dirname, 'src')) && !searchPath.startsWith(path.resolve(__dirname, 'src/styles/global')),
                loader: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: `css-loader?sourceMap&importLoaders=1&minimize=${isProduction}!postcss-loader`
                })
            },
            { test: /\.woff(\?.*)?$/, loader: 'url-loader?name=../fonts/[name].[ext]&limit=10000&mimetype=application/font-woff&emitFile=false' },
            { test: /\.woff2(\?.*)?$/, loader: 'url-loader?name=../fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2&emitFile=false' },
            { test: /\.otf(\?.*)?$/, loader: 'file-loader?name=../fonts/[name].[ext]&limit=10000&mimetype=font/opentype&emitFile=false' },
            { test: /\.ttf(\?.*)?$/, loader: 'url-loader?name=../fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream&emitFile=false' },
            { test: /\.eot(\?.*)?$/, loader: 'file-loader?name=../fonts/[name].[ext]&emitFile=false' },
            { test: /\.svg(\?.*)?$/, loader: 'url-loader?name=../fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml&emitFile=false' },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=8192&emitFile=true' }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: isProduction ? false : true
        }),
        new CopyWebpackPlugin([
            { from: './src/index.html' },
            { from: './src/config.json' },
            { from: './src/web.config' },
            // { from: './src/images', to: './images' },
            { from: './node_modules/font-awesome/fonts/fontawesome-webfont.*', to: './fonts/[name].[ext]' }
        ]),
        new webpack.optimize.CommonsChunkPlugin({ name: 'lib', minChunks: Infinity }),
        new ExtractTextWebpackPlugin({ filename: './css/styles.css', allChunks: true }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    devServer: {
    }
}

if (isProduction) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
    }));
}

module.exports = config;
