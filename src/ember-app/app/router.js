import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-44-карт-доступ-l');
  this.route('i-i-s-prilozhenie-44-карт-доступ-e',
  { path: 'i-i-s-prilozhenie-44-карт-доступ-e/:id' });
  this.route('i-i-s-prilozhenie-44-карт-доступ-e.new',
  { path: 'i-i-s-prilozhenie-44-карт-доступ-e/new' });
  this.route('i-i-s-prilozhenie-44-класс-уч-l');
  this.route('i-i-s-prilozhenie-44-класс-уч-e',
  { path: 'i-i-s-prilozhenie-44-класс-уч-e/:id' });
  this.route('i-i-s-prilozhenie-44-класс-уч-e.new',
  { path: 'i-i-s-prilozhenie-44-класс-уч-e/new' });
  this.route('i-i-s-prilozhenie-44-номер-l');
  this.route('i-i-s-prilozhenie-44-номер-e',
  { path: 'i-i-s-prilozhenie-44-номер-e/:id' });
  this.route('i-i-s-prilozhenie-44-номер-e.new',
  { path: 'i-i-s-prilozhenie-44-номер-e/new' });
  this.route('i-i-s-prilozhenie-44-приход-уход-l');
  this.route('i-i-s-prilozhenie-44-приход-уход-e',
  { path: 'i-i-s-prilozhenie-44-приход-уход-e/:id' });
  this.route('i-i-s-prilozhenie-44-приход-уход-e.new',
  { path: 'i-i-s-prilozhenie-44-приход-уход-e/new' });
  this.route('i-i-s-prilozhenie-44-справ-долж-l');
  this.route('i-i-s-prilozhenie-44-справ-долж-e',
  { path: 'i-i-s-prilozhenie-44-справ-долж-e/:id' });
  this.route('i-i-s-prilozhenie-44-справ-долж-e.new',
  { path: 'i-i-s-prilozhenie-44-справ-долж-e/new' });
  this.route('i-i-s-prilozhenie-44-справ-род-l');
  this.route('i-i-s-prilozhenie-44-справ-род-e',
  { path: 'i-i-s-prilozhenie-44-справ-род-e/:id' });
  this.route('i-i-s-prilozhenie-44-справ-род-e.new',
  { path: 'i-i-s-prilozhenie-44-справ-род-e/new' });
  this.route('i-i-s-prilozhenie-44-справ-сотр-l');
  this.route('i-i-s-prilozhenie-44-справ-сотр-e',
  { path: 'i-i-s-prilozhenie-44-справ-сотр-e/:id' });
  this.route('i-i-s-prilozhenie-44-справ-сотр-e.new',
  { path: 'i-i-s-prilozhenie-44-справ-сотр-e/new' });
  this.route('i-i-s-prilozhenie-44-справ-уч-l');
  this.route('i-i-s-prilozhenie-44-справ-уч-e',
  { path: 'i-i-s-prilozhenie-44-справ-уч-e/:id' });
  this.route('i-i-s-prilozhenie-44-справ-уч-e.new',
  { path: 'i-i-s-prilozhenie-44-справ-уч-e/new' });
});

export default Router;
