import {
  defineNamespace,
  defineProjections,
  Model as ПриходУходMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-44-приход-уход';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПриходУходMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
