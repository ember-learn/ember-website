export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  initialVersion: "3.7.0",
  initialReleaseDate: "2019-01-07",
  lastRelease: "3.7.0",
  futureVersion: "3.7.1",
  channel: "release",
  date: "2019-01-07",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
