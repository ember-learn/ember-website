const legacyExternalLinks = new Set([
  'https://emberjs.com/api',
  'https://emberjs.com/blog',
  'https://emberjs.com/deprecations',
]);

function isExternalLink(url: string): boolean {
  const isExternalLink = !url.startsWith('https://emberjs.com');
  const isLegacyExternalLink = legacyExternalLinks.has(url);

  return isExternalLink || isLegacyExternalLink;
}

function replaceInternalLinks(url: string): string {
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

type SimpleDivider = {
  type: 'divider';
};

type SimpleLink = {
  href: string;
  name: string;
  type: 'link';
};

type SimpleDropdown = {
  items: Link[];
  name: string;
  type: 'dropdown';
};

export type Link = SimpleDivider | SimpleDropdown | SimpleLink;

export function replaceLinks(links: Link[]): Link[] {
  return links.map((group) => {
    if (group.type === 'dropdown') {
      return {
        ...group,
        items: replaceLinks(group.items),
      };
    }

    if (group.type === 'link') {
      return {
        ...group,
        href: replaceInternalLinks(group.href),
      };
    }

    return group;
  });
}
