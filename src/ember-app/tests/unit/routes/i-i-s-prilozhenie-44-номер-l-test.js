import { moduleFor, test } from 'ember-qunit';

moduleFor('route:i-i-s-prilozhenie-44-номер-l', 'Unit | Route | i-i-s-prilozhenie-44-номер-l', {
  // Specify the other units that are required for this test.
  needs: [
    'service:cols-config-menu',
    'service:form-load-time-tracker',
    'service:objectlistview-events',
    'service:app-state',
    'service:adv-limit',
  ],
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
