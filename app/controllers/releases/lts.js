import Controller from '@ember/controller';

export default class ReleasesLtsController extends Controller {
  currentlySupportedLTS = [
    {
      version: '4.8',
      promotionDate: new Date('November 28, 2022'),
    },
    {
      version: '4.4',
      promotionDate: new Date('July 13, 2022'),
    },
  ];
}
