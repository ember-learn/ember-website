import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['filter', 'display'],
  filter: 'all',
  display: 'small',
});
