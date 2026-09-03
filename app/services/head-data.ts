import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HeadDataService extends Service {
  @tracked pageTitle?: string;
}

declare module '@ember/service' {
  interface Registry {
    'head-data': HeadDataService;
  }
}
