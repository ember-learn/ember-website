// @ts-expect-error: Incorrect type
import HeadLayout from 'ember-cli-head/components/head-layout';
import { pageTitle } from 'ember-page-title';
// @ts-expect-error: Incorrect type
import EsFooter from 'ember-styleguide/components/es-footer';
// @ts-expect-error: Incorrect type
import EsHeader from 'ember-styleguide/components/es-header';
// @ts-expect-error: Incorrect type
import { infoLinks } from 'ember-styleguide/constants/es-footer';
// @ts-expect-error: Incorrect type
import headerLinks from 'ember-styleguide/constants/links';
import { replaceLinks } from 'ember-website/utils/replace-links';

<template>
  <HeadLayout />

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
