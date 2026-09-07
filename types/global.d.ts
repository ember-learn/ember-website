import type StoreService from '@ember-data/store';
import type MetricsService from 'ember-metrics/services/metrics';

declare module '@ember/service' {
  export interface Registry {
    metrics: MetricsService;
    store: StoreService;
  }
}
