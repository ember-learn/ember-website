import ResponsiveImage from 'ember-responsive-image/components/responsive-image';
import formatDateTime from 'ember-website/helpers/format-date-time';

<template>
  <figure class="mascot-item" id={{@mascot.id}}>
    <div class="well well-1/1">
      <ResponsiveImage
        @src="/images/tomsters/{{@mascot.image}}"
        alt=""
        role="presentation"
        data-test-field="Image"
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

      <time datetime={{@mascot.date}} data-test-field="Date">
        {{formatDateTime @mascot.date "MMMM D, YYYY"}}
      </time>
    </figcaption>
  </figure>
</template>
