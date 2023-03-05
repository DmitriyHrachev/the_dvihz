import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
global.app = {
  path,
  gulp,
  plugins,
};

// Import tasks
import { copy } from './gulp/tasks/copy.js';
import { clean } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToItf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
}
const fonts = gulp.series(otfToItf, ttfToWoff, fontsStyle);
const dev = gulp.series(
  clean,
  fonts,
  copy,
  html,
  scss,
  js,
  images,
  gulp.parallel(watcher, server)
);
gulp.task('default', dev);
