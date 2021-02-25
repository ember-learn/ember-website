---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 3.25.0 # Manually update, see https://libraries.io/npm/ember-source throughout
initialReleaseDate: 2021-02-08 # Manually update
lastRelease: 3.25.1 # Manually update
futureVersion: 3.25.2 # Manually update
channel: release
date: 2021-02-25 # Manually update, is today's date
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
 - ember.js
---
# Install Ember %s:
<br>
npm install --save-dev ember-source@~%s
