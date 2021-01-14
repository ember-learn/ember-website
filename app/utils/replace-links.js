const legacyExternalLinks = new Set([
  'https://emberjs.com/api',
  'https://emberjs.com/blog',
  'https://emberjs.com/deprecations',
]);

function replaceUrlPrefix(url) {
  if (legacyExternalLinks.has(url)) {
    return url;
  }

  return url
    .replace(/^https:\/\/emberjs.com\//, '/')
    .replace(/^\/builds(\/\w+)$/, '/releases$1')
    .replace(/\/builds$/, '/releases');
}

export default function replaceLinks(links) {
  return links.map((group) => {
    if (group.items) {
      return {
        ...group,
        items: replaceLinks(group.items),
      };
    }

    if (group.href) {
      return {
        ...group,
        href: replaceUrlPrefix(group.href),
      };
    }

    return group;
  });
}
