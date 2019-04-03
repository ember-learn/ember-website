export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  initialVersion: "3.8.1",
  initialReleaseDate: "2019-04-02",
  lastRelease: "3.8.1",
  futureVersion: "3.8.2",
  channel: "lts",
  date: "2018-04-02",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
