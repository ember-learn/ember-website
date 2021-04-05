import SplineChart, {
   createSeries,
 } from 'ember-website/utils/highcharts/spline-chart';
 import { module, test } from 'qunit';

 module('Unit | Utility | highcharts/spline-chart', function () {
   module('SplineChart', function () {
     test('highchartsOptions returns an options object', function (assert) {
       const { options } = new SplineChart().highchartsOptions;

       assert.deepEqual(options, {}, 'We get the correct value.');
     });
   });

   module('createSeries', function () {
     test('returns the series object', function (assert) {
       const rawData = [];

       const series = createSeries(rawData);

       assert.strictEqual(series.length, 0, 'We see 0 series of data.');
     });
   });
 });