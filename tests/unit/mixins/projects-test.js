import EmberObject from '@ember/object';
import ProjectsMixin from 'ember-website/mixins/projects';
import { module, test } from 'qunit';

module('Unit | Mixin | projects', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let ProjectsObject = EmberObject.extend(ProjectsMixin);
    let subject = ProjectsObject.create();
    assert.ok(subject);
  });
});
