import Controller from '@ember/controller';
import styleguideLinks from 'ember-styleguide/constants/links';
import { infoLinks } from 'ember-styleguide/constants/es-footer';
import replaceLinks from 'ember-website/utils/replace-links';

export default Controller.extend({
  links: replaceLinks(styleguideLinks),
  infoLinks: replaceLinks(infoLinks),
});
