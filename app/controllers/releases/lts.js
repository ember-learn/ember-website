import Controller from '@ember/controller';

export default class ReleasesLtsController extends Controller {
  // promotion date should be the day of the release of the following ember minor version
  // you can run `npm info ember-source time` to see a list
  emberLtsReleases = [
    {
      version: '6.4',
      promotionDate: new Date('2025-06-09T18:42:37.463Z'),
      isActive: true,
    },
    {
      version: '5.12',
      promotionDate: new Date('2024-09-30T18:20:54.703Z'),
      isActive: false,
    },
    {
      version: '5.8',
      promotionDate: new Date('2024-06-03T12:00:00Z'),
      isActive: false,
    },
    {
      version: '5.4',
      promotionDate: new Date('2023-12-10T12:00:00Z'),
      isActive: false,
    },
    {
      version: '4.12',
      promotionDate: new Date('2023-05-14T12:00:00Z'),
      isActive: false,
    },
    {
      version: '4.8',
      promotionDate: new Date('2022-12-08T12:00:00Z'),
      isActive: false,
    },
    {
      version: '4.4',
      promotionDate: new Date('2022-07-13T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.28',
      promotionDate: new Date('2021-12-20T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.24',
      promotionDate: new Date('2021-02-25T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.20',
      promotionDate: new Date('2020-09-02T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.16',
      promotionDate: new Date('2020-03-16T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.12',
      promotionDate: new Date('2019-09-25T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.8',
      promotionDate: new Date('2019-04-10T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.4',
      promotionDate: new Date('2018-10-15T12:00:00Z'),
      isActive: false,
    },
    {
      version: '2.18',
      promotionDate: new Date('2018-02-14T12:00:00Z'),
      isActive: false,
    },
    {
      version: '2.16',
      promotionDate: new Date('2017-11-20T12:00:00Z'),
      isActive: false,
    },
    {
      version: '2.12',
      promotionDate: new Date('2017-04-29T12:00:00Z'),
      isActive: false,
    },
    {
      version: '2.8',
      promotionDate: new Date('2016-10-17T12:00:00Z'),
      isActive: false,
    },
    {
      version: '2.4',
      promotionDate: new Date('2016-04-11T12:00:00Z'),
      isActive: false,
    },
  ];

  dataLtsReleases = [
    {
      version: '5.3',
      promotionDate: new Date('2023-12-10T12:00:00Z'),
      isActive: true,
    },
    {
      version: '4.12',
      promotionDate: new Date('2023-05-14T12:00:00Z'),
      isActive: true,
    },
    {
      version: '4.8',
      promotionDate: new Date('2022-12-08T12:00:00Z'),
      isActive: false,
    },
    {
      version: '4.4',
      promotionDate: new Date('2022-07-13T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.28',
      promotionDate: new Date('2021-12-20T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.24',
      promotionDate: new Date('2021-02-25T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.20',
      promotionDate: new Date('2020-09-02T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.16',
      promotionDate: new Date('2020-03-16T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.12',
      promotionDate: new Date('2019-09-25T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.8',
      promotionDate: new Date('2019-04-10T12:00:00Z'),
      isActive: false,
    },
    {
      version: '3.4',
      promotionDate: new Date('2018-10-15T12:00:00Z'),
      isActive: false,
    },
    {
      version: '2.18',
      promotionDate: new Date('2018-02-14T04:46:38.701Z'),
      isActive: false,
    },
    {
      version: '2.16',
      promotionDate: new Date('2017-11-20T12:00:00Z'),
      isActive: false,
    },
    {
      version: '2.12',
      promotionDate: new Date('2017-04-29T12:00:00Z'),
      isActive: false,
    },
    {
      version: '2.8',
      promotionDate: new Date('2016-10-17T12:00:00Z'),
      isActive: false,
    },
    {
      version: '2.4',
      promotionDate: new Date('2016-04-11T12:00:00Z'),
      isActive: false,
    },
  ];
}
