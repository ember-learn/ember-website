const legacyExternalLinks = new Set([
  'https://emberjs.com/api',
  'https://emberjs.com/blog',
  'https://emberjs.com/deprecations',
]);

function isExternalLink(url) {
  const isExternalLink = !url.startsWith('https://emberjs.com');
  const isLegacyExternalLink = legacyExternalLinks.has(url);

  return isExternalLink || isLegacyExternalLink;
}

function replaceInternalLinks(url) {
  if (isExternalLink(url)) {
    return url;
  }

  // Map internal links to the correct route name
  return url
    .replace(/^https:\/\/emberjs.com\//, '/')
    .replace(/^\/team$/, '/teams')
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
        href: replaceInternalLinks(group.href),
      };
    }

    return group;
  });
}
