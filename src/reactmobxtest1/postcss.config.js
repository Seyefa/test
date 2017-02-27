var autoprefixer = require('autoprefixer'),
    urlMapper = require('postcss-url-mapper');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: [
                'last 2 versions',
                'not Explorer <= 10'
            ]
        })
    ]
}
