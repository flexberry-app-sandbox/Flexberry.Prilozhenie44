import { Serializer as НомерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-44-номер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НомерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
