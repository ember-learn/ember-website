import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { percySnapshot } from 'ember-percy';

module('Acceptance | visual regression', function(hooks) {
  setupApplicationTest(hooks);

  test(`visiting visual regressions with Percy`, async function(assert) {
    assert.expect(0);

    const pages = [
      { route: '/team/', title: '/team.html' },
      { route: '/legal/', title: '/legal.html' },
      { route: '/', title: '/index.html' },
      { route: '/mascots/', title: '/mascots.html' },
      { route: '/meetup-assets/', title: '/meetup-assets.html' },
      { route: '/learn/', title: '/learn.html' },
      { route: '/guidelines/', title: '/guidelines.html' },
      { route: '/logos/', title: '/logos.html' },
      { route: '/sponsors/', title: '/sponsors.html' },
      { route: '/ember-users/', title: '/ember-users.html' },
      { route: '/community/meetups/', title: '/community/meetups.html' },
      { route: '/community/', title: '/community/index.html' },
      { route: '/community/meetups-getting-started/', title: '/community/meetups-getting-started.html' },
      { route: '/mascots/faq/', title: '/mascots/faq.html' },
      { route: '/mascots/commission/', title: '/mascots/commission/index.html' },
    ]

    await pages.reduce(async (prev, config) => {
      await prev;

      await visit(config.route);

      await percySnapshot(config.title);

    }, Promise.resolve());
  });
});
