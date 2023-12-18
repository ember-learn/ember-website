import Controller from '@ember/controller';

export default class ReleasesLtsController extends Controller {
  // promotion date should be the day of the release of the following ember minor version
  // you can run `npm info ember-source time` to see a list
  currentlySupportedLTS = [
    {
      version: '5.4',
      promotionDate: new Date('2023-12-11'),
    },
    {
      version: '4.12',
      promotionDate: new Date('2023-05-15'),
    },
  ];
}
