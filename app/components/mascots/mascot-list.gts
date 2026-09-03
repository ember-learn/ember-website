import type { TOC } from '@ember/component/template-only';
import { eq } from 'ember-truth-helpers';
import MascotsMascotListItem from 'ember-website/components/mascots/mascot-list/item';
import type Tomster from 'ember-website/models/tomster';

interface MascotsMascotListSignature {
  Args: {
    display?: 'small' | 'large';
    mascots: Tomster[];
  };
}

<template>
  <ul
    class="unstyled grid
      {{if (eq @display 'small') 'sm:grid-2 lg:grid-3' 'sm:grid-1 lg:grid-2'}}"
  >
    {{#each @mascots as |mascot|}}
      <li data-test-mascot>
        <MascotsMascotListItem @mascot={{mascot}} />
      </li>
    {{/each}}
  </ul>
</template> satisfies TOC<MascotsMascotListSignature>;
