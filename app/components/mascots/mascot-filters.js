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
}
