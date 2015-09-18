Package.describe({
  name: 'practicalmeteor:core',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/practicalmeteor/practicalmeteor-core.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(["practicalmeteor:loglevel", "practicalmeteor:chai"]);
  api.imply(["practicalmeteor:loglevel", "practicalmeteor:chai"]);
  api.addFiles('practical.js');
  api.export("practical")
});

Package.onTest(function(api) {

});
