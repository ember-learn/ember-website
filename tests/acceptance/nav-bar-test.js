import { click, currentRouteName, findAll, visit} from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | navbar', function(hooks) {
  setupApplicationTest(hooks);

  test(`The navbar closes as you navigate between routes`, async function(assert) {
    await visit('/');
    let communityLink = findAll('.es-navbar li.dropdown')[2];
    let communityLinkDropdown = communityLink.querySelector('ul.dropdown');
    assert.dom(communityLinkDropdown).isNotVisible('The dropdown is not initially visible');

    await click(communityLink.querySelector('a'));
    assert.dom(communityLinkDropdown).isVisible('The dropdown is visible after clicking');

    await click(communityLinkDropdown.querySelector('a[role="menuitem"]'));
    assert.dom(communityLinkDropdown).isNotVisible('The dropdown is not visible after transitioning');
    assert.equal(currentRouteName(), 'community.index', 'The community page is shown');
  });
});
