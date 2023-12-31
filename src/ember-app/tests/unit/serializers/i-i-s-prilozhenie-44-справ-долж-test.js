import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-44-справ-долж', 'Unit | Serializer | i-i-s-prilozhenie-44-справ-долж', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-44-справ-долж',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-prilozhenie-44-статус',

    'model:i-i-s-prilozhenie-44-база-данных',
    'model:i-i-s-prilozhenie-44-карт-доступ',
    'model:i-i-s-prilozhenie-44-класс-уч',
    'model:i-i-s-prilozhenie-44-номер',
    'model:i-i-s-prilozhenie-44-приход-уход',
    'model:i-i-s-prilozhenie-44-просмотр',
    'model:i-i-s-prilozhenie-44-расписание',
    'model:i-i-s-prilozhenie-44-справ-долж',
    'model:i-i-s-prilozhenie-44-справ-род',
    'model:i-i-s-prilozhenie-44-справ-сотр',
    'model:i-i-s-prilozhenie-44-справ-уч',
    'model:i-i-s-prilozhenie-44-ученик',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
