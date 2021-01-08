import { visit, settled } from '@ember/test-helpers';
import { module, skip, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | visual regression', function (hooks) {
  setupApplicationTest(hooks);

  // list new routes here so that they go through Percy and a11y tests
  const pages = [
    { title: '/ember-community-survey-2019.html', route: '/ember-community-survey-2019/' },
    { title: '/ember-users.html', route: '/ember-users/' },
    { title: '/guidelines.html', route: '/guidelines/' },
    { title: '/index.html', route: '/'},
    { title: '/learn.html', route: '/learn/' },
    { title: '/legal.html', route: '/about/legal/' },
    { title: '/logos.html', route: '/logos/' },
    { title: '/security.html', route: '/security/' },
    { title: '/sponsors.html', route: '/sponsors/' },
    { title: '/teams.html', route: '/teams/' },
    { title: '/editions/', route: '/editions/' },
    { title: '/editions/octane', route: '/editions/octane' },
  ];

  skip(`visiting visual regressions with Percy`, async function (assert) {
    assert.expect(0);

    await pages.reduce(async (prev, config) => {
      await prev;

      await visit(config.route);

      await settled();

      await percySnapshot(config.title);
    }, Promise.resolve());
  });

  pages.forEach(function(page) {
    /*
      TODO:

      Currently, we don't run accessibility audits on any page.
      Address accessibility issues and make sure that we run audits.
    */
    if (page.a11y) {
      test(`testing a11y audit for ${page.route}`, async function (assert) {
        await visit(page.route)
        await a11yAudit();
        assert.ok(true, 'no a11y errors found!');
      });
    }
  });
});
