var gulp = require('gulp');
var ftp = require('vinyl-ftp');
var minimist = require('minimist');
var gutil = require('gulp-util');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function () {
  var remotePath = '/';
  var conn = ftp.create({
    host: 'gold.elastictech.org',
    user: args.user,
    password: args.password,
    log: gutil.log,
    parallel: 10,
  });

  gulp.src([
    './build/**/*.*'
  ])
    .pipe(conn.dest(remotePath));

  // uncomment to deploy last year versions
  // gulp.src([
  //   './2019/**/*.*'
  // ])
  //   .pipe(conn.dest(`${remotePath}/2019`));
  //
  // gulp.src([
  //   './2017/**/*.*'
  // ])
  //   .pipe(conn.dest(`${remotePath}/2017`));
});
