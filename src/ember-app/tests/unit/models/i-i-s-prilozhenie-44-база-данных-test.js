import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-44-база-данных', 'Unit | Model | i-i-s-prilozhenie-44-база-данных', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-prilozhenie-44-база-данных',
    'model:i-i-s-prilozhenie-44-карт-доступ',
    'model:i-i-s-prilozhenie-44-класс-уч',
    'model:i-i-s-prilozhenie-44-номер',
    'model:i-i-s-prilozhenie-44-расписание',
    'model:i-i-s-prilozhenie-44-справ-долж',
    'model:i-i-s-prilozhenie-44-справ-род',
    'model:i-i-s-prilozhenie-44-справ-сотр',
    'model:i-i-s-prilozhenie-44-справ-уч',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
