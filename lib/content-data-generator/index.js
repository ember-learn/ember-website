'use strict';

const BroccoliMergeTrees = require('broccoli-merge-trees');
const StaticSiteJson = require('broccoli-static-site-json');
const writeFile = require('broccoli-file-creator');
const yaml = require('js-yaml');

const { readFileSync } = require('fs');

const dataFiles = [
  'meetups',
  'sponsors',
  'team',
  'tomsters',
  'users',
];

const showcaseTree = new StaticSiteJson(`data/showcase`, {
  type: 'showcase',
  contentFolder: `data/showcases`,
  attributes: ['name', 'image', 'repository', 'demo', 'features'],
  contentTypes: ['html'],
  collections: [{
    src: `data/showcase`,
    output: `all.json`,
  }]
});

const usersTree = new StaticSiteJson(`data/user`, {
  type: 'user',
  contentFolder: `data/users`,
  attributes: ['name', 'image', 'url', 'inactive', 'added', 'featured'],
  contentTypes: ['content'],
  collections: [{
    src: `data/user`,
    output: `all.json`,
  }]
});

const dataFileOutputs = dataFiles.map(file => writeFile(`/data/${file}.json`, JSON.stringify(yaml.safeLoad(readFileSync(`data/${file}.yml`, 'utf8')))));

module.exports = {
  name: 'content-docs-generator',

  isDevelopingAddon() {
    return true;
  },

  treeForPublic() {
    return new BroccoliMergeTrees([...dataFileOutputs, showcaseTree, usersTree]);
  }
};
