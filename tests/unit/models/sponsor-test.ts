import type { Registry as Services } from '@ember/service';
import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { setupTest } from 'ember-qunit';
import type Sponsor from 'ember-website/models/sponsor';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  store: Services['store'];
}

module('Unit | Model | sponsor', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.store = this.owner.lookup('service:store');
  });

  test('The model can describe a current sponsor', function (this: TestContext, assert) {
    const model = this.store.createRecord<Sponsor>('sponsor', {
      name: 'Super Corp.',
      start: new Date('2011-01-01'),
    });

    assert.strictEqual(
      model.term,
      '2011 - present',
      'We get the correct value for term.',
    );
  });

  test('The model can describe a past sponsor that spanned multiple years', function (this: TestContext, assert) {
    const model = this.store.createRecord<Sponsor>('sponsor', {
      name: 'Super Corp.',
      start: new Date('2015-01-01'),
      end: new Date('2018-01-01'),
    });

    assert.strictEqual(
      model.term,
      '2015 - 2018',
      'We get the correct value for term.',
    );
  });

  test('The model can describe a past sponsor that only sponsored one year', function (this: TestContext, assert) {
    const model = this.store.createRecord<Sponsor>('sponsor', {
      name: 'Super Corp.',
      start: new Date('2018-01-01'),
      end: new Date('2018-08-01'),
    });

    assert.strictEqual(
      model.term,
      '2018',
      'We get the correct value for term.',
    );
  });
});
