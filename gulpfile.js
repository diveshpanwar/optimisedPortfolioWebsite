// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var minify = require('gulp-minifier');
var connect = require('gulp-connect');
// var gutil = require('gulp-util');
// var critical = require('critical');
var psi = require('psi');
//site hosted on the ngrok
// var site = 'https://5423fa22.ngrok.io';
//actual website hosted on my personal server to boost the performance
var site='http://optimisedportfolio.diveshpanwar.website/';
//website hosted on the github
// var site = 'https://diveshpanwar.github.io/optimisedPortfolioWebsite/dist/';
var key = '';

//start the server
gulp.task('connect', function() {
  connect.server({
    name: 'Gulp Test',
    root: 'dist',
    port: 8000,
    host: 'localhost',
    livereload: true
  });
});
// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//minify all html, css, js
gulp.task('minifyall', function() {
  return gulp.src('dev/**/*').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    minifyCSS: true,
    getKeptComment: function (content, filePath) {
        var m = content.match(/\/\*![\s\S]*?\*\//img);
        return m && m.join('\n') + '\n' || '';
    }
  })).pipe(gulp.dest('dist/'))
     .pipe(connect.reload());
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/js/*.js', ['lint','minifyall']);
    gulp.watch('dev/css/*.css', ['minifyall']);
    gulp.watch('dev/*.html', ['minifyall']);
    gulp.watch('dev/views/js/*.js', ['lint','minifyall']);
    gulp.watch('dev/views/css/*.css', ['minifyall']);
    gulp.watch('dev/views/*.html', ['minifyall']);
});

gulp.task('mobile', function () {
    return psi(site, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }).then(function (data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
        console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
    });
});

gulp.task('desktop', function () {
    return psi(site, {
        nokey: 'true',
        // key: key,
        strategy: 'desktop',
    }).then(function (data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
    });
});

// Default Task
gulp.task('default', ['lint','connect','watch','minifyall']);
