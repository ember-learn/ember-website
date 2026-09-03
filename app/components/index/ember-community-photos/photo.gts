import type { TOC } from '@ember/component/template-only';
import { or } from 'ember-truth-helpers';

interface IndexEmberCommunityPhotosPhotoSignature {
  Args: {
    alt?: string;
    containerClass: string;
    src: string;
  };
}

<template>
  <figure class={{@containerClass}}>
    <img
      alt={{or @alt ""}}
      class="homepage-image-grid__img"
      data-test-image={{or @alt ""}}
      loading="lazy"
      role={{unless @alt "presentation"}}
      src={{@src}}
    />
  </figure>
</template> satisfies TOC<IndexEmberCommunityPhotosPhotoSignature>;
