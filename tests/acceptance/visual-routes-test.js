import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { percySnapshot } from 'ember-percy';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | visual regression', function (hooks) {
  setupApplicationTest(hooks);

  // list new routes here so that they go through Percy and a11y tests
  const pages = [
    { title: '/builds/', route: '/releases'/*, a11y: true */ },  /* set the a11y property of a page object to true to run the audit for this particular route */
    { title: '/builds/beta/', route: '/releases/beta' },
    { title: '/builds/canary/', route: '/releases/canary' },
    { title: '/builds/release/', route: '/releases/release' },
    { title: '/builds/lts/', route: '/releases/lts' },
    { title: '/community/index.html', route: '/community/' },
    { title: '/community/meetups-getting-started.html', route: '/community/meetups-getting-started/' },
    { title: '/community/meetups.html', route: '/community/meetups/' },
    { title: '/ember-community-survey-2019.html', route: '/ember-community-survey-2019/' },
    { title: '/ember-users.html', route: '/ember-users/' },
    { title: '/guidelines.html', route: '/guidelines/' },
    { title: '/index.html', route: '/'},
    { title: '/learn.html', route: '/learn/' },
    { title: '/legal.html', route: '/about/legal/' },
    { title: '/logos.html', route: '/logos/' },
    { title: '/mascots.html', route: '/mascots/' },
    { title: '/meetup-assets.html', route: '/community/meetups/assets/' },
    { title: '/security.html', route: '/security/' },
    { title: '/sponsors.html', route: '/sponsors/' },
    { title: '/teams.html', route: '/teams/' },
    { title: '/tomster/index.html', route: '/mascots/' },
    { title: '/tomster/commission/index.html', route: '/mascots/commission/' },
    { title: '/tomster/faq.html', route: '/mascots/faq/' },
    { title: '/editions/', route: '/editions/' },
    { title: '/editions/octane', route: '/editions/octane' },
  ];

  test(`visiting visual regressions with Percy`, async function (assert) {
    assert.expect(0);

    await pages.reduce(async (prev, config) => {
      await prev;

      await visit(config.route);

      await percySnapshot(config.title);
    }, Promise.resolve());
  });

  pages.forEach(function(page) {
    if (page.a11y) {
      test(`testing a11y audit for ${page.route}`, async function (assert) {
        await visit(page.route)
        await a11yAudit();
        assert.ok(true, 'no a11y errors found!');
      });
    }
  });
});
