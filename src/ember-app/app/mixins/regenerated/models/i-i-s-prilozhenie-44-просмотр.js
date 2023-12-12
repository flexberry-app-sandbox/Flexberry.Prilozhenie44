import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('date'),
  справРод: DS.belongsTo('i-i-s-prilozhenie-44-справ-род', { inverse: null, async: false }),
  ученик: DS.hasMany('i-i-s-prilozhenie-44-ученик', { inverse: 'просмотр', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-просмотр.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  справРод: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-просмотр.validations.справРод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ученик: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-просмотр.validations.ученик.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПросмотрE', 'i-i-s-prilozhenie-44-просмотр', {
    время: attr('Время', { index: 0 }),
    справРод: belongsTo('i-i-s-prilozhenie-44-справ-род', 'Фио Родителя', {
      фио: attr('Фио Родителя', { index: 2 })
    }, { index: 1 }),
    ученик: hasMany('i-i-s-prilozhenie-44-ученик', 'Ученик', {
      приходУход: belongsTo('i-i-s-prilozhenie-44-приход-уход', 'Приход и Уход', {
        справУч: belongsTo('i-i-s-prilozhenie-44-справ-уч', '', {
          фио: attr('Фио Ученика', { index: 1 }),
          классУч: belongsTo('i-i-s-prilozhenie-44-класс-уч', '', {
            назв: attr('Класс Ученика', { index: 2 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true }),
        расписание: belongsTo('i-i-s-prilozhenie-44-расписание', '', {
          урок: attr('Номер Урока', { index: 3 }),
          периодОт: attr('Период От', { index: 4 }),
          периодДо: attr('Период До', { index: 5 })
        }, { index: -1, hidden: true }),
        статус: attr('Статус', { index: 6 })
      }, { index: 0, displayMemberPath: 'фио Ученика' })
    })
  });

  modelClass.defineProjection('ПросмотрL', 'i-i-s-prilozhenie-44-просмотр', {
    время: attr('Время', { index: 0 }),
    справРод: belongsTo('i-i-s-prilozhenie-44-справ-род', 'Фио Родителя', {
      фио: attr('Фио Родителя', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
