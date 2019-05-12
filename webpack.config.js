const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, '/dev/assets/js'),
        filename: 'bundle.js',
    },
    optimization: {
        minimize: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery/dist/jquery.min.js',
            jQuery: 'jquery/dist/jquery.min.js',
            'window.jQuery': 'jquery/dist/jquery.min.js',
        }),
    ],
};
