export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "3.8.0-beta.1",
  futureVersion: "3.8.0",
  finalVersion: '3.8.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2019-02-18',
  date: "2019-01-07",
  nextDate: "2019-01-14",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
