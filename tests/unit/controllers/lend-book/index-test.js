import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | lend-book/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:lend-book/index');
    assert.ok(controller);
  });
});
