var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    jade = require('gulp-jade'),
    markdown = require('gulp-markdown');

var paths = {
  stylus: ['stylus/*.styl'],
  html: ['html/*.html'],
  jade: ['jade/*.jade'],
  md:['md/*.md']
};

gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
    .pipe(stylus())
    .pipe(gulp.dest('css'));
});

gulp.task('jade', function() {
  return gulp.src(paths.jade)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('html'));
});

gulp.task('md', function() {
  return gulp.src(paths.md)
    .pipe(markdown())
    .pipe(gulp.dest('render'))
})

gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus']);
  gulp.watch(paths.jade, ['jade']);
});

gulp.task('default', ['stylus', 'jade']);