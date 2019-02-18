import { printf } from 'ember-website/helpers/printf';
import { module, test } from 'qunit';

module('Unit | Helper | printf', function() {
  test('it replaces single %s with value', function(assert) {
    let result = printf(["~%s~", 42]);
    assert.equal(result, "~42~");
  });

  test('it replaces multilpe %s with value', function(assert) {
    let result = printf(["~%s~%s~", 42]);
    assert.equal(result, "~42~42~");
  });
});
