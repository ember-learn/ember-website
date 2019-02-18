import { tagUrlPath } from 'ember-website/helpers/tag-url-path';
import { module, test } from 'qunit';

module('Unit | Helper | tag url path', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = tagUrlPath(["http://example.org/tags/v1.10.0"]);
    assert.equal(result, "tags/v1.10.0");
  });
});
