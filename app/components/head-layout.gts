// Based on https://github.com/ember-fastboot/ember-cli-head/pull/118
import type Owner from '@ember/owner';
import { type Registry as Services, service } from '@ember/service';
import Component from '@glimmer/component';

interface HeadLayoutSignature {
  Blocks: {
    default: [];
  };
}

export default class HeadLayout extends Component<HeadLayoutSignature> {
  @service('-document') declare document: Document;
  @service declare fastboot: Services['fastboot'];

  /**
   * If true, this will tear down any existing head on init of this component.
   * This is useful if there is a head built with fastboot - it will then be torn down when this is initialized in the browser.
   * If you do not want this behavior, you can set this to false.
   * @public
   */
  shouldTearDownOnInit = true;

  constructor(owner: Owner, args: object) {
    super(owner, args);

    if (this.shouldTearDownOnInit) {
      this.tearDownHead();
    }
  }

  /**
   * Tear down any previous head, if there was one.
   */
  private tearDownHead(): void {
    // @ts-expect-error: Incorrect type
    if (this.fastboot.isFastBoot) {
      return;
    }

    // clear fast booted head (if any)
    const document = this.document;
    const startMeta = document.querySelector(
      'meta[name="ember-cli-head-start"]',
    );
    const endMeta = document.querySelector('meta[name="ember-cli-head-end"]');
    if (startMeta && endMeta) {
      let el = startMeta.nextSibling;
      while (el && el !== endMeta) {
        document.head.removeChild(el);
        el = startMeta.nextSibling;
      }
      document.head.removeChild(startMeta);
      document.head.removeChild(endMeta);
    }
  }

  <template>
    {{#in-element this.document.head insertBefore=null}}
      {{! eslint-disable-next-line ember/template-no-forbidden-elements }}
      <meta name="ember-cli-head-start" content="" />
      {{yield}}
      {{! eslint-disable-next-line ember/template-no-forbidden-elements }}
      <meta name="ember-cli-head-end" content="" />
    {{/in-element}}
  </template>
}
