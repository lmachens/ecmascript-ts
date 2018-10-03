Package.describe({
  name: 'lmachens:ecmascript-ts',
  version: '1.0.0',
  summary: 'Compiler plugin that supports ES2015+ in all .ts and .tsx files',
  documentation: 'README.md',
  git: 'https://github.com/lmachens/ecmascript-ts',
});

Package.registerBuildPlugin({
  name: 'compile-ecmascript-ts',
  use: ['babel-compiler'],
  sources: ['plugin.js']
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('babel-compiler@7.1.1');

  // `ecmascript-ts` must provide the same runtime environment
  // that the 'ecmascript' package provides.
  api.imply('modules@0.12.2');
  api.imply('ecmascript-runtime@0.7.0');
  api.imply('babel-runtime@1.2.4');
  api.imply('promise@0.11.1');
  api.imply('dynamic-import@0.4.2');
});
