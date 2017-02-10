var autoprefixer = require('autoprefixer');

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