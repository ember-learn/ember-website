import { eq } from 'ember-truth-helpers';
import MascotsMascotListItem from 'ember-website/components/mascots/mascot-list/item';

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
</template>
