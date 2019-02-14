import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { percySnapshot } from 'ember-percy';

module('Acceptance | visual regression', function(hooks) {
  setupApplicationTest(hooks);

  test(`visiting visual regressions with Percy`, async function(assert) {
    assert.expect(0);

    // this is used to map the current **new** routes to what they used to be in the
    // old ruby app. This is to allow us to compare what the new app looks like
    // vs the old app. It is unlikely that you should need to change the title side
    // of these objects
    const pages = [
      { route: '/team/', title: '/team.html' },
      { route: '/legal/', title: '/legal.html' },
      { route: '/', title: '/index.html' },
      { route: '/mascots/', title: '/mascots.html' },
      { route: '/learn/', title: '/learn.html' },
      { route: '/guidelines/', title: '/guidelines.html' },
      { route: '/logos/', title: '/logos.html' },
      { route: '/sponsors/', title: '/sponsors.html' },
      { route: '/ember-users/', title: '/ember-users.html' },
      { route: '/community/meetups/', title: '/community/meetups.html' },
      { route: '/community/', title: '/community/index.html' },
      {
        route: '/community/meetups/assets',
        title: '/meetup-assets.html'
      },
      {
        route: '/community/meetups-getting-started/',
        title: '/community/meetups-getting-started.html'
      },
      { route: '/mascots/faq/', title: '/tomster/faq.html' },
      { route: '/mascots/commission/', title: '/tomster/commission/index.html' }
    ];

    await pages.reduce(async (prev, config) => {
      await prev;

      await visit(config.route);

      await percySnapshot(config.title);
    }, Promise.resolve());
  });
});
