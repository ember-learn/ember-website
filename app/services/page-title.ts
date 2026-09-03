/*
  The `page-title` service lets us pass the same value to:

  - `<title>` element, set by `ember-page-title`
  - `<meta>` elements, set by `ember-cli-head`

  We use the `titleDidUpdate` hook to achieve this.

  https://github.com/ember-cli/ember-page-title/issues/201#issuecomment-761081734
*/
import { type Registry as Services, service } from '@ember/service';
import EmberPageTitleService from 'ember-page-title/services/page-title';

export default class PageTitleService extends EmberPageTitleService {
  @service declare headData: Services['head-data'];

  titleDidUpdate(pageTitle: string): void {
    this.headData.pageTitle = pageTitle;
  }
}

declare module '@ember/service' {
  interface Registry {
    'page-title': PageTitleService;
  }
}
