import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | return-book/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:return-book/index');
    assert.ok(route);
  });
});
