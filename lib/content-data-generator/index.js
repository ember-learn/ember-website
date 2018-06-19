'use strict';

const BroccoliMergeTrees = require('broccoli-merge-trees');
const writeFile = require('broccoli-file-creator');
const yaml = require('js-yaml');

const { readFileSync } = require('fs');

const dataFiles = [
  'meetups',
  'search',
  'showcase',
  'sponsors',
  'team',
  'tomsters',
  'users',
];

const dataFileOutputs = dataFiles.map(file => writeFile(`/data/${file}.json`, JSON.stringify(yaml.safeLoad(readFileSync(`data/${file}.yml`, 'utf8')))));

module.exports = {
  name: 'content-docs-generator',

  isDevelopingAddon() {
    return true;
  },

  treeForPublic() {
    return new BroccoliMergeTrees([...dataFileOutputs]);
  }
};
