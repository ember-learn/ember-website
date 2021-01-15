export function setupPageTitleTest(hooks) {
  hooks.beforeEach(setUpCustomAssertions);
  hooks.afterEach(cleanUpCustomAssertions);
}

/*
  Based on https://github.com/ember-cli/ember-page-title/blob/f8fff84c142aab9b661e395c1586110fdda495f2/tests/helpers/get-page-title.js
*/
function setUpCustomAssertions(assert) {
  assert.hasPageTitle = (expectedValue) => {
    const titleElement = [
      ...window.document.querySelectorAll('head title'),
    ].pop();

    if (!titleElement) {
      assert.ok(false, 'Error: The <title> element could not be found.');

      return;
    }

    // Remove progress check, e.g. `(2/5)`, that Testem appends to the title
    const actualValue = titleElement.innerText
      .trim()
      .replace(/^\(\d+\/\d+\)/, '');

    assert.strictEqual(
      actualValue,
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
