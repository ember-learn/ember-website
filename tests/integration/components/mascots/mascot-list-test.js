import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | mascots/mascot-list', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function () {
    const store = this.owner.lookup('service:store');

    this.mascots = await store.findAll('tomster');
  });

  test('We can display mascots', async function (assert) {
    await render(hbs`
      <Mascots::MascotList
        @mascots={{this.mascots}}
      />
    `);

    assert
      .dom('[data-test-mascot]')
      .exists({ count: 76 }, 'We see 10 mascots.');
  });
});
