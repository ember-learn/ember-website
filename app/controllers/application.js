import Controller from '@ember/controller';
import styleguideLinks from 'ember-styleguide/constants/links';

function replaceUrlPrefix(url) {
  // ignore external apps
  if(
    url.endsWith('/blog')
    || url.endsWith('/deprecations')
    || url.endsWith('/api')
    || url.endsWith('/releases')
    || url.match(/\/releases\/.*$/)
    || url.endsWith('/statusboard')
  ) {
    return url;
  }

  return url.replace(/^https:\/\/emberjs.com\//, '/');
}

function replaceLinks(links) {
  return links.map((group) => {
    if (group.items) {
      return {
        ...group,
        items: replaceLinks(group.items)
      };
    }

    if(group.href) {
      return {
        ...group,
        href: replaceUrlPrefix(group.href),
      }
    }

    return group
  })
}

export default Controller.extend({
  links: replaceLinks(styleguideLinks),
});
