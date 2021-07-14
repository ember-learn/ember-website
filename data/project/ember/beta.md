---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 3.27.0 # Manually update, the prior version to the current beta. See https://libraries.io/npm/ember-source throughout
lastRelease: 3.28.0-beta.6 # Manually update
futureVersion: 3.28.0-beta.7 # Manually update
finalVersion: 3.28.0 # Manually update
channel: beta
cycleEstimatedFinishDate: 2021-08-09 12:00:00 # Manually update, the expected date of the finalVersion release
date: 2021-05-03 # Manually update, get date for `initialVersion`
nextDate: 2021-07-19 12:00:00 # Manually update, change next one to 6 weeks from this date...regardless of delays in the release
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
  - ember.js
---
# Install Ember %s:
<br>
npm install --save-dev ember-source@~%s
