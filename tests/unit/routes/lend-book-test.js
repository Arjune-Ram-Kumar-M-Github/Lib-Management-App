import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | lend-book', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:lend-book');
    assert.ok(route);
  });
});
