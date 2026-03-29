import Controller from '@ember/controller';

// TODO: Restore once ember-styleguide v2 conversion targets ember-source 5.12
// The v2 addon dist uses @ember/template-compiler which requires ember-source 6.x+
// import { infoLinks } from 'ember-styleguide/constants/es-footer';
// import headerLinks from 'ember-styleguide/constants/links';
// import replaceLinks from 'ember-website/utils/replace-links';

export default class ApplicationController extends Controller {
  queryParams = ['uwu'];
  links = [];
  infoLinks = [];
}
