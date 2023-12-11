import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  статус: DS.attr('i-i-s-prilozhenie-44-статус'),
  расписание: DS.belongsTo('i-i-s-prilozhenie-44-расписание', { inverse: null, async: false }),
  справУч: DS.belongsTo('i-i-s-prilozhenie-44-справ-уч', { inverse: null, async: false })
});

export let ValidationRules = {
  статус: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-приход-уход.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расписание: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-приход-уход.validations.расписание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
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
    }, { index: 0 }),
    расписание: belongsTo('i-i-s-prilozhenie-44-расписание', 'Расписание', {
      урок: attr('Урок', { index: 6 }),
      периодОт: attr('Период От', { index: 7 }),
      периодДо: attr('Период До', { index: 8 })
    }, { index: 5 }),
    статус: attr('Статус', { index: 9 })
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
    }, { index: -1, hidden: true }),
    расписание: belongsTo('i-i-s-prilozhenie-44-расписание', 'Урок', {
      урок: attr('Урок', { index: 4 }),
      периодОт: attr('Период От', { index: 5 }),
      периодДо: attr('Период До', { index: 6 })
    }, { index: -1, hidden: true }),
    статус: attr('Статус', { index: 7 })
  });
};
