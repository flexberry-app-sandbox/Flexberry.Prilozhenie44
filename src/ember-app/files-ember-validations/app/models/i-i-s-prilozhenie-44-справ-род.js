import {
  defineNamespace,
  defineProjections,
  Model as СправРодMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-44-справ-род';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СправРодMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
