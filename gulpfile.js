var gulp=require('gulp'),
    fs = require('fs-extra'),
    concat=require('gulp-concat'),
    uglify = require('gulp-uglify'),
    BUILD_JSON=require('./build.json'),
	INT_JSON=require('./interactions.json'),
    BUILD_NAME='widget.js',
    MIN_NAME='widget.min.js',
	INT_NAME='interactions.js',
	INT_MIN_NAME='interactions.min.js',
	UI_NAME='ui.js',
	INT_UI_NAME='ui.min.js',
    REPO_NAME='elliptical jquery-ui',
    DIST='./dist';


gulp.task('default',function(){
    console.log(REPO_NAME + ' ..."tasks: gulp build|minify"');
});

gulp.task('build',function(){
    concatFileStream(BUILD_JSON,DIST,BUILD_NAME);
	concatFileStream(INT_JSON,DIST,INT_NAME);
	var bundle=BUILD_JSON.concat(INT_JSON);
	concatFileStream(bundle,DIST,UI_NAME);
});

gulp.task('minify',function(){
	minFileStream(BUILD_JSON,DIST,MIN_NAME);
	minFileStream(INT_JSON,DIST,INT_MIN_NAME);
	var bundle=BUILD_JSON.concat(INT_JSON);
	minFileStream(bundle,DIST,INT_UI_NAME);
});

function srcStream(src){
    if(src===undefined) src=BUILD_JSON;
    return gulp.src(src);
}

function concatStream(name,src){
    if(src===undefined) src=BUILD_JSON;
    return srcStream(src)
        .pipe(concat(name))
}

function fileStream(src,dest){
    gulp.src(src)
        .pipe(gulp.dest(dest));
}

function concatFileStream(src,dest,name){
    gulp.src(src)
        .pipe(concat(name))
        .pipe(gulp.dest(dest));
}

function minFileStream(src,dest,name){
    gulp.src(src)
        .pipe(concat(name))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
}
