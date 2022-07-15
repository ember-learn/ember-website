import Controller from '@ember/controller';

export default class ReleasesLtsController extends Controller {
  currentlySupportedLTS = [
    {
      version: '4.4',
      promotionDate: new Date('July 13, 2022'),
    },
    {
      version: '3.28',
      promotionDate: new Date('December 20, 2021'),
    },
  ];
}
