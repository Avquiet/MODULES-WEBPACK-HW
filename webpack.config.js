const { resolve } = require("path");
const HtmlWebPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader,
                    'style-loader',
                     'css-loader']
            },
            {
                test:/\.mp3$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bindle.css'
        }),
        new BundleAnalyzerPlugin(),
        
    ]
}