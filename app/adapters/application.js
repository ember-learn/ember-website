import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  urlForFindAll(modelName) {
    const path = this.pathForType(modelName);
    return `/data/${path}/all.json`;
  },

  urlForFindRecord(id, modelName) {
    const path = this.pathForType(modelName);
    return `/data/${path}/${id}.json`;
  }
});
