import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { percySnapshot } from 'ember-percy';

module('Acceptance | visual regression', function (hooks) {
  setupApplicationTest(hooks);

  test(`visiting visual regressions with Percy`, async function (assert) {
    assert.expect(0);

    // This is used to map the current **new** routes to what they used to be in the
    // old ruby app. This is to allow us to compare what the new app looks like
    // vs the old app.
    const pages = [
      { title: '/builds/', route: '/releases' },
      { title: '/builds/beta/', route: '/releases/beta' },
      { title: '/builds/canary/', route: '/releases/canary' },
      { title: '/builds/release/', route: '/releases/release' },
      { title: '/community/index.html', route: '/community/' },
      { title: '/community/meetups-getting-started.html', route: '/community/meetups-getting-started/' },
      { title: '/community/meetups.html', route: '/community/meetups/' },
      { title: '/ember-community-survey-2019.html', route: '/ember-community-survey-2019/' },
      { title: '/ember-users.html', route: '/ember-users/' },
      { title: '/guidelines.html', route: '/guidelines/' },
      { title: '/index.html', route: '/' },
      { title: '/learn.html', route: '/learn/' },
      { title: '/legal.html', route: '/about/legal/' },
      { title: '/logos.html', route: '/logos/' },
      { title: '/mascots.html', route: '/mascots/' },
      { title: '/meetup-assets.html', route: '/community/meetups/assets/' },
      { title: '/security.html', route: '/security/' },
      { title: '/sponsors.html', route: '/sponsors/' },
      { title: '/statusboard.html', route: '/statusboard' },
      { title: '/team.html', route: '/team/' },
      { title: '/tomster/index.html', route: '/mascots/' },
      { title: '/tomster/commission/index.html', route: '/mascots/commission/' },
      { title: '/tomster/faq.html', route: '/mascots/faq/' },
      { title: '/editions/', route: '/editions/' },
      { title: '/editions/octane', route: '/editions/octane' },
    ];

    await pages.reduce(async (prev, config) => {
      await prev;

      await visit(config.route);

      await percySnapshot(config.title);
    }, Promise.resolve());
  });
});
