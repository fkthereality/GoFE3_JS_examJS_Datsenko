var gulp        = require('gulp'),
    watch       = require('gulp-watch');
var uglify      = require('gulp-uglify');
const imagemin  = require('gulp-imagemin');
const sass      = require('gulp-ruby-sass');
const input     = 'src/scss/**/*.scss';
const output    = 'dist/css';


gulp.task('compress', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('imagemin', function () {
  return 	gulp.src('src/img/*')
  		.pipe(imagemin())
  		.pipe(gulp.dest('dist/img'));
});

gulp.task('sass', function () {
  return sass(input)
    .on('error', sass.logError)
    .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
    gulp.watch(input, ['sass']);
});

// gulp.start('sass'); [ 'watch'],
gulp.task('default', [ 'watch'], function functionName() {
  gulp.start('sass');
});

'use strict';

// подключаем компоненты
var argv = require('yargs').argv;

// подключаем компоненты gulp
var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var livereload = require('gulp-livereload');



// блок с настройками компонентов
// здесь я храню настройки для задач
// удалил отсюда все кроме scripts для наглядности
var components = {
    scripts: {
        source: sourceDir + '/core/application.js',
        dest: destDir,
        watch: sourceDir + '/core/**/*.js',
        options: {
            paths: ['./node_modules', sourceDir],
            debug: false,
            fullPaths: true
        }
    }
};

/**
 * Обработчик ошибок.
 * @param e
 */
var error = function (e) {
    console.error('Error in plugin "' + e.plugin + '"');
    console.error('   "' + e.message + '"');
    console.error('   In file "' + e.fileName + '", line "' + e.lineNumber + '".');
    console.log('--------------------------------------');
    console.log(e);
};

// задача для компиляции скриптов
gulp.task('scripts', function () {
    gulp.src(components.scripts.source)
        .pipe(browserify(components.scripts.options).on('error', error))
        .pipe(gulpif(argv.production, uglify()))
        .pipe(gulp.dest(components.scripts.dest))
        .pipe(livereload());
});

// задача для слежения за изменениями в скриптах
gulp.task('watch:scripts', ['scripts'], function () {
    // запускаем сервер
    livereload.listen();

    // если отслеживаемые файлы изменились, запускаем задачу компиляции скриптов
    gulp.watch(components.scripts.watch, ['scripts']);
});

gulp.task('default', ['scripts']);
gulp.task('watch', ['watch:scripts']);