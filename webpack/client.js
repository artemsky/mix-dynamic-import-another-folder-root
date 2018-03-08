const mix = require('laravel-mix');
const webpack = require('webpack');

// Load Javascript
mix.js('src/assets/js/client/app.js', 'assets');


// Other Options
mix.setPublicPath('public/client/')
    .setResourceRoot('/client/')
    .webpackConfig({
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                // The order of this array matters
                names: ['assets/common'],
                minChunks: 2
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'assets/manifest',
                minChunks: Infinity,
            })
        ],
    }).options({
    fileLoaderDirs: {
        images: 'assets/images',
        fonts: 'assets/fonts'
    }
});
