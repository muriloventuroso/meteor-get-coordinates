Package.describe({
  name: 'muriloventuroso:get-coordinates',
  version: '0.0.1_2',
  // Brief, one-line summary of the package.
  summary: 'Get the coordinates of an address using the Google Geocoding API',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/muriloventuroso/meteor-get-coordinates.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript','http']);
  api.addFiles('get-coordinates.js');
  api.export('Coordinates');
});
