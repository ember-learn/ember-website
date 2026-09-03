import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class BannerCalloutsComponent extends Component {
  @tracked isShown = true;

  @action dismiss() {
    this.isShown = false;
  }

  <template>
    {{#if this.isShown}}
      <div class="callout-banner" data-test-callout-banner>
        {{yield}}

        {{#if @dismissible}}
          <button
            aria-label="Dismiss this message"
            class="toggle-close hide-on-mobile"
            data-test-button="Close"
            type="button"
            {{on "click" this.dismiss}}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        {{/if}}
      </div>
    {{/if}}
  </template>
}
