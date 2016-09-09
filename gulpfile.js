var gulp = require('gulp'), //基础库
    sass = require('gulp-sass'), //sass编译
    autoprefixer = require('gulp-autoprefixer'), // css自动补齐前缀
    clean = require('gulp-clean'); //清空文件夹
var cssSrc = '*.scss',
    cssDst = 'css';


gulp.task('clean', function() {
	 	gulp.src([cssDst], {
	    read: false
	  })
	  .pipe(clean());
 });
// 样式处理
gulp.task('css', function() {
    gulp.src(cssSrc)
        .pipe(sass({ outputStyle: 'nested'}))
        .pipe(gulp.dest(cssDst))
        .pipe(autoprefixer({
            browsers: ['last 6 versions'],
            cascade: true //是否美化属性值
        }))
        .pipe(gulp.dest(cssDst));
});
// 默认任务 gulp default
gulp.task('default', ['clean'], function() {
     gulp.start('css');
});

