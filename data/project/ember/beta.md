---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 3.26.0 # Manually update, see https://libraries.io/npm/ember-source throughout
lastRelease: 3.27.0-beta.3 # Manually update
futureVersion: 3.27.0-beta.4 # Manually update
finalVersion: 3.27.0 # Manually update
channel: beta
cycleEstimatedFinishDate: 2021-05-03 12:00:00 # Manually update, change next one to 6 weeks from this date...regardless of delays in the release
date: 2021-03-22 # Manually update, get date for `initialVersion`
nextDate: 2021-05-03 12:00:00 # Manually update, change next one to 6 weeks from this date...regardless of delays in the release
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
  - ember.js
---
# Install Ember %s:
<br>
npm install --save-dev ember-source@~%s
