const pages = ['main', 'catalog', 'card', 'cooperation'];

export function server(done) {
  pages.forEach((page, index) => {
    app.plugins.browserSync.create(page).init({
      server: {
        baseDir: app.path.build.root,
        index: `${page}.html`,
      },
      notify: false,
      port: 3000 + index * 10,
      ui: {
        port: 3001 + index * 10,
      },
    });
  });
}

export function reload(done) {
  pages.forEach((page) => {
    app.plugins.browserSync.get(page).reload();
    done();
  });
}
