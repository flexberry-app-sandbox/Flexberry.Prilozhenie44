import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  справСотр: DS.belongsTo('i-i-s-prilozhenie-44-справ-сотр', { inverse: null, async: false }),
  базаДанных: DS.hasMany('i-i-s-prilozhenie-44-база-данных', { inverse: 'картДоступ', async: false })
});

export let ValidationRules = {
  справСотр: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-карт-доступ.validations.справСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  базаДанных: {
    descriptionKey: 'models.i-i-s-prilozhenie-44-карт-доступ.validations.базаДанных.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартДоступE', 'i-i-s-prilozhenie-44-карт-доступ', {
    справСотр: belongsTo('i-i-s-prilozhenie-44-справ-сотр', 'Ответственный', {
      фио: attr('Ответственный', { index: 1 }),
      справДолж: belongsTo('i-i-s-prilozhenie-44-справ-долж', '', {
        должность: attr('Должность', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: 0 }),
    базаДанных: hasMany('i-i-s-prilozhenie-44-база-данных', 'База Данных', {
      справУч: belongsTo('i-i-s-prilozhenie-44-справ-уч', 'Фио Ученика', {
        фио: attr('Фио Ученика', { index: 1 }),
        классУч: belongsTo('i-i-s-prilozhenie-44-класс-уч', '', {
          назв: attr('Класс Ученика', { index: 2 })
        }, { index: -1, hidden: true }),
        справРод: belongsTo('i-i-s-prilozhenie-44-справ-род', '', {
          фио: attr('Фио Родителя', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фио Ученика' })
    })
  });

  modelClass.defineProjection('КартДоступL', 'i-i-s-prilozhenie-44-карт-доступ', {
    справСотр: belongsTo('i-i-s-prilozhenie-44-справ-сотр', 'Ответственный', {
      фио: attr('Ответственный', { index: 0 }),
      справДолж: belongsTo('i-i-s-prilozhenie-44-справ-долж', '', {
        должность: attr('Должность', { index: 1 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
