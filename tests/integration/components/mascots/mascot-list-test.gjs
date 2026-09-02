import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import MascotsMascotList from 'ember-website/components/mascots/mascot-list';
import { module, test } from 'qunit';

module('Integration | Component | mascots/mascot-list', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function () {
    const store = this.owner.lookup('service:store');

    this.mascots = await store.findAll('tomster');
  });

  test('We can display mascots', async function (assert) {
    const { mascots } = this;

    await render(
      <template><MascotsMascotList @mascots={{mascots}} /></template>,
    );

    assert
      .dom('[data-test-mascot]')
      .exists({ count: 78 }, 'We see 10 mascots.');
  });
});
