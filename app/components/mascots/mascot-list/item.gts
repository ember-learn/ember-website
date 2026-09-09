import type { TOC } from '@ember/component/template-only';
import formatDateTime from 'ember-website/helpers/format-date-time';
import type Tomster from 'ember-website/models/tomster';

interface MascotsMascotListItemSignature {
  Args: {
    mascot: Tomster;
  };
}

<template>
  <figure class="mascot-item" id={{@mascot.id}}>
    <div class="well well-1/1">
      <img
        alt=""
        data-test-field="Image"
        role="presentation"
        src="/images/tomsters/{{@mascot.image}}"
      />
    </div>

    <figcaption class="flex-horizontal-between">
      {{#if @mascot.url}}
        <a
          data-test-field="Name"
          href={{@mascot.url}}
          rel="noopener noreferrer"
          target="_blank"
        >
          {{@mascot.title}}
        </a>
      {{else}}
        <span data-test-field="Name">
          {{@mascot.title}}
        </span>
      {{/if}}

      {{! @glint-expect-error: Incorrect type }}
      <time data-test-field="Date" datetime={{@mascot.date}}>
        {{formatDateTime @mascot.date "MMMM D, YYYY"}}
      </time>
    </figcaption>
  </figure>
</template> satisfies TOC<MascotsMascotListItemSignature>;
