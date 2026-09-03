import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  shouldBackgroundReloadAll() {
    return false;
  }

  shouldBackgroundReloadRecord() {
    return false;
  }

  urlForFindAll(modelName) {
    const path = this.pathForType(modelName);
    return `/data/${path}/all.json`;
  }

  urlForFindRecord(id, modelName) {
    const path = this.pathForType(modelName);
    return `/data/${path}/${id}.json`;
  }
}
