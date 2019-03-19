'use strict';

const BroccoliMergeTrees = require('broccoli-merge-trees');
const StaticSiteJson = require('broccoli-static-site-json');

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

const tomsterTree = new StaticSiteJson('data/tomster', {
  type: 'tomster',
  contentFolder: `data/tomsters`,
  attributes: ['title', 'url', 'date', 'image', 'tags'],
  contentTypes: ['content'],
  collections: [{
    src: `data/tomster`,
    output: `all.json`,
  }]
})

const sponsorTree = new StaticSiteJson(`data/sponsor`, {
  type: 'sponsor',
  contentFolder: `data/sponsors`,
  attributes: ['url', 'image', 'start', 'end'],
  contentTypes: ['content'],
  collections: [{
    src: `data/sponsor`,
    output: `all.json`,
  }]
});

const featureTree = new StaticSiteJson(`data/feature`, {
  type: 'feature',
  contentFolder: `data/features`,
  attributes: ['name', 'summary', 'status', 'statusText', 'availability', 'resources', 'champions'],
  contentTypes: ['content'],
  collections: [{
    src: `data/feature`,
    output: `all.json`,
  }]
});

module.exports = {
  name: 'content-docs-generator',

  isDevelopingAddon() {
    return true;
  },

  treeForPublic() {
    return new BroccoliMergeTrees([
      showcaseTree,
      usersTree,
      teamTree,
      meetupTree,
      tomsterTree,
      sponsorTree,
      featureTree,
    ]);
  }
};
