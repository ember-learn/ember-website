import { findAll, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | mascots/mascot-filters', function (hooks) {
  setupRenderingTest(hooks);

  test('We show 9 filters', async function (assert) {
    this.owner.setupRouter();

    /* BEGIN: Set up custom assertions */
    assert.areLinksCorrect = (expectedOutput = []) => {
      const links = findAll('[data-test-link]');

      assert.strictEqual(
        links.length,
        expectedOutput.length,
        `The user sees ${expectedOutput.length} links.`
      );

      if (links.length !== expectedOutput.length) {
        return;
      }

      links.forEach((link, index) => {
        assert
          .dom(link)
          .hasAttribute(
            'href',
            expectedOutput[index].href,
            `The URL for the link is correct. (${index + 1})`
          )
          .hasText(
            expectedOutput[index].label,
            `The label for the link is correct. (${index + 1})`
          );
      });
    };
    /* END: Set up custom assertions */

    /* BEGIN: Test */
    await render(hbs`
      <Mascots::MascotFilters />
    `);

    assert.areLinksCorrect([
      {
        href: '/mascots',
        label: 'All',
      },
      {
        href: '/mascots?filter=tomster',
        label: 'Tomsters',
      },
      {
        href: '/mascots?filter=zoey',
        label: 'Zoeys',
      },
      {
        href: '/mascots?filter=meetup',
        label: 'Meetups',
      },
      {
        href: '/mascots?filter=conference',
        label: 'Conferences',
      },
      {
        href: '/mascots?filter=corp',
        label: 'Corporate',
      },
      {
        href: '/mascots?filter=other',
        label: 'Others',
      },
      {
        href: '/mascots',
        label: 'Small',
      },
      {
        href: '/mascots?display=large',
        label: 'Large',
      },
    ]);
    /* END: Test */

    /* BEGIN: Clean up custom assertions */
    delete assert.areLinksCorrect;
    /* END: Clean up custom assertions */
  });
});
