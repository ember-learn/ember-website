import Component from '@ember/component';

export default Component.extend({
  isOpen: false,

  actions: {
    toggle() {
      this.toggleProperty('isOpen');
    }
  }
});
