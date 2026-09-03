import type { TOC } from '@ember/component/template-only';

interface EmberCommunitySurveyIntroductionSignature {
  Args: {
    surveyLogoAlt: string;
    surveyLogoSrc: string;
  };
  Blocks: {
    default: [];
  };
}

<template>
  <div class="bg-dark bg-shape-boxes">
    <div class="container">
      {{! eslint-disable-next-line ember/template-no-empty-headings }}
      <h1>
        <img
          alt={{@surveyLogoAlt}}
          class="survey-logo"
          data-test-image="Survey Logo"
          src={{@surveyLogoSrc}}
        />
      </h1>

      <p class="survey-intro" data-test-section="Introduction">
        {{yield}}
      </p>
    </div>
  </div>
</template> satisfies TOC<EmberCommunitySurveyIntroductionSignature>;
