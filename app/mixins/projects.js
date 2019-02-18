import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';
import Project from '../lib/project';

export default Mixin.create({
  projects: computed('channel', 'model', 'model.{files,releaseSteps}', function() {
    let projects = Project.find(this.channel);

    projects.forEach((project) => {
      if (project.channel === 'beta') {
        project.isEmberBeta = project.projectName === 'Ember';

        [1,2,3,4,5].forEach((increment) => {
          let versionParts = project.lastRelease.split('.');
          let currentBetaNumber = parseInt(versionParts[versionParts.length - 1], 10);

          project[`beta${increment}Completed`] = increment <= currentBetaNumber;
          project[`isBeta${increment}`] = increment === currentBetaNumber;
        });

        let release = Project.find('release', project.projectName)[0];

        if (release) {
          project.lastStableVersion = release.initialVersion;
          project.lastStableDate = release.initialReleaseDate;
        }
      }

      project.description = this.description(project);

      if (project.channel === 'canary') {
        if(project.projectName === 'Ember') {
          project.installWithEmberCLI = this.installWithEmberCLI;
        }
        project.lastRelease = 'latest';
      } else if (project.changelog !== 'false') {
        project.lastReleaseChangelogUrl   = `https://github.com/${project.projectRepo}/blob/v${project.lastRelease}/${project.changelogPath}` ;
      }
    });

    return projects;
  }),

  description(project) {
    let lastRelease = project.lastRelease;
    let futureVersion = project.futureVersion;
    let value;

    if (this.channel === 'tagged') {
      value = '';
    } else if (lastRelease) {
      value = `The builds listed below are incremental improvements made since ${lastRelease} and may become ${futureVersion}.`;
    } else if (futureVersion) {
      value = `The builds listed below are not based on a tagged release. Upon the next release cycle they will become ${futureVersion}.`;
    } else {
      value = 'The builds listed below are based on the most recent development.';
    }

    return new htmlSafe(value);
  }
});
