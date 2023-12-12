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
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-справ-долж-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-долж-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-долж-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-справ-уч-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-уч-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-справ-сотр-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-сотр-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-справ-род-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-род-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-справ-род-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-карт-доступ-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-карт-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-карт-доступ-l.title'),
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-номер-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-номер-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-номер-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-приход-уход-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-приход-уход-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-приход-уход-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-расписание-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-расписание-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-расписание-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-44-просмотр-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-просмотр-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-44.i-i-s-prilozhenie-44-просмотр-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})