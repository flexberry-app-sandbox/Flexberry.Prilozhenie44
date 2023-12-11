import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string')
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-класс-уч.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлассУчE', 'i-i-s-prilozhenie-44-класс-уч', {
    назв: attr('Название Класса', { index: 0 })
  });

  modelClass.defineProjection('КлассУчL', 'i-i-s-prilozhenie-44-класс-уч', {
    назв: attr('Название Класса', { index: 0 })
  });
};
