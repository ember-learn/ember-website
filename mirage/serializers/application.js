import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  keyForAttribute(key) {
    return key;
  },
});
