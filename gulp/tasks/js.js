import webpack from 'webpack-stream';
import path from 'path';
import vinylNamed from 'vinyl-named';
export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: false })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(vinylNamed())
    .pipe(
      webpack({
        mode: 'production',
        devtool: 'inline-cheap-source-map',
        output: { filename: '[name].min.js' },
        resolve: {
          alias: {
            Plugins: path.resolve(app.path.srcFolder + '/js/plugins'),
          },
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js));
};
