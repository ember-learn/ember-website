import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    const spinner = document.querySelector('.sk-cube-grid');
    if (spinner) {
      spinner.style.display = 'none';
    }
  }
});
