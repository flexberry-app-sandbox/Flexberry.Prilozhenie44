import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string')
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-справ-род.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправРодE', 'i-i-s-prilozhenie-44-справ-род', {
    фио: attr('Фио Родителя', { index: 0 })
  });

  modelClass.defineProjection('СправРодL', 'i-i-s-prilozhenie-44-справ-род', {
    фио: attr('Фио Родителя', { index: 0 })
  });
};
