import Controller from '@ember/controller';
import { infoLinks } from 'ember-styleguide/constants/es-footer';
import styleguideLinks from 'ember-styleguide/constants/links';
import replaceLinks from 'ember-website/utils/replace-links';

export default Controller.extend({
  links: replaceLinks(styleguideLinks),
  infoLinks: replaceLinks(infoLinks),
});
