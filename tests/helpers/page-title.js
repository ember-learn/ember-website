import { getPageTitle } from 'ember-page-title/test-support';

export function setupPageTitleTest(hooks) {
  hooks.beforeEach(setUpCustomAssertions);
  hooks.afterEach(cleanUpCustomAssertions);
}

function setUpCustomAssertions(assert) {
  assert.hasPageTitle = (expectedValue) => {
    // Check the <title> element
    assert.strictEqual(
      getPageTitle(),
      expectedValue,
      'We render the correct page title.'
    );

    // Check meta tags created by `ember-cli-head`
    assert
      .dom(document.querySelector('meta[property="og:title"]'))
      .hasAttribute(
        'content',
        expectedValue,
        'We render an Open Graph meta tag.'
      );
  };
}

function cleanUpCustomAssertions(assert) {
  delete assert.hasPageTitle;
}
