import { hash } from '@ember/helper';
import { LinkTo } from '@ember/routing';
import Component from '@glimmer/component';

export default class MascotsMascotFiltersComponent extends Component {
  displayFilters = [
    {
      label: 'Small',
      value: 'small',
    },
    {
      label: 'Large',
      value: 'large',
    },
  ];

  filterFilters = [
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

  <template>
    <nav class="filter flex-horizontal-between" aria-label="mascot filters">
      <span class="filter-group">
        {{#each this.filterFilters as |filter|}}
          <LinkTo
            data-test-link={{filter.label}}
            @query={{hash filter=filter.value}}
            @route="mascots"
          >
            {{~! ~}}{{filter.label}}{{~! ~}}
          </LinkTo>
        {{/each}}
      </span>

      <span>
        {{#each this.displayFilters as |filter|}}
          <LinkTo
            data-test-link={{filter.label}}
            @query={{hash display=filter.value}}
            @route="mascots"
          >
            {{~! ~}}{{filter.label}}{{~! ~}}
          </LinkTo>
        {{/each}}
      </span>
    </nav>
  </template>
}
