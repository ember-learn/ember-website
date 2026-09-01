import replaceLinks from 'ember-website/utils/replace-links';
import { module, test } from 'qunit';

module('Unit | Utility | replace-links', function () {
  test('replaces URLs that begin with https://emberjs.com with internal route names', function (assert) {
    /*
      These are the links that we currently display in the header (as of October 7, 2020).
      Note that none of the URLs includes the word "builds" now.

      See https://github.com/ember-learn/ember-styleguide/blob/ab1d1fc32dd023f287c49d3fd700216ba368771a/addon/constants/links.js
    */
    const links = [
      {
        name: 'Docs',
        type: 'dropdown',
        items: [
          {
            href: 'https://guides.emberjs.com',
            name: 'Ember.js Guides',
            type: 'link',
          },
          {
            href: 'https://api.emberjs.com',
            name: 'API Reference',
            type: 'link',
          },
          {
            href: 'https://cli.emberjs.com',
            name: 'CLI Guides',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'https://emberjs.com/learn',
            name: 'Learn Ember',
            type: 'link',
          },
        ],
      },
      {
        name: 'Releases',
        type: 'dropdown',
        items: [
          {
            href: 'https://emberjs.com/releases',
            name: 'Overview',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/releases/lts',
            name: '→ LTS',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/releases/release',
            name: '→ Stable',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/releases/beta',
            name: '→ Beta',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/releases/canary',
            name: '→ Canary',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'https://emberjs.com/editions',
            name: 'Editions',
            type: 'link',
          },
          {
            href: 'https://deprecations.emberjs.com',
            name: 'Deprecations',
            type: 'link',
          },
          {
            href: 'https://github.com/emberjs/rfc-tracking/issues',
            name: 'RFC Tracking',
            type: 'link',
          },
        ],
      },
      {
        href: 'https://blog.emberjs.com',
        name: 'Blog',
        type: 'link',
      },
      {
        name: 'Community',
        type: 'dropdown',
        items: [
          {
            href: 'https://emberjs.com/community',
            name: 'The Ember Community',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/guidelines',
            name: 'Guidelines',
            type: 'link',
          },
          {
            href: 'https://help-wanted.emberjs.com/',
            name: 'Help Wanted',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'https://emberjs.com/community/meetups',
            name: 'Meetups',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'http://emberconf.com/',
            name: 'Ember Conf',
            type: 'link',
          },
        ],
      },
      {
        name: 'About',
        type: 'dropdown',
        items: [
          {
            href: 'https://emberjs.com/team',
            name: 'The Team',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'https://emberjs.com/logos',
            name: 'Branding',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/mascots',
            name: 'Mascots',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'https://emberjs.com/ember-users',
            name: 'Who Uses Ember',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/sponsors',
            name: 'Sponsors',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'https://emberjs.com/about/legal',
            name: 'Legal',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/security',
            name: 'Security',
            type: 'link',
          },
        ],
      },
    ];

    const output = replaceLinks(links);

    assert.deepEqual(
      output,
      [
        {
          name: 'Docs',
          type: 'dropdown',
          items: [
            {
              href: 'https://guides.emberjs.com',
              name: 'Ember.js Guides',
              type: 'link',
            },
            {
              href: 'https://api.emberjs.com',
              name: 'API Reference',
              type: 'link',
            },
            {
              href: 'https://cli.emberjs.com',
              name: 'CLI Guides',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: '/learn',
              name: 'Learn Ember',
              type: 'link',
            },
          ],
        },
        {
          name: 'Releases',
          type: 'dropdown',
          items: [
            {
              href: '/releases',
              name: 'Overview',
              type: 'link',
            },
            {
              href: '/releases/lts',
              name: '→ LTS',
              type: 'link',
            },
            {
              href: '/releases/release',
              name: '→ Stable',
              type: 'link',
            },
            {
              href: '/releases/beta',
              name: '→ Beta',
              type: 'link',
            },
            {
              href: '/releases/canary',
              name: '→ Canary',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: '/editions',
              name: 'Editions',
              type: 'link',
            },
            {
              href: 'https://deprecations.emberjs.com',
              name: 'Deprecations',
              type: 'link',
            },
            {
              href: 'https://github.com/emberjs/rfc-tracking/issues',
              name: 'RFC Tracking',
              type: 'link',
            },
          ],
        },
        {
          href: 'https://blog.emberjs.com',
          name: 'Blog',
          type: 'link',
        },
        {
          name: 'Community',
          type: 'dropdown',
          items: [
            {
              href: '/community',
              name: 'The Ember Community',
              type: 'link',
            },
            {
              href: '/guidelines',
              name: 'Guidelines',
              type: 'link',
            },
            {
              href: 'https://help-wanted.emberjs.com/',
              name: 'Help Wanted',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: '/community/meetups',
              name: 'Meetups',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: 'http://emberconf.com/',
              name: 'Ember Conf',
              type: 'link',
            },
          ],
        },
        {
          name: 'About',
          type: 'dropdown',
          items: [
            {
              href: '/teams',
              name: 'The Team',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: '/logos',
              name: 'Branding',
              type: 'link',
            },
            {
              href: '/mascots',
              name: 'Mascots',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: '/ember-users',
              name: 'Who Uses Ember',
              type: 'link',
            },
            {
              href: '/sponsors',
              name: 'Sponsors',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: '/about/legal',
              name: 'Legal',
              type: 'link',
            },
            {
              href: '/security',
              name: 'Security',
              type: 'link',
            },
          ],
        },
      ],
      'We get the correct output.'
    );
  });

  test('it works when we used to have the word "builds" in the URL', function (assert) {
    /*
      These are the links that we used to display in the header (on June 19, 2018).

      See https://github.com/ember-learn/ember-website/blob/d08e34a0acd403d16ee78c90ec0ec368762e3e9f/app/links.js
    */
    const links = [
      {
        name: 'Docs',
        type: 'dropdown',
        items: [
          {
            href: 'https://guides.emberjs.com',
            name: 'Guides',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/api',
            name: 'API Reference',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'https://emberjs.com/learn',
            name: 'Learn Ember',
            type: 'link',
          },
        ],
      },
      {
        name: 'Releases',
        type: 'dropdown',
        items: [
          {
            href: 'https://emberjs.com/builds',
            name: 'Channels',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/builds/release',
            name: '-- Stable',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/builds/beta',
            name: '-- Beta',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/builds/canary',
            name: '-- Canary',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'https://emberjs.com/deprecations',
            name: 'Deprecations',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/statusboard',
            name: 'Status Board',
            type: 'link',
          },
        ],
      },
      {
        href: 'https://emberjs.com/blog',
        name: 'Blog',
        type: 'link',
      },
      {
        name: 'Community',
        type: 'dropdown',
        items: [
          {
            href: 'https://emberjs.com/community',
            name: 'The Ember Community',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/guidelines',
            name: 'Guidelines',
            type: 'link',
          },
          {
            href: 'http://github.com/emberjs/',
            name: 'Contribute (Github)',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'https://emberjs.com/community/meetups',
            name: 'Meetups',
            type: 'link',
          },
          {
            href: 'http://jobs.emberjs.com/',
            name: 'Job Board',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'http://emberconf.com/',
            name: 'Ember Conf',
            type: 'link',
          },
        ],
      },
      {
        name: 'About',
        type: 'dropdown',
        items: [
          {
            href: 'https://emberjs.com/team',
            name: 'The Team',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'https://emberjs.com/logos',
            name: 'Logos',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/mascots',
            name: 'Mascots',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'https://emberjs.com/ember-users',
            name: 'Who Uses Ember',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/sponsors',
            name: 'Sponsors',
            type: 'link',
          },
          {
            type: 'divider',
          },
          {
            href: 'https://emberjs.com/legal',
            name: 'Legal',
            type: 'link',
          },
          {
            href: 'https://emberjs.com/security',
            name: 'Security',
            type: 'link',
          },
        ],
      },
    ];

    const output = replaceLinks(links);

    assert.deepEqual(
      output,
      [
        {
          name: 'Docs',
          type: 'dropdown',
          items: [
            {
              href: 'https://guides.emberjs.com',
              name: 'Guides',
              type: 'link',
            },
            {
              href: 'https://emberjs.com/api',
              name: 'API Reference',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: '/learn',
              name: 'Learn Ember',
              type: 'link',
            },
          ],
        },
        {
          name: 'Releases',
          type: 'dropdown',
          items: [
            {
              href: '/releases',
              name: 'Channels',
              type: 'link',
            },
            {
              href: '/releases/release',
              name: '-- Stable',
              type: 'link',
            },
            {
              href: '/releases/beta',
              name: '-- Beta',
              type: 'link',
            },
            {
              href: '/releases/canary',
              name: '-- Canary',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: 'https://emberjs.com/deprecations',
              name: 'Deprecations',
              type: 'link',
            },
            {
              href: '/statusboard',
              name: 'Status Board',
              type: 'link',
            },
          ],
        },
        {
          href: 'https://emberjs.com/blog',
          name: 'Blog',
          type: 'link',
        },
        {
          name: 'Community',
          type: 'dropdown',
          items: [
            {
              href: '/community',
              name: 'The Ember Community',
              type: 'link',
            },
            {
              href: '/guidelines',
              name: 'Guidelines',
              type: 'link',
            },
            {
              href: 'http://github.com/emberjs/',
              name: 'Contribute (Github)',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: '/community/meetups',
              name: 'Meetups',
              type: 'link',
            },
            {
              href: 'http://jobs.emberjs.com/',
              name: 'Job Board',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: 'http://emberconf.com/',
              name: 'Ember Conf',
              type: 'link',
            },
          ],
        },
        {
          name: 'About',
          type: 'dropdown',
          items: [
            {
              href: '/teams',
              name: 'The Team',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: '/logos',
              name: 'Logos',
              type: 'link',
            },
            {
              href: '/mascots',
              name: 'Mascots',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: '/ember-users',
              name: 'Who Uses Ember',
              type: 'link',
            },
            {
              href: '/sponsors',
              name: 'Sponsors',
              type: 'link',
            },
            {
              type: 'divider',
            },
            {
              href: '/legal',
              name: 'Legal',
              type: 'link',
            },
            {
              href: '/security',
              name: 'Security',
              type: 'link',
            },
          ],
        },
      ],
      'We get the correct output.'
    );
  });
});
