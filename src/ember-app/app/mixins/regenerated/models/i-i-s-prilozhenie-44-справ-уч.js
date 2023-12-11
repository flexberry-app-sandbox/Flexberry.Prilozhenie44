import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРожд: DS.attr('date'),
  фио: DS.attr('string'),
  классУч: DS.belongsTo('i-i-s-prilozhenie-44-класс-уч', { inverse: null, async: false }),
  справРод: DS.belongsTo('i-i-s-prilozhenie-44-справ-род', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРожд: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-справ-уч.validations.датаРожд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  фио: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-справ-уч.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  классУч: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-справ-уч.validations.классУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  справРод: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-справ-уч.validations.справРод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправУчE', 'i-i-s-prilozhenie-44-справ-уч', {
    фио: attr('Фио', { index: 0 }),
    датаРожд: attr('Дата Рождения', { index: 1 }),
    классУч: belongsTo('i-i-s-prilozhenie-44-класс-уч', 'Класс Ученика', {
      назв: attr('Класс Ученика', { index: 3 })
    }, { index: 2 }),
    справРод: belongsTo('i-i-s-prilozhenie-44-справ-род', 'Фио Родителя', {
      фио: attr('Фио Родителя', { index: 5 })
    }, { index: 4 })
  });

  modelClass.defineProjection('СправУчL', 'i-i-s-prilozhenie-44-справ-уч', {
    фио: attr('Фио', { index: 0 }),
    датаРожд: attr('Дата Рождения', { index: 1 }),
    классУч: belongsTo('i-i-s-prilozhenie-44-класс-уч', 'Класс Ученика', {
      назв: attr('Класс Ученика', { index: 2 })
    }, { index: -1, hidden: true }),
    справРод: belongsTo('i-i-s-prilozhenie-44-справ-род', 'Фио Родителя', {
      фио: attr('Фио Родителя', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
