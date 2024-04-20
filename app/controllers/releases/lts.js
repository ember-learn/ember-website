import Controller from '@ember/controller';

export default class ReleasesLtsController extends Controller {
  // promotion date should be the day of the release of the following ember minor version
  // you can run `npm info ember-source time` to see a list
  currentlySupportedLTS = [
    {
      version: '5.8',
      promotionDate: new Date('2024-04-15'),
    },
    {
      version: '5.4',
      promotionDate: new Date('2023-12-11'),
    },
  ];
}
