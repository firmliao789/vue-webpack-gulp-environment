/**
 * Created by liaoyi on 2017/6/22.
 */
var gulp = require('gulp'),
    sftp = require('gulp-sftp');

var sftpOptions = {
    host: '120.55.66.4',
    port: '22',
    user: 'etrip',
    pass: 'DSzGbnxfDn5jZCFP',
    remotePath: '/home/etrip/weixin/develop-test/'
}

gulp
    .task('sftp', function (done) {
        return gulp.src('./output/**')
            .pipe(sftp(sftpOptions))
    })
