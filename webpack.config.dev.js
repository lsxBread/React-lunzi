const base = require('./webpack.config.js')
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html'
        })
    ]
})