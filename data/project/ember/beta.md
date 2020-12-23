---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 3.23.0 # Manually update, see https://libraries.io/npm/ember-source throughout
lastRelease: 3.24.0-beta.3 # Manually update
futureVersion: 3.24.0-beta.4 # Manually update
finalVersion: 3.24.0 # Manually update
channel: beta
cycleEstimatedFinishDate: 2020-12-28 12:00:00 # Manually update, change next one to 6 weeks from this date...regardless of delays in the release
date: 2020-11-17 # Manually update, get date for `initialVersion`
nextDate: 2020-12-28 12:00:00 # Manually update, change next one to 6 weeks from this date...regardless of delays in the release
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
  - ember.js
---
# Install Ember %s:
<br>
npm install --save-dev ember-source@~%s
