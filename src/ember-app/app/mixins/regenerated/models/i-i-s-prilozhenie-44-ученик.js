import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  приходУход: DS.belongsTo('i-i-s-prilozhenie-44-приход-уход', { inverse: null, async: false }),
  просмотр: DS.belongsTo('i-i-s-prilozhenie-44-просмотр', { inverse: 'ученик', async: false })
});

export let ValidationRules = {
  приходУход: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-ученик.validations.приходУход.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  просмотр: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-ученик.validations.просмотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УченикE', 'i-i-s-prilozhenie-44-ученик', {
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
  });
};
