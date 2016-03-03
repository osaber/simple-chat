var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('build_js', function() {
  gulp.src([
    './node_modules/jquery/dist/jquery.js',
    './node_modules/handlebars/dist/handlebars.js',
    // './node_modules/socket.io-client/lib/socket.io.js',
    './public/javascripts/app.js'
  ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./public/build'));
});

gulp.task('watch_js', function() {
  gulp.watch(['./public/javascripts/*.js'], ['build_js']);
});

gulp.task('default', ['build_js', 'watch_js']);
