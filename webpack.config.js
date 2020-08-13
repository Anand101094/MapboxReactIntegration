const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: "cheap-module-source-map",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', 'css-loader', 'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        })
    ]
}