import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  urlForFindAll(modelName) {
    const path = this.pathForType(modelName);
    return `/data/${path}/all.json`;
  }

  urlForFindRecord(id, modelName) {
    const path = this.pathForType(modelName);
    return `/data/${path}/${id}.json`;
  }
}
