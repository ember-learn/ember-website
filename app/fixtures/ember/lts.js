export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  initialVersion: "3.4.5",
  initialReleaseDate: "2018-10-08",
  lastRelease: "3.4.7",
  futureVersion: "3.4.8",
  channel: "lts",
  date: "2018-12-07",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
