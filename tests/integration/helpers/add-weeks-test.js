import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Helper | add-weeks', function (hooks) {
  setupRenderingTest(hooks);

  test('by default, adds 0 weeks to the initial date', async function (assert) {
    this.ltsRelease = {
      version: '3.16',
      promotionDate: new Date('March 4, 2020'),
    };

    await render(hbs`
      <table>
        <thead>
          <tr>
            <th>LTS version</th>
            <th>Promotion date</th>
            <th>Bugfixes until</th>
            <th>Security patches until</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{this.ltsRelease.version}}</td>
            <td>{{format-date-time this.ltsRelease.promotionDate "MMMM D, YYYY"}}</td>
            <td data-test-column="Bugfixes">{{format-date-time (add-weeks this.ltsRelease.promotionDate) "MMMM D, YYYY"}}</td>
            <td data-test-column="Security Patches">{{format-date-time (add-weeks this.ltsRelease.promotionDate) "MMMM D, YYYY"}}</td>
          </tr>
        </tbody>
      </table>
    `);

    assert
      .dom('[data-test-column="Bugfixes"]')
      .hasText('March 4, 2020', 'We see the correct date for bugfixes.');

    assert
      .dom('[data-test-column="Security Patches"]')
      .hasText(
        'March 4, 2020',
        'We see the correct date for security patches.'
      );
  });

  test('can add any number of weeks to the initial date', async function (assert) {
    this.ltsRelease = {
      version: '3.16',
      promotionDate: new Date('March 4, 2020'),
    };

    await render(hbs`
      <table>
        <thead>
          <tr>
            <th>LTS version</th>
            <th>Promotion date</th>
            <th>Bugfixes until</th>
            <th>Security patches until</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{this.ltsRelease.version}}</td>
            <td>{{format-date-time this.ltsRelease.promotionDate "MMMM D, YYYY"}}</td>
            <td data-test-column="Bugfixes">{{format-date-time (add-weeks this.ltsRelease.promotionDate 36) "MMMM D, YYYY"}}</td>
            <td data-test-column="Security Patches">{{format-date-time (add-weeks this.ltsRelease.promotionDate 54) "MMMM D, YYYY"}}</td>
          </tr>
        </tbody>
      </table>
    `);

    assert
      .dom('[data-test-column="Bugfixes"]')
      .hasText('November 11, 2020', 'We see the correct date for bugfixes.');

    assert
      .dom('[data-test-column="Security Patches"]')
      .hasText(
        'March 17, 2021',
        'We see the correct date for security patches.'
      );
  });
});
