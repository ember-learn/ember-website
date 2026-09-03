import type { TOC } from '@ember/component/template-only';

interface EmberCommunitySurveySponsorSignature {
  Args: {
    hasDarkBackground?: boolean;
    sponsor: {
      logoAlt: string;
      logoSrc: string;
      website: string;
    };
  };
}

<template>
  <div class={{if @hasDarkBackground "bg-light-muted"}}>
    <div class="pt-3 pb-3 text-center">
      <p>
        Brought to you by
      </p>

      <a
        class="survey-sponsor-link"
        href={{@sponsor.website}}
        data-test-link="Sponsor Website"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt={{@sponsor.logoAlt}}
          class="survey-sponsor-logo"
          data-test-image="Sponsor Logo"
          src={{@sponsor.logoSrc}}
        />
      </a>
    </div>
  </div>
</template> satisfies TOC<EmberCommunitySurveySponsorSignature>;
