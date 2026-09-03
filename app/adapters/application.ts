import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  shouldBackgroundReloadAll(): boolean {
    return false;
  }

  shouldBackgroundReloadRecord(): boolean {
    return false;
  }

  urlForFindAll(modelName: string): string {
    const path = this.pathForType(modelName);

    return `/data/${path}/all.json`;
  }

  urlForFindRecord(id: string, modelName: string): string {
    const path = this.pathForType(modelName);

    return `/data/${path}/${id}.json`;
  }
}
