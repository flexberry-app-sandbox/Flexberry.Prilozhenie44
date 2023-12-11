import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  справУч: DS.belongsTo('i-i-s-prilozhenie-44-справ-уч', { inverse: null, async: false }),
  картДоступ: DS.belongsTo('i-i-s-prilozhenie-44-карт-доступ', { inverse: 'базаДанных', async: false })
});

export let ValidationRules = {
  справУч: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-база-данных.validations.справУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  картДоступ: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-база-данных.validations.картДоступ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БазаДанныхE', 'i-i-s-prilozhenie-44-база-данных', {
    справУч: belongsTo('i-i-s-prilozhenie-44-справ-уч', 'Фио Ученика', {
      фио: attr('Фио Ученика', { index: 1 }),
      классУч: belongsTo('i-i-s-prilozhenie-44-класс-уч', '', {
        назв: attr('Класс Ученика', { index: 2 })
      }, { index: -1, hidden: true }),
      справРод: belongsTo('i-i-s-prilozhenie-44-справ-род', '', {
        фио: attr('Фио Родителя', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фио Ученика' })
  });
};
