import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupRenderingTest } from 'ember-qunit';
import tomsters from 'ember-website/mirage/data/tomsters';
import { module, test } from 'qunit';

module('Integration | Component | mascots/mascot-list', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    this.server.db.loadData({ tomsters });

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
      .exists({ count: 10 }, 'We see 10 mascots.');
  });
});
