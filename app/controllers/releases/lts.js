import Controller from '@ember/controller';

export default class ReleasesLtsController extends Controller {
  currentlySupportedLTS = [
    {
      version: '3.20',
      promotionDate: new Date('August 24, 2020'),
    },
    {
      version: '3.16',
      promotionDate: new Date('March 4, 2020'),
    },
  ];
}
