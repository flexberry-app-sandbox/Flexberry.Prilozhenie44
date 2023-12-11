import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrilozhenie_44КартДоступLForm from './forms/i-i-s-prilozhenie-44-карт-доступ-l';
import IISPrilozhenie_44КлассУчLForm from './forms/i-i-s-prilozhenie-44-класс-уч-l';
import IISPrilozhenie_44НомерLForm from './forms/i-i-s-prilozhenie-44-номер-l';
import IISPrilozhenie_44ПриходУходLForm from './forms/i-i-s-prilozhenie-44-приход-уход-l';
import IISPrilozhenie_44РасписаниеLForm from './forms/i-i-s-prilozhenie-44-расписание-l';
import IISPrilozhenie_44СправДолжLForm from './forms/i-i-s-prilozhenie-44-справ-долж-l';
import IISPrilozhenie_44СправРодLForm from './forms/i-i-s-prilozhenie-44-справ-род-l';
import IISPrilozhenie_44СправСотрLForm from './forms/i-i-s-prilozhenie-44-справ-сотр-l';
import IISPrilozhenie_44СправУчLForm from './forms/i-i-s-prilozhenie-44-справ-уч-l';
import IISPrilozhenie_44КартДоступEForm from './forms/i-i-s-prilozhenie-44-карт-доступ-e';
import IISPrilozhenie_44КлассУчEForm from './forms/i-i-s-prilozhenie-44-класс-уч-e';
import IISPrilozhenie_44НомерEForm from './forms/i-i-s-prilozhenie-44-номер-e';
import IISPrilozhenie_44ПриходУходEForm from './forms/i-i-s-prilozhenie-44-приход-уход-e';
import IISPrilozhenie_44РасписаниеEForm from './forms/i-i-s-prilozhenie-44-расписание-e';
import IISPrilozhenie_44СправДолжEForm from './forms/i-i-s-prilozhenie-44-справ-долж-e';
import IISPrilozhenie_44СправРодEForm from './forms/i-i-s-prilozhenie-44-справ-род-e';
import IISPrilozhenie_44СправСотрEForm from './forms/i-i-s-prilozhenie-44-справ-сотр-e';
import IISPrilozhenie_44СправУчEForm from './forms/i-i-s-prilozhenie-44-справ-уч-e';
import IISPrilozhenie_44БазаДанныхModel from './models/i-i-s-prilozhenie-44-база-данных';
import IISPrilozhenie_44КартДоступModel from './models/i-i-s-prilozhenie-44-карт-доступ';
import IISPrilozhenie_44КлассУчModel from './models/i-i-s-prilozhenie-44-класс-уч';
import IISPrilozhenie_44НомерModel from './models/i-i-s-prilozhenie-44-номер';
import IISPrilozhenie_44ПриходУходModel from './models/i-i-s-prilozhenie-44-приход-уход';
import IISPrilozhenie_44РасписаниеModel from './models/i-i-s-prilozhenie-44-расписание';
import IISPrilozhenie_44СправДолжModel from './models/i-i-s-prilozhenie-44-справ-долж';
import IISPrilozhenie_44СправРодModel from './models/i-i-s-prilozhenie-44-справ-род';
import IISPrilozhenie_44СправСотрModel from './models/i-i-s-prilozhenie-44-справ-сотр';
import IISPrilozhenie_44СправУчModel from './models/i-i-s-prilozhenie-44-справ-уч';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-44-база-данных': IISPrilozhenie_44БазаДанныхModel,
    'i-i-s-prilozhenie-44-карт-доступ': IISPrilozhenie_44КартДоступModel,
    'i-i-s-prilozhenie-44-класс-уч': IISPrilozhenie_44КлассУчModel,
    'i-i-s-prilozhenie-44-номер': IISPrilozhenie_44НомерModel,
    'i-i-s-prilozhenie-44-приход-уход': IISPrilozhenie_44ПриходУходModel,
    'i-i-s-prilozhenie-44-расписание': IISPrilozhenie_44РасписаниеModel,
    'i-i-s-prilozhenie-44-справ-долж': IISPrilozhenie_44СправДолжModel,
    'i-i-s-prilozhenie-44-справ-род': IISPrilozhenie_44СправРодModel,
    'i-i-s-prilozhenie-44-справ-сотр': IISPrilozhenie_44СправСотрModel,
    'i-i-s-prilozhenie-44-справ-уч': IISPrilozhenie_44СправУчModel
  },

  'application-name': 'Prilozhenie_44',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_44',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_44',
          title: 'Prilozhenie_44'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'prilozhenie-44': {
          caption: 'Prilozhenie_44',
          title: 'Prilozhenie_44',
          'i-i-s-prilozhenie-44-класс-уч-l': {
            caption: 'Класс Ученика',
            title: ''
          },
          'i-i-s-prilozhenie-44-справ-долж-l': {
            caption: 'Справочник Должности',
            title: ''
          },
          'i-i-s-prilozhenie-44-справ-уч-l': {
            caption: 'Справочник Ученики',
            title: ''
          },
          'i-i-s-prilozhenie-44-справ-сотр-l': {
            caption: 'Справочник Сотрудники',
            title: ''
          },
          'i-i-s-prilozhenie-44-справ-род-l': {
            caption: 'Справочник Родители',
            title: ''
          },
          'i-i-s-prilozhenie-44-карт-доступ-l': {
            caption: 'База Данных',
            title: ''
          },
          'i-i-s-prilozhenie-44-номер-l': {
            caption: 'Номер Карты',
            title: ''
          },
          'i-i-s-prilozhenie-44-приход-уход-l': {
            caption: 'Фиксация Прихода/Ухода в школу',
            title: ''
          },
          'i-i-s-prilozhenie-44-расписание-l': {
            caption: 'Расписание',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-prilozhenie-44-карт-доступ-l': IISPrilozhenie_44КартДоступLForm,
    'i-i-s-prilozhenie-44-класс-уч-l': IISPrilozhenie_44КлассУчLForm,
    'i-i-s-prilozhenie-44-номер-l': IISPrilozhenie_44НомерLForm,
    'i-i-s-prilozhenie-44-приход-уход-l': IISPrilozhenie_44ПриходУходLForm,
    'i-i-s-prilozhenie-44-расписание-l': IISPrilozhenie_44РасписаниеLForm,
    'i-i-s-prilozhenie-44-справ-долж-l': IISPrilozhenie_44СправДолжLForm,
    'i-i-s-prilozhenie-44-справ-род-l': IISPrilozhenie_44СправРодLForm,
    'i-i-s-prilozhenie-44-справ-сотр-l': IISPrilozhenie_44СправСотрLForm,
    'i-i-s-prilozhenie-44-справ-уч-l': IISPrilozhenie_44СправУчLForm,
    'i-i-s-prilozhenie-44-карт-доступ-e': IISPrilozhenie_44КартДоступEForm,
    'i-i-s-prilozhenie-44-класс-уч-e': IISPrilozhenie_44КлассУчEForm,
    'i-i-s-prilozhenie-44-номер-e': IISPrilozhenie_44НомерEForm,
    'i-i-s-prilozhenie-44-приход-уход-e': IISPrilozhenie_44ПриходУходEForm,
    'i-i-s-prilozhenie-44-расписание-e': IISPrilozhenie_44РасписаниеEForm,
    'i-i-s-prilozhenie-44-справ-долж-e': IISPrilozhenie_44СправДолжEForm,
    'i-i-s-prilozhenie-44-справ-род-e': IISPrilozhenie_44СправРодEForm,
    'i-i-s-prilozhenie-44-справ-сотр-e': IISPrilozhenie_44СправСотрEForm,
    'i-i-s-prilozhenie-44-справ-уч-e': IISPrilozhenie_44СправУчEForm
  },

});

export default translations;
