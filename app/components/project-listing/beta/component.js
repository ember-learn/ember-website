import Component from '@ember/component';

export default Component.extend({
  classNames: ['left'],
  classNameBindings: ['isCompleted::future-image']
});
