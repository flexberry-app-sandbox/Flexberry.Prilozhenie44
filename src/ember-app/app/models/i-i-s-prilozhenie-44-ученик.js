import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as УченикMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-44-ученик';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(УченикMixin, Validations, {
});

defineProjections(Model);

export default Model;
