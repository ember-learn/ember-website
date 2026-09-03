import HeadLayout from 'ember-cli-head/components/head-layout';
import { pageTitle } from 'ember-page-title';
import EsFooter from 'ember-styleguide/components/es-footer';
import EsHeader from 'ember-styleguide/components/es-header';
import { infoLinks } from 'ember-styleguide/constants/es-footer';
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
