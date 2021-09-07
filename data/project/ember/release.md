---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 3.28.0 # Manually update, see https://libraries.io/npm/ember-source throughout
initialReleaseDate: 2021-08-10 # Manually update
lastRelease: 3.28.1 # Manually update
futureVersion: 3.28.2 # Manually update
channel: release
date: 2021-09-07 # Manually update, is today's date
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
 - ember.js
---
# Install Ember %s:
<br>
npm install --save-dev ember-source@~%s
