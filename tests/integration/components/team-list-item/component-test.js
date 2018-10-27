import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { set } from '@ember/object';

module('Integration | Component | team-list-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with name, twitter, github and image', async function(assert) {
    set(this, 'member', {
      github: 'samplegithub',
      image: 'sampleimage.jpg',
      name: 'Sample Member',
      twitter: 'sampletwitter'
    });

    await render(hbs`{{team-list-item name=member.name twitter=member.twitter github=member.github image=member.image}}`);

    assert.equal(this.element.querySelector('.team-member-name').textContent.trim(), 'Sample Member');
    assert.ok(this.element.querySelector('.team-member-image').src.trim().includes('/images/team/sampleimage.jpg'));
    assert.ok(this.element.querySelector('.team-member-twitter').href.trim().includes('sampletwitter'));
    assert.ok(this.element.querySelector('.team-member-github').href.trim().includes('samplegithub'));
  });
});
