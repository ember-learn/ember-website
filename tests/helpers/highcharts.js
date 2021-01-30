import { findAll, waitUntil } from '@ember/test-helpers';

export async function waitUntilAllChartsAreDrawn() {
  await waitUntil(() => {
    let areAllChartsSettled = true;

    findAll('[data-test-highcharts-container]').forEach(({ dataset }) => {
      if (dataset.renderState !== 'settled') {
        areAllChartsSettled = false;
      }
    });

    return areAllChartsSettled;
  });
}
