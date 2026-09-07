import type TeamMember from 'ember-website/models/team-member';
import { setupTest } from 'ember-website/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | team-member', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord<TeamMember>('team-member', {});

    assert.ok(model);
  });
});
