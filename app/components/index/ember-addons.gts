import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import IndexEmberAddonsPanel from 'ember-website/components/index/ember-addons/panel';
import IndexEmberAddonsTab from 'ember-website/components/index/ember-addons/tab';
import { getTabIdIncrement, modulus } from 'ember-website/utils/navigate-tabs';

export default class IndexEmberAddonsComponent extends Component {
  @tracked currentTabId = 0;

  emberAddons = [
    {
      description:
        'Ember Concurrency is an Ember addon that makes state management a whole lot easier with useful primitives.',
      documentationUrl: 'http://ember-concurrency.com/',
      howToInstall: 'ember install ember-concurrency',
      title: 'Manage State',
    },
    {
      description:
        'Ember Simple Auth is an Ember addon with minimal requirements, supporting all kinds of authentication and authorization mechanisms.',
      documentationUrl: 'https://ember-simple-auth.com/',
      howToInstall: 'ember install ember-simple-auth',
      title: 'Authenticate',
    },
    {
      description:
        'Internationalize your Ember apps with an addon that provides support for 150+ languages with locale-aware dates and time formatting.',
      documentationUrl: 'https://ember-intl.github.io/ember-intl/',
      howToInstall: 'ember install ember-intl',
      title: 'Translate',
    },
    {
      description:
        'Ember CLI Deploy is a deployment pipeline that keeps your deploy logic maintainable and reusable.',
      documentationUrl: 'http://ember-cli-deploy.com/',
      howToInstall: 'ember install ember-cli-deploy',
      title: 'Deploy',
    },
  ];

  @action updateCurrentTabId(tabId) {
    this.currentTabId = tabId;
  }

  @action handleKeyboardNavigation(event) {
    const tabIdIncrement = getTabIdIncrement(event);

    if (!Number.isInteger(tabIdIncrement)) {
      return;
    }

    const tabElements = event.target.parentElement.children;
    const numTabs = tabElements.length;
    const newTabId = modulus(this.currentTabId + tabIdIncrement, numTabs);

    this.currentTabId = newTabId;
    tabElements[newTabId].focus();
  }

  <template>
    <div class="addon-tabs">
      <div class="addon-tabs--header" role="tablist">
        {{#each this.emberAddons as |emberAddon index|}}
          <IndexEmberAddonsTab
            @currentTabId={{this.currentTabId}}
            @label={{emberAddon.title}}
            @onClick={{fn this.updateCurrentTabId index}}
            @tabId={{index}}
            {{on "keydown" this.handleKeyboardNavigation}}
          />
        {{/each}}
      </div>

      <div>
        {{#each this.emberAddons as |emberAddon index|}}
          <IndexEmberAddonsPanel
            @currentTabId={{this.currentTabId}}
            @tabId={{index}}
          >
            <p>
              {{emberAddon.description}}
            </p>
            <p>
              Read the docs:
              <a
                data-test-link={{emberAddon.documentationUrl}}
                href={{emberAddon.documentationUrl}}
                rel="noopener noreferrer"
                target="_blank"
              >
                {{emberAddon.documentationUrl}}
              </a>
            </p>
            <p>
              Easy installation:
            </p>
            <code class="addon-tabs--code">
              <pre class="mt-3">
          {{~! ~}}&gt; {{emberAddon.howToInstall}}{{~! ~}}
        </pre>
            </code>
          </IndexEmberAddonsPanel>
        {{/each}}
      </div>
    </div>
  </template>
}
