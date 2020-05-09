var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

/**
 * when the "ask deploy" command is run, as the root of the project,
 * then the gulp binary executes in the ".ask/lambda" folder.
 * Hence, here, CWD value is absolute path leadind to "".ask/lambda" */
var CWD = process.cwd();
/* When the task "post-install-hook" executes,
   wz are tagetting files already copied in the .ask folder.
   Thus, we can leave the the freshly compiled js fies in place.*/
var OUT_DIR = '.';

/**
 * TASK : compile
 * Compile TypeScript into js
 */
gulp.task('compile', function () {
    console.warn('Running task : compile');
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest(OUT_DIR));
});

/**
 * TASK : clean-ts
 * Once we've compile them, they can be removed.
 */
gulp.task('clean-ts', function () {
    // First, let's have a little check on process.cwd() here, as we'll use forced deletion
    if (CWD.indexOf('.ask') == -1 || (CWD.indexOf('.ask') != -1 && CWD.indexOf('lambda') == -1)) {
        console.warn('[Warn]: We found that gulp task is not trigerred from `.ask/lambda`. Skipping deletion task.');
        console.warn('[Warn]: Gulp seems to be triggerred from', CWD);
        return del([]);
    }
    console.warn('Running task : clean-ts');
    return del(
        [
            '!./', // Ignore parent folder
            '!./node_modules', // Ignore also node_modules
            './*.ts',
            './**/*.ts',
            './*.map',
            './**/*.map',
        ],
        { force: true },
    );
});

gulp.task('post-install-hook', gulp.series(['compile', 'clean-ts']));
