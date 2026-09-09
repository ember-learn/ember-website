import type { TOC } from '@ember/component/template-only';
import { hash } from '@ember/helper';
import { LinkTo } from '@ember/routing';

type Filter = {
  label: string;
  value: string;
};

const displayFilters: Filter[] = [
  {
    label: 'Small',
    value: 'small',
  },
  {
    label: 'Large',
    value: 'large',
  },
];

const tagFilters: Filter[] = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Tomsters',
    value: 'tomster',
  },
  {
    label: 'Zoeys',
    value: 'zoey',
  },
  {
    label: 'Meetups',
    value: 'meetup',
  },
  {
    label: 'Conferences',
    value: 'conference',
  },
  {
    label: 'Corporate',
    value: 'corp',
  },
  {
    label: 'Others',
    value: 'other',
  },
];

interface MascotsMascotFiltersSignature {
  Args: {};
}

<template>
  <nav aria-label="mascot filters" class="filter flex-horizontal-between">
    <span class="filter-group">
      {{#each tagFilters as |filter|}}
        <LinkTo
          @query={{hash filter=filter.value}}
          @route="mascots"
          data-test-link={{filter.label}}
        >
          {{~! ~}}{{filter.label}}{{~! ~}}
        </LinkTo>
      {{/each}}
    </span>

    <span>
      {{#each displayFilters as |filter|}}
        <LinkTo
          @query={{hash display=filter.value}}
          @route="mascots"
          data-test-link={{filter.label}}
        >
          {{~! ~}}{{filter.label}}{{~! ~}}
        </LinkTo>
      {{/each}}
    </span>
  </nav>
</template> satisfies TOC<MascotsMascotFiltersSignature>;
