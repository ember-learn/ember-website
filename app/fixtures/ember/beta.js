export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "3.9.0-beta.3",
  futureVersion: "3.9.0",
  finalVersion: '3.9.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2019-04-10',
  date: "2019-02-27",
  nextDate: "2019-03-11",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
