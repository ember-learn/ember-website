import { type Registry as Services, service } from '@ember/service';
import Component from '@glimmer/component';
import { pageTitle } from 'ember-page-title';
// @ts-expect-error: Incorrect type
import EsFooter from 'ember-styleguide/components/es-footer';
// @ts-expect-error: Incorrect type
import EsHeader from 'ember-styleguide/components/es-header';
// @ts-expect-error: Incorrect type
import { infoLinks } from 'ember-styleguide/constants/es-footer';
// @ts-expect-error: Incorrect type
import headerLinks from 'ember-styleguide/constants/links';
import HeadLayout from 'ember-website/components/head-layout';
import { replaceLinks } from 'ember-website/utils/replace-links';

export default class Application extends Component {
  @service declare headData: Services['head-data'];

  <template>
    <HeadLayout>
      {{! eslint-disable ember/template-no-forbidden-elements }}
      {{! @glint-expect-error: Incorrect type }}
      <meta property="st:title" content={{this.headData.pageTitle}} />
      {{! @glint-expect-error: Incorrect type }}
      <meta property="og:title" content={{this.headData.pageTitle}} />
      <meta name="twitter:title" content={{this.headData.pageTitle}} />
    </HeadLayout>

    {{pageTitle "Ember.js"}}

    <EsHeader @home="/" @links={{replaceLinks headerLinks}} />

    <main>
      {{outlet}}
    </main>

    <EsFooter
      @contributeLink="https://github.com/ember-learn/ember-website"
      @infoLinks={{replaceLinks infoLinks}}
    />
  </template>
}
