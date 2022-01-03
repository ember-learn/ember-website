---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 4.1.0 # Manually update, see https://libraries.io/npm/ember-source throughout
initialReleaseDate: 2021-12-28 # Manually update
lastRelease: 4.1.0 # Manually update
futureVersion: 4.2.0 # Manually update
channel: release
date: 2022-01-03 # Manually update, is today's date
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
 - ember.js
---
# Install Ember %s:
<br>
npm install --save-dev ember-source@~%s
