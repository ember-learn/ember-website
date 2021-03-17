import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupRenderingTest } from 'ember-qunit';
import tomsters from 'ember-website/mirage/data/tomsters';
import { module, test } from 'qunit';

module('Integration | Component | mascots/mascot-list/item', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    this.server.db.loadData({ tomsters });

    const store = this.owner.lookup('service:store');

    this.mascots = await store.findAll('tomster');
  });

  test('We can display a mascot (with url)', async function (assert) {
    this.mascot = this.mascots.find(({ id }) => id === 'austin-zoey');

    await render(hbs`
      <Mascots::MascotList::Item
        @mascot={{this.mascot}}
      />
    `);

    assert
      .dom('[data-test-field="Image"]')
      .hasAttribute(
        'src',
        /\/images\/tomsters\/austin-zoey.*\.png/,
        'We see the correct src for the image.'
      );

    assert
      .dom('[data-test-field="Name"]')
      .hasAttribute(
        'href',
        'https://www.meetup.com/Ember-ATX/',
        'We see the correct href for the name.'
      )
      .hasTagName('a', 'We see the correct tag for the name.')
      .hasText('Austin Zoey', 'We see the correct name.');

    assert
      .dom('[data-test-field="Date"]')
      .hasText('July 8, 2016', 'We see the correct date.');
  });

  test('We can display a mascot (without url)', async function (assert) {
    this.mascot = this.mascots.find(({ id }) => id === 'ember-a11y');

    await render(hbs`
      <Mascots::MascotList::Item
        @mascot={{this.mascot}}
      />
    `);

    assert
      .dom('[data-test-field="Image"]')
      .hasAttribute(
        'src',
        /\/images\/tomsters\/a11y-zoey.*\.png/,
        'We see the correct src for the image.'
      );

    assert
      .dom('[data-test-field="Name"]')
      .doesNotHaveAttribute('href', 'We should not see the href attribute.')
      .hasTagName('span', 'We see the correct tag for the name.')
      .hasText('Ember A11y', 'We see the correct name.');

    assert
      .dom('[data-test-field="Date"]')
      .hasText('March 10, 2018', 'We see the correct date.');
  });
});
