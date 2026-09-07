import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import MascotsMascotList from 'ember-website/components/mascots/mascot-list';
import type Tomster from 'ember-website/models/tomster';
import { module, test } from 'qunit';

module('Integration | Component | mascots/mascot-list', function (hooks) {
  setupRenderingTest(hooks);

  test('We can display mascots', async function (assert) {
    const store = this.owner.lookup('service:store');

    const mascots = await store.findAll<Tomster>('tomster');

    await render(
      <template><MascotsMascotList @mascots={{mascots}} /></template>,
    );

    assert
      .dom('[data-test-mascot]')
      .exists({ count: 78 }, 'We see 10 mascots.');
  });
});
