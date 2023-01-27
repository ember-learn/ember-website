---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 4.10.0 # Manually update, see https://libraries.io/npm/ember-source throughout
initialReleaseDate: 2022-01-23 # Manually update
lastRelease: 4.10.0 # Manually update
futureVersion: 4.10.0 # Manually update
channel: release
date: 2022-01-27 # Manually update, is today's date
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
 - ember.js
---
# Install Ember %s:
<br>
npm install --save-dev ember-source@~%s
