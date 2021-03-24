import Controller from '@ember/controller';

export default class ReleasesLtsController extends Controller {
  currentlySupportedLTS = [
    {
      version: '3.24',
      promotionDate: new Date('February 25, 2021'),
    },
    {
      version: '3.20',
      promotionDate: new Date('August 24, 2020'),
    },
  ];
}
