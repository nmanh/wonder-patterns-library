const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const del = require('del');
const runSequence = require('run-sequence');

const $ = gulpLoadPlugins();

var dev = true;

gulp.task('styles:lint', () => {
  return gulp.src('./src/styles/**/*.css')
    .pipe($.plumber())
    .pipe($.stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ],
      syntax: 'scss'
    }));
});

gulp.task('styles', ['styles:lint'], () => {
  const
    assets      = require('postcss-assets'),
    pxtorem     = require('postcss-pxtorem'),
    at2x        = require('postcss-at2x'),
    customMedia = require('postcss-custom-media'),
    shortSize   = require('postcss-short-size'),
    rucksack    = require('rucksack-css'),
    animation   = require('postcss-animation'),
    processors  = [
      pxtorem({
        rootValue: 16,
        replace: true,
        propWhiteList: [],
        selectorBlackList: [/^html$/],
      }),
      assets({
        loadPaths: ['images/'],
        basePath: 'app',
        relative: true,
        cachebuster: true
      }),
      shortSize,
      rucksack(),
      customMedia,
      at2x,
      animation(),
    ];

  return gulp.src('src/styles/*.css')
    .pipe($.plumber())
    .pipe($.if(dev, $.sourcemaps.init()))
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.postcss(processors))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.if(dev, $.sourcemaps.write()))
    .pipe(gulp.dest('./src/assets/styles'));
    // .pipe(reload({stream: true}));
});

gulp.task('clean', del.bind(null, './src/assets/styles'));

gulp.task('styles:compress', () => {
  gulp.src('./src/assets/styles/main.css')
    .pipe($.cssnano({safe: false, autoprefixer: false}))
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest('./src/assets/styles/'));
});

gulp.task('build', () => {
  dev = false;
  runSequence('clean', 'styles', 'styles:compress');
});

gulp.task('watch', ['styles'], () => {
  gulp.watch('./src/styles/**/*.css', ['styles']);
});
