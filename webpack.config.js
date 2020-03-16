const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: {
        main: "./src/assets/scripts/main.js",
        info: "./src/assets/scripts/info.js",
        faq: "./src/assets/scripts/faq.js"
    },
    output: {
        filename: "[name].bundle.js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};

module.exports = config;