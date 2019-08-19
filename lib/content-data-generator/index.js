/* eslint-disable node/no-extraneous-require */
'use strict';

const BroccoliMergeTrees = require('broccoli-merge-trees');
const StaticSiteJson = require('broccoli-static-site-json');
const Plugin = require('broccoli-plugin');
const lts = require('lts');
const walkSync = require('walk-sync');
const _ = require('lodash');
const mkdirp = require('mkdirp');

const { join } = require('path');
const { readFileSync, existsSync } = require('fs');

class LTSGraph extends Plugin {
  constructor(inputNodes, options = {}) {
    super([inputNodes], options)

    this.options = options;
  }

  build() {
    this.inputPaths.forEach((dir) => {
      const jsonFiles = walkSync(dir)
          .filter(path => path.endsWith('.json'));

      jsonFiles.forEach((file) => {
        let data = JSON.parse(readFileSync(join(dir, file)));

        let dates = _.flatten(Object.values(data).map(Object.values)).map(date => new Date(date));

        let startDate = _.min(dates);
        startDate.setMonth(startDate.getMonth() - 1);

        let endDate = _.max([...dates, new Date()]);
        endDate = endDate.setMonth(endDate.getMonth() + 1);

        let outputFolder = this.options.outputDir ? join(this.outputPath, this.options.outputDir) : this.outputPath;

        if (!existsSync(outputFolder)) {
          mkdirp.sync(outputFolder);
        }

        lts.create({
          data,
          svg: join(outputFolder, file.replace(/\.json$/, '.svg')),
          projectName: 'Ember.js',
          excludeMaster: true,
          queryStart: startDate,
          queryEnd: endDate,
          margin: { top: 30, right: 35, bottom: 30, left: 120 },
        })
      })
    })
  }
}

const showcaseTree = new StaticSiteJson(`data/showcase`, {
  type: 'showcase',
  contentFolder: `data/showcases`,
  attributes: ['name', 'image', 'repository', 'demo', 'features'],
  contentTypes: ['html'],
  collections: [{
    output: 'all.json',
  }]
});

const usersTree = new StaticSiteJson(`data/user`, {
  type: 'user',
  contentFolder: `data/users`,
  attributes: ['name', 'image', 'url', 'inactive', 'added', 'featured'],
  contentTypes: ['content'],
  collections: [{
    output: 'all.json',
  }]
});

const teamTree = new StaticSiteJson(`data/team-member`, {
  type: 'team-member',
  contentFolder: `data/team-members`,
  attributes: ['name', 'first', 'last', 'github', 'twitter', 'image', 'teams', 'added'],
  contentTypes: ['content'],
  collections: [{
    output: 'all.json',
  }]
});

const meetupTree = new StaticSiteJson(`data/meetup`, {
  type: 'meetup',
  contentFolder: `data/meetups`,
  attributes: ['location', 'url', 'lat', 'lng', 'organizers', 'area'],
  contentTypes: ['content'],
  collections: [{
    output: 'all.json',
  }]
});

const tomsterTree = new StaticSiteJson('data/tomster', {
  type: 'tomster',
  contentFolder: `data/tomsters`,
  attributes: ['title', 'url', 'date', 'image', 'tags'],
  contentTypes: ['content'],
  collections: [{
    output: 'all.json',
  }]
})

const sponsorTree = new StaticSiteJson(`data/sponsor`, {
  type: 'sponsor',
  contentFolder: `data/sponsors`,
  attributes: ['url', 'image', 'start', 'end'],
  contentTypes: ['content'],
  collections: [{
    output: 'all.json',
  }]
});

const featureTree = new StaticSiteJson(`data/feature`, {
  type: 'feature',
  contentFolder: `data/features`,
  attributes: ['name', 'summary', 'status', 'statusText', 'availability', 'resources', 'champions'],
  contentTypes: ['content'],
  collections: [{
    output: 'all.json',
  }]
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
  collections: [{
    output: 'all.json',
  }]
});

const ltsTree = new LTSGraph('data/lts', {
  outputDir: 'images'
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
      ltsTree,
    ]);
  }
};
