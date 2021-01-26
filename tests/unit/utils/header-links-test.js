import headerLinks from 'ember-website/utils/header-links';
import { module, test } from 'qunit';

module('Unit | Utility | header-links', function () {
  test('We can import the object', function (assert) {
    assert.strictEqual(headerLinks.length, 5, 'We show 5 parent items.');
  });
});
