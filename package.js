Package.describe({
  name: 'practicalmeteor:core',
  version: '0.0.1',
  summary: 'Basic packages for practical meteor packages',
  git: 'https://github.com/practicalmeteor/practicalmeteor-core.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(["practicalmeteor:loglevel@1.2.0_2", "practicalmeteor:chai@2.1.0_1"]);
  api.imply(["practicalmeteor:loglevel@1.2.0_2", "practicalmeteor:chai@2.1.0_1", "coffeescript"]);
  api.addFiles('practical.js');
  api.export("practical")
});

Package.onTest(function(api) {

});
