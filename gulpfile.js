/**
 * Gulp Build Script
 * -----------------------------------------------------------------------------
 * @category   Node.js Build File
 * @package    Frunt
 * @copyright  Copyright (c) 2016 Piccirilli Dorsey
 * @license    https://opensource.org/licenses/MIT The MIT License (MIT)
 * @version    1.0
 * @link       https://github.com/picdorsey/frunt
 */

var flixir = require('flixir');
require('laravel-elixir-handlebars');

flixir.config.browserSync = {};

flixir.config.css.sass.folder = '';
flixir.config.distPath = './dist';

flixir(function (mix) {

    // Styles
    mix.sass('./src/scss/style.scss', flixir.config.distPath + '/css/medium-editor-media-plugin.css');

    // Scripts
    //mix.browserify('./src/admin/js/admin.js', flixir.config.distPath + '/admin/js/bundle.js');
    mix.scriptsIn('./src/js/', flixir.config.distPath + '/js/medium-editor-media-plugin.js');

    mix.browserSync({
        reloadOnRestart : true,
        notify: true,
        files: ['./public/assets/**/*.css', './public/assets/**/*.js'],
        server: {
            baseDir: './',
            index: './public/index.html'
        }
    });
});
