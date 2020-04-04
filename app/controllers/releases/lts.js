import Controller from '@ember/controller';

export default class ReleasesLtsController extends Controller {
  currentlySupportedLTS = [
    {
      version: '3.16',
      promotionDate: new Date('March 4, 2020')
    },
    {
      version: '3.12',
      promotionDate: new Date('September 19, 2019')
    },
    {
      version: '3.8',
      promotionDate: new Date('April 1, 2019')
    },
  ];
}