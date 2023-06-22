const mapIdToAttributes = new Map([
  [
    'ember/lts',
    {
      baseFileName: 'ember',
      changelogPath: 'CHANGELOG.md',
      channel: 'lts',
      content:
        '# Install Ember %s:\n<br>\nnpm install --save-dev ember-source@~%s',
      date: new Date('2020-09-09'),
      debugFileName: '.debug.js',
      filter: ['/ember\\./', '/ember-template-compiler/'],
      id: 'ember/lts',
      ignoreFiles: ['ember.js'],
      lastRelease: '3.20.6',
      name: 'Ember',
      repo: 'emberjs/ember.js',
    },
  ],
  [
    'ember/release',
    {
      baseFileName: 'ember',
      changelogPath: 'CHANGELOG.md',
      channel: 'release',
      content:
        '# Install Ember %s:\n<br>\nnpm install --save-dev ember-source@~%s',
      date: new Date('2021-01-07'),
      debugFileName: '.debug.js',
      filter: ['/ember\\./', '/ember-template-compiler/'],
      id: 'ember/release',
      ignoreFiles: ['ember.js'],
      lastRelease: '3.24.0',
      name: 'Ember',
      repo: 'emberjs/ember.js',
    },
  ],
  [
    'ember/beta',
    {
      baseFileName: 'ember',
      changelogPath: 'CHANGELOG.md',
      channel: 'beta',
      content:
        '# Install Ember %s:\n<br>\nnpm install --save-dev ember-source@~%s',
      date: new Date('2020-12-28'),
      debugFileName: '.debug.js',
      filter: ['/ember\\./', '/ember-template-compiler/'],
      id: 'ember/beta',
      ignoreFiles: ['ember.js'],
      lastRelease: '3.25.0-beta.1',
      name: 'Ember',
      repo: 'emberjs/ember.js',
    },
  ],
  [
    'ember/canary',
    {
      baseFileName: 'ember',
      changelogPath: undefined,
      channel: 'canary',
      content: '',
      date: undefined,
      debugFileName: '.debug.js',
      filter: ['/ember\\./', '/ember-template-compiler/'],
      id: 'ember/canary',
      ignoreFiles: ['ember.js'],
      lastRelease: undefined,
      name: 'Ember',
      repo: 'emberjs/ember.js',
    },
  ],
  [
    'emberData/release',
    {
      baseFileName: 'ember-data',
      changelogPath: 'CHANGELOG.md',
      channel: 'release',
      content:
        '# Install Ember Data %s:\n<br>\nnpm install --save-dev ember-data@~%s',
      date: new Date('2021-01-07'),
      debugFileName: '.js',
      filter: ['/ember-data\\./'],
      id: 'emberData/release',
      ignoreFiles: undefined,
      lastRelease: '3.24.0',
      name: 'Ember Data',
      repo: 'emberjs/data',
    },
  ],
  [
    'emberData/beta',
    {
      baseFileName: 'ember-data',
      changelogPath: 'CHANGELOG.md',
      channel: 'beta',
      content:
        '# Install Ember Data %s:\n<br>\nnpm install --save-dev ember-data@~%s',
      date: new Date('2021-01-05'),
      debugFileName: '.js',
      filter: ['/ember-data\\./'],
      id: 'emberData/beta',
      ignoreFiles: ['ember.js'],
      lastRelease: '3.25.0-beta.0',
      name: 'Ember Data',
      repo: 'emberjs/data',
    },
  ],
  [
    'emberData/canary',
    {
      baseFileName: 'ember-data',
      changelogPath: undefined,
      channel: 'canary',
      content:
        '# Install the latest Ember Data canary:\n<br>\nnpm install --save-dev emberjs/data#master',
      date: undefined,
      debugFileName: '.js',
      filter: ['/ember-data\\./'],
      id: 'emberData/canary',
      ignoreFiles: undefined,
      lastRelease: undefined,
      name: 'Ember Data',
      repo: 'emberjs/data',
    },
  ],
]);

// Default export is for loading data into Mirage
export default Array.from(mapIdToAttributes.values());

// Named export is for unit testing the model
function getAttributesForId(id) {
  return mapIdToAttributes.get(id);
}

export { getAttributesForId };
