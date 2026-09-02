import HeadLayout from 'ember-cli-head/components/head-layout';
import { pageTitle } from 'ember-page-title';
import EsFooter from 'ember-styleguide/components/es-footer';
import EsHeader from 'ember-styleguide/components/es-header';

<template>
  <HeadLayout />

  {{pageTitle "Ember.js"}}

  <EsHeader @home="/" @links={{@controller.links}} />

  <main>
    {{outlet}}
  </main>

  <EsFooter
    @contributeLink="https://github.com/ember-learn/ember-website"
    @infoLinks={{@controller.infoLinks}}
  />
</template>
