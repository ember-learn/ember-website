---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 4.0.0 # Manually update, the prior version to the current beta. See https://libraries.io/npm/ember-source throughout
lastRelease: 4.1.0-beta.1 # Manually update
futureVersion: 4.1.0-beta.2 # Manually update
finalVersion: 4.1.0 # Manually update
channel: beta
cycleEstimatedFinishDate: 2022-01-24 12:00:00 # Manually update, the expected date of the finalVersion release
date: 2021-11-20 # Manually update, get date for `initialVersion`
nextDate: 2021-12-27 12:00:00 # Manually update, change next one to 6 weeks from this date...regardless of delays in the release
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
  - ember.js
---
# Install Ember %s:
<br>
npm install --save-dev ember-source@~%s
