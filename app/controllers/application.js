import Controller from '@ember/controller';
import { infoLinks } from 'ember-styleguide/constants/es-footer';
import headerLinks from 'ember-styleguide/constants/links';
import replaceLinks from 'ember-website/utils/replace-links';

export default class ApplicationController extends Controller {
  queryParams = ['uwu'];
  links = replaceLinks(headerLinks);
  infoLinks = replaceLinks(infoLinks);
}
