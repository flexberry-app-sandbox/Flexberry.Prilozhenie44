import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.prilozhenie-44.caption'),
          title: i18n.t('forms.application.sitemap.prilozhenie-44.title'),
          children: [{
            link: 'i-i-s-prilozhenie-44-класс-уч-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-класс-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-класс-уч-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-справ-долж-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-долж-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-долж-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-справ-уч-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-уч-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-справ-сотр-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-сотр-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-справ-род-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-род-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-род-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-карт-доступ-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-карт-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-карт-доступ-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-номер-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-номер-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-номер-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})