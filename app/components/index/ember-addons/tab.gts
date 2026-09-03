import type { TOC } from '@ember/component/template-only';
import { on } from '@ember/modifier';
import { eq } from 'ember-truth-helpers';

interface IndexEmberAddonsTabSignature {
  Args: {
    currentTabId: number;
    label: string;
    onClick: () => void;
    tabId: number;
  };
  Element: HTMLButtonElement;
}

<template>
  {{#let (eq @currentTabId @tabId) as |isTabActive|}}
    <button
      aria-controls="ember-addons-panel-{{@tabId}}"
      aria-selected={{if isTabActive "true" "false"}}
      class="addon-tabs--tab {{if isTabActive 'active-tab'}}"
      data-test-button={{@label}}
      id="ember-addons-tab-{{@tabId}}"
      role="tab"
      tabindex={{if isTabActive "0" "-1"}}
      type="button"
      {{on "click" @onClick}}
      ...attributes
    >
      {{@label}}
    </button>
  {{/let}}
</template> satisfies TOC<IndexEmberAddonsTabSignature>;
