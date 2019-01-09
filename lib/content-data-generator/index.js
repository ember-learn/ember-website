'use strict';

const BroccoliMergeTrees = require('broccoli-merge-trees');
const StaticSiteJson = require('broccoli-static-site-json');
const writeFile = require('broccoli-file-creator');
const yaml = require('js-yaml');

const { readFileSync } = require('fs');

const dataFiles = [
  'sponsors', 
  'tomsters'
];

const projectsTree = new StaticSiteJson(`data/project`, {
  type: 'project',
  contentFolder: `data/projects`,
  attributes: ['title', 'description', 'link', 'thumbnail', 'date'],
  contentTypes: ['html'],
  collections: [{
      src: `data/project`,
      output: `all.json`
    }]
});

const showcaseTree = new StaticSiteJson(`data/showcase`, {
  type: 'showcase',
  contentFolder: `data/showcases`,
  attributes: ['name', 'image', 'repository', 'demo', 'features'],
  contentTypes: ['html'],
  collections: [{
      src: `data/showcase`,
      output: `all.json`
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

const teamTree = new StaticSiteJson(`data/team-member`, {
  type: 'team-member',
  contentFolder: `data/team-members`,
  attributes: ['name', 'first', 'last', 'github', 'twitter', 'image', 'teams', 'added'],
  contentTypes: ['content'],
  collections: [{
    src: `data/team-member`,
    output: `all.json`,
  }]
});

const meetupTree = new StaticSiteJson(`data/meetup`, {
  type: 'meetup',
  contentFolder: `data/meetups`,
  attributes: ['location', 'url', 'lat', 'lng', 'organizers', 'area'],
  contentTypes: ['content'],
  collections: [{
    src: `data/meetup`,
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
    return new BroccoliMergeTrees([
      ...dataFileOutputs,
      projectsTree,
      showcaseTree,
      usersTree,
      teamTree,
      meetupTree
    ]);
  }
};
