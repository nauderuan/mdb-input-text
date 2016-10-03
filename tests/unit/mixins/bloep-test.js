import Ember from 'ember';
import BloepMixin from 'mdb-input-text/mixins/bloep';
import { module, test } from 'qunit';

module('Unit | Mixin | bloep');

// Replace this with your real tests.
test('it works', function(assert) {
  let BloepObject = Ember.Object.extend(BloepMixin);
  let subject = BloepObject.create();
  assert.ok(subject);
});
