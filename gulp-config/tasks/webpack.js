module.exports = function(gulp, plugins, path_src, path_dest) {
    let webpack = require('webpack'),
        webpackStream = require('webpack-stream');

    let onError = function(err) {
        plugins.notify.onError({
            title: 'Error in ' + err.plugin,
            message: err.message,
        })(err);
        this.emit('end');
    };

    return gulp
        .src(path_src + 'index.js')
        .pipe(plugins.plumber({ errorHandler: onError }))
        .pipe(
            webpackStream({
                output: {
                    filename: 'bundle.js',
                },
                optimization: {
                    minimize: true,
                },
                module: {
                    rules: [
                        {
                            test: /\.(js)$/,
                            exclude: /(node_modules)/,
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
            }),
        )
        .pipe(gulp.dest(path_dest))
        .pipe(browserSync.reload({ stream: true }));
};
