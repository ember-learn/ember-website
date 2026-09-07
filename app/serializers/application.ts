import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  keyForAttribute(key: string): string {
    return key;
  }
}
