---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 3.16.0 # Manually update, see https://libraries.io/npm/ember-source throughout
initialReleaseDate: 2020-01-20 # Manually update
lastRelease: 3.16.3 # Manually update
futureVersion: 3.16.4 # Manually update
channel: release
date: 2020-02-18 # Manually update, is today's date
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
 - ember.js
---
# Install Ember %s:
<br>
npm install --save-dev ember-source@~%s
