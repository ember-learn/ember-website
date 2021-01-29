import Controller from '@ember/controller';
import { infoLinks } from 'ember-styleguide/constants/es-footer';
import headerLinks from 'ember-website/utils/header-links';
import replaceLinks from 'ember-website/utils/replace-links';

export default class ApplicationController extends Controller {
  links = replaceLinks(headerLinks);
  infoLinks = replaceLinks(infoLinks);
}
