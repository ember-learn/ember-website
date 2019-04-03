export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "3.10.0-beta.1",
  futureVersion: "3.10.0",
  finalVersion: '3.10.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2019-05-13',
  date: "2019-04-02",
  nextDate: "2019-04-08",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
