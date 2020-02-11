import Ember from 'ember';

export default function(defaultOptions) {
  defaultOptions.plotOptions = {
    series: {
      animation: !Ember.testing
    }
  }

  return defaultOptions;
}
