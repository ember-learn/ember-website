import { getTabIdIncrement, modulus } from 'ember-website/utils/navigate-tabs';
import { module, test } from 'qunit';

module('Unit | Utility | navigate-tabs', function () {
  module('getTabIdIncrement', function () {
    test('return -1 if event.key corresponds to the left arrow key', function (assert) {
      assert.strictEqual(
        getTabIdIncrement({ key: 'ArrowLeft' }),
        -1,
        'We get the correct output.'
      );

      assert.strictEqual(
        getTabIdIncrement({ key: 'Left' }),
        -1,
        'We get the correct output.'
      );
    });

    test('return +1 if event.key corresponds to the right arrow key', function (assert) {
      assert.strictEqual(
        getTabIdIncrement({ key: 'ArrowRight' }),
        1,
        'We get the correct output.'
      );

      assert.strictEqual(
        getTabIdIncrement({ key: 'Right' }),
        1,
        'We get the correct output.'
      );
    });

    test('return undefined if event.key corresponds to any other key', function (assert) {
      assert.strictEqual(
        getTabIdIncrement({ key: 'ArrowDown' }),
        undefined,
        'We get the correct output.'
      );

      assert.strictEqual(
        getTabIdIncrement({ key: 'Tab' }),
        undefined,
        'We get the correct output.'
      );
    });
  });

  module('modulus', function (hooks) {
    hooks.beforeEach(function () {
      this.numTabs = 4;
    });

    test('calculates m % n when m is a nonnegative number', function (assert) {
      assert.strictEqual(
        modulus(0, this.numTabs),
        0,
        'We get the correct output.'
      );

      assert.strictEqual(
        modulus(1, this.numTabs),
        1,
        'We get the correct output.'
      );

      assert.strictEqual(
        modulus(2, this.numTabs),
        2,
        'We get the correct output.'
      );

      assert.strictEqual(
        modulus(3, this.numTabs),
        3,
        'We get the correct output.'
      );
    });

    test('calculates m % n when m is a negative number', function (assert) {
      assert.strictEqual(
        modulus(-4, this.numTabs),
        0,
        'We get the correct output.'
      );

      assert.strictEqual(
        modulus(-3, this.numTabs),
        1,
        'We get the correct output.'
      );

      assert.strictEqual(
        modulus(-2, this.numTabs),
        2,
        'We get the correct output.'
      );

      assert.strictEqual(
        modulus(-1, this.numTabs),
        3,
        'We get the correct output.'
      );
    });
  });
});
