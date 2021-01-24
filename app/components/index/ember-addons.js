import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
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
}
