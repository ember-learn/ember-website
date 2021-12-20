---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 4.0.0 # Manually update, see https://libraries.io/npm/ember-source throughout
initialReleaseDate: 2021-11-15 # Manually update
lastRelease: 4.0.1 # Manually update
futureVersion: 4.0.2 # Manually update
channel: release
date: 2021-12-20 # Manually update, is today's date
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
 - ember.js
---
# Install Ember %s:
<br>
npm install --save-dev ember-source@~%s
