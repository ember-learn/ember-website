import type { TOC } from '@ember/component/template-only';
import { LinkTo } from '@ember/routing';

interface IndexHeroCalloutSignature {
  Args: {};
}

<template>
  <div class="hero-callout">
    <span class="hero-callout-label">
      New
    </span>
    <div class="hero-callout-text">
      The
      <LinkTo @route="survey">2022 Ember Community Survey</LinkTo>
      is here!
    </div>
  </div>
</template> satisfies TOC<IndexHeroCalloutSignature>;
