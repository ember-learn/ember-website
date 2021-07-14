---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 3.27.0 # Manually update, see https://libraries.io/npm/ember-source throughout
initialReleaseDate: 2021-05-03 # Manually update
lastRelease: 3.27.5 # Manually update
futureVersion: 3.27.6 # Manually update
channel: release
date: 2021-07-13 # Manually update, is today's date
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
 - ember.js
---
# Install Ember %s:
<br>
npm install --save-dev ember-source@~%s
