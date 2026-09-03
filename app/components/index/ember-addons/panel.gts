import type { TOC } from '@ember/component/template-only';
import { eq, not } from 'ember-truth-helpers';

interface IndexEmberAddonsPanelSignature {
  Args: {
    currentTabId: number;
    tabId: number;
  };
  Blocks: {
    default: [];
  };
}

<template>
  {{#let (eq @currentTabId @tabId) as |isTabActive|}}
    <div
      aria-labelledby="ember-addons-tab-{{@tabId}}"
      class="addon-tabs--content {{if isTabActive 'active-tab'}}"
      data-test-panel
      hidden={{not isTabActive}}
      id="ember-addons-panel-{{@tabId}}"
      role="tabpanel"
      tabindex="0"
    >
      {{yield}}
    </div>
  {{/let}}
</template> satisfies TOC<IndexEmberAddonsPanelSignature>;
