var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var webpack = require('webpack-stream');
var path =  require('path');
var Server = require('karma').Server;

gulp.task('webpack', function(){
  return gulp.src('app/app.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
      watch: true
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('test', function(done){
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  },done).start();
});

gulp.task('server', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
});


gulp.task('dev', ['webpack','test','server']);
