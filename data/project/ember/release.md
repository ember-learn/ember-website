---
name: Ember
baseFileName: ember
filter:
  - /ember\./
  - /ember-template-compiler/
repo: emberjs/ember.js
initialVersion: 4.11.0 # Manually update, see https://libraries.io/npm/ember-source throughout
initialReleaseDate: 2023-02-20 # Manually update
lastRelease: 4.11.0 # Manually update
futureVersion: 4.10.1 # Manually update
channel: release
date: 2023-03-05 # Manually update, is today's date
changelogPath: CHANGELOG.md
debugFileName: .debug.js
ignoreFiles:
  - ember.js
---

# Install Ember %s:

<br>
npm install --save-dev ember-source@~%s
