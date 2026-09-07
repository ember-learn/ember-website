import { getPageTitle } from 'ember-page-title/test-support';

export function assertPageTitle(assert: Assert, expectedValue: string): void {
  // Check the <title> element
  assert.strictEqual(
    getPageTitle(),
    expectedValue,
    'We render the correct page title.',
  );

  // Check meta tags
  assert
    .dom(document.querySelector('meta[property="og:title"]'))
    .hasAttribute(
      'content',
      expectedValue,
      'We render an Open Graph meta tag.',
    );
}
