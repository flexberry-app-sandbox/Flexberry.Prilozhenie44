import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('date'),
  справРод: DS.belongsTo('i-i-s-prilozhenie-44-справ-род', { inverse: null, async: false })
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
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПросмотрE', 'i-i-s-prilozhenie-44-просмотр', {
    время: attr('Время', { index: 0 }),
    справРод: belongsTo('i-i-s-prilozhenie-44-справ-род', 'Фио Родителя', {
      фио: attr('Фио Родителя', { index: 2 })
    }, { index: 1 })
  });

  modelClass.defineProjection('ПросмотрL', 'i-i-s-prilozhenie-44-просмотр', {
    время: attr('Время', { index: 0 }),
    справРод: belongsTo('i-i-s-prilozhenie-44-справ-род', 'Фио Родителя', {
      фио: attr('Фио Родителя', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
