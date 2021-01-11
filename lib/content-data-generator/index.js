/* eslint-disable node/no-extraneous-require */
'use strict';

const BroccoliMergeTrees = require('broccoli-merge-trees');
const StaticSiteJson = require('broccoli-static-site-json');

const showcaseTree = new StaticSiteJson(`data/showcase`, {
  type: 'showcase',
  contentFolder: `data/showcases`,
  attributes: ['name', 'image', 'repository', 'demo', 'features'],
  contentTypes: ['html'],
  collate: true,
});

const usersTree = new StaticSiteJson(`data/user`, {
  type: 'user',
  contentFolder: `data/users`,
  attributes: ['name', 'image', 'url', 'inactive', 'added', 'featured'],
  contentTypes: ['content'],
  collate: true,
});

const teamTree = new StaticSiteJson(`data/team-member`, {
  type: 'team-member',
  contentFolder: `data/team-members`,
  attributes: [
    'name',
    'first',
    'last',
    'github',
    'twitter',
    'image',
    'teams',
    'added',
  ],
  contentTypes: ['content'],
  collate: true,
});

const meetupTree = new StaticSiteJson(`data/meetup`, {
  type: 'meetup',
  contentFolder: `data/meetups`,
  attributes: ['location', 'url', 'lat', 'lng', 'organizers', 'area'],
  contentTypes: ['content'],
  collate: true,
});

const tomsterTree = new StaticSiteJson('data/tomster', {
  type: 'tomster',
  contentFolder: `data/tomsters`,
  attributes: ['title', 'url', 'date', 'image', 'tags'],
  contentTypes: ['content'],
  collate: true,
});

const sponsorTree = new StaticSiteJson(`data/sponsor`, {
  type: 'sponsor',
  contentFolder: `data/sponsors`,
  attributes: ['name', 'url', 'image', 'start', 'end'],
  contentTypes: ['content'],
  collate: true,
});

const featureTree = new StaticSiteJson(`data/feature`, {
  type: 'feature',
  contentFolder: `data/features`,
  attributes: [
    'name',
    'summary',
    'status',
    'statusText',
    'availability',
    'resources',
    'champions',
  ],
  contentTypes: ['content'],
  collate: true,
});

const projectTree = new StaticSiteJson(`data/project`, {
  type: 'project',
  contentFolder: `data/projects`,
  attributes: [
    'name',
    'baseFileName',
    'filter',
    'repo',
    'initialVersion',
    'lastRelease',
    'futureVersion',
    'finalVersion',
    'channel',
    'cycleEstimatedFinishDate',
    'date',
    'nextDate',
    'changelogPath',
    'debugFileName',
    'ignoreFiles',
  ],
  contentTypes: ['content'],
  collate: true,
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
      projectTree,
    ]);
  },
};
