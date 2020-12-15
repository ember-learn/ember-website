---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 3.23.0 # Manually update, see https://libraries.io/npm/ember-source throughout
initialReleaseDate: 2020-11-16 # Manually update
lastRelease: 3.23.1 # Manually update
futureVersion: 3.23.2 # Manually update
channel: release
date: 2020-12-14 # Manually update, is today's date
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
 - ember.js
---
# Install Ember %s:
<br>
npm install --save-dev ember-source@~%s
