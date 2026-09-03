import { findAll, waitUntil } from '@ember/test-helpers';

export async function waitUntilAllChartsAreDrawn(): Promise<void> {
  await waitUntil(() => {
    let areAllChartsSettled = true;

    findAll('[data-test-chart]').forEach((element) => {
      const { dataset } = element as HTMLElement;

      if (dataset.renderState !== 'settled') {
        areAllChartsSettled = false;
      }
    });

    return areAllChartsSettled;
  });
}
