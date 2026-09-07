import type StoreService from '@ember-data/store';

declare module '@ember/service' {
  export interface Registry {
    store: StoreService;
  }
}
