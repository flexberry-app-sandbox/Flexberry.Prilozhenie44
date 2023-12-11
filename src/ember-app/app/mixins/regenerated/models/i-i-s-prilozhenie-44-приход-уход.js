import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  справУч: DS.belongsTo('i-i-s-prilozhenie-44-справ-уч', { inverse: null, async: false })
});

export let ValidationRules = {
  справУч: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-приход-уход.validations.справУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриходУходE', 'i-i-s-prilozhenie-44-приход-уход', {
    справУч: belongsTo('i-i-s-prilozhenie-44-справ-уч', 'Фио Ученика', {
      фио: attr('Фио Ученика', { index: 1 }),
      номер: belongsTo('i-i-s-prilozhenie-44-номер', '', {
        наименование: attr('Номер Карты', { index: 2 })
      }, { index: -1, hidden: true }),
      классУч: belongsTo('i-i-s-prilozhenie-44-класс-уч', '', {
        назв: attr('Класс Ученика', { index: 3 })
      }, { index: -1, hidden: true }),
      справРод: belongsTo('i-i-s-prilozhenie-44-справ-род', '', {
        фио: attr('Фио Родителя', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 0 })
  });

  modelClass.defineProjection('ПриходУходL', 'i-i-s-prilozhenie-44-приход-уход', {
    справУч: belongsTo('i-i-s-prilozhenie-44-справ-уч', 'Фио Ученика', {
      фио: attr('Фио Ученика', { index: 0 }),
      номер: belongsTo('i-i-s-prilozhenie-44-номер', '', {
        наименование: attr('Номер Карты', { index: 1 })
      }, { index: -1, hidden: true }),
      классУч: belongsTo('i-i-s-prilozhenie-44-класс-уч', '', {
        назв: attr('Класс Ученика', { index: 2 })
      }, { index: -1, hidden: true }),
      справРод: belongsTo('i-i-s-prilozhenie-44-справ-род', '', {
        фио: attr('Фио Родителя', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
