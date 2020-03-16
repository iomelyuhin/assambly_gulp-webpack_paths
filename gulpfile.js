const gulp = require('gulp');
const pug = require('gulp-pug');
const postcss = require('gulp-postcss');
// const svgSprite = require('gulp-svg-sprite');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const del = require('del');
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const browserSync = require('browser-sync').create();

const rootPath = 'c:/test2/';
const htmlPath = ''
const assetsPath = 'assets/';

const paths = {
    
    root: rootPath,
    templates: {
        pages: './src/views/pages/*.pug',
        src: './src/views/**/*.pug',
        dest: `${rootPath + "/" + htmlPath}`
    },
    styles: {
        main: './src/assets/styles/main.scss',
        src: './src/assets/styles/**/*.scss',
        dest: `${rootPath + "/" + assetsPath}/styles`
    },
    scripts: {
        src: './src/assets/scripts/*.js',
        dest: `${rootPath + "/" + assetsPath}/scripts/`
    },
    images: {
        src: './src/assets/images/**/*.*',
        dest: `${rootPath + "/" + assetsPath}/images/`
    },
    fonts: {
        src: './src/assets/fonts/*.*',
        dest: `${rootPath + "/" + assetsPath}/fonts/`
    },
    css_libs: {
        src: './src/assets/styles/libs/*.css',
        dest: `${rootPath + "/" + assetsPath}/styles/libs`
    }
    // svg: {
    //     src: './src/assets/images/icons/svg/*.*',
    //     dest: './dist/assets/images/'
    // }
}

// слежка
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.css_libs.src, css_libs);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.fonts.src, fonts);
    // gulp.watch(paths.svg.src, svg);
}

// следим за build и релоадим браузер
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

// очистка
function clean() {
    return del(paths.root);
}

// pug
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.templates.dest));
}

// scss
function styles() {
    return gulp.src(paths.styles.main)
        .pipe(sourcemaps.init())
        .pipe(postcss(require("./postcss.config")))
        .pipe(sourcemaps.write())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest(paths.styles.dest))
}

//svg
// function svg() {
//     return gulp.src(paths.svg.src)
//         .pipe(svgSprite({
//             mode: {
//                 stack: {
//                     sprite: "../sprite.svg"  //sprite file name
//                 }
//             },
//         }
//         ))
//         .pipe(gulp.dest(paths.svg.dest));
// }

// webpack
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}

// images
function images() {
    return gulp.src(paths.images.src) //откуда
        .pipe(gulp.dest(paths.images.dest)) //куда
}
// fonts
function fonts() {
    return gulp.src(paths.fonts.src) //откуда
        .pipe(gulp.dest(paths.fonts.dest)) //куда
}
//css_libs
function css_libs() {
    return gulp.src(paths.css_libs.src) //откуда
        .pipe(gulp.dest(paths.css_libs.dest)) //куда
}

exports.templates = templates;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;
exports.css_libs = css_libs;
// exports.svg = svg;
exports.clean = clean;

gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, css_libs, templates, scripts, images, fonts),
    gulp.parallel(watch, server)
));