import Controller from '@ember/controller';

export default class ReleasesLtsController extends Controller {
  // promotion date should be the day of the release of the following ember minor version
  // you can run `npm info ember-source time` to see a list
  emberLtsReleases = [
    {
      version: '5.8',
      promotionDate: new Date('2024-06-03'),
      isActive: true,
    },
    {
      version: '5.4',
      promotionDate: new Date('2023-12-11'),
      isActive: true,
    },
    {
      version: '4.12',
      promotionDate: new Date('2023-05-14'),
      isActive: false,
    },
    {
      version: '4.8',
      promotionDate: new Date('2022-12-08'),
      isActive: false,
    },
    {
      version: '4.4',
      promotionDate: new Date('2022-07-13'),
      isActive: false,
    },
    {
      version: '3.28',
      promotionDate: new Date('2021-12-20'),
      isActive: false,
    },
    {
      version: '3.24',
      promotionDate: new Date('2021-02-25'),
      isActive: false,
    },
    {
      version: '3.20',
      promotionDate: new Date('2020-09-02'),
      isActive: false,
    },
    {
      version: '3.16',
      promotionDate: new Date('2020-03-16'),
      isActive: false,
    },
    {
      version: '3.12',
      promotionDate: new Date('2019-09-25'),
      isActive: false,
    },
    {
      version: '3.8',
      promotionDate: new Date('2019-04-10'),
      isActive: false,
    },
    {
      version: '3.4',
      promotionDate: new Date('2018-10-15'),
      isActive: false,
    },
    {
      version: '2.18',
      promotionDate: new Date('2018-02-14'),
      isActive: false,
    },
    {
      version: '2.16',
      promotionDate: new Date('2017-11-20'),
      isActive: false,
    },
    {
      version: '2.12',
      promotionDate: new Date('2017-04-29'),
      isActive: false,
    },
    {
      version: '2.8',
      promotionDate: new Date('2016-10-17'),
      isActive: false,
    },
    {
      version: '2.4',
      promotionDate: new Date('2016-04-11'),
      isActive: false,
    },
  ];

  dataLtsReleases = [
    {
      version: '5.3',
      promotionDate: new Date('2023-12-10'),
      isActive: true,
    },
    {
      version: '4.12',
      promotionDate: new Date('2023-05-14'),
      isActive: true,
    },
    {
      version: '4.8',
      promotionDate: new Date('2022-12-08'),
      isActive: false,
    },
    {
      version: '4.4',
      promotionDate: new Date('2022-07-13'),
      isActive: false,
    },
    {
      version: '3.28',
      promotionDate: new Date('2021-12-20'),
      isActive: false,
    },
    {
      version: '3.24',
      promotionDate: new Date('2021-02-25'),
      isActive: false,
    },
    {
      version: '3.20',
      promotionDate: new Date('2020-09-02'),
      isActive: false,
    },
    {
      version: '3.16',
      promotionDate: new Date('2020-03-16'),
      isActive: false,
    },
    {
      version: '3.12',
      promotionDate: new Date('2019-09-25'),
      isActive: false,
    },
    {
      version: '3.8',
      promotionDate: new Date('2019-04-10'),
      isActive: false,
    },
    {
      version: '3.4',
      promotionDate: new Date('2018-10-15'),
      isActive: false,
    },
    {
      version: '2.18',
      promotionDate: new Date('2018-02-14'),
      isActive: false,
    },
    {
      version: '2.16',
      promotionDate: new Date('2017-11-20'),
      isActive: false,
    },
    {
      version: '2.12',
      promotionDate: new Date('2017-04-29'),
      isActive: false,
    },
    {
      version: '2.8',
      promotionDate: new Date('2016-10-17'),
      isActive: false,
    },
    {
      version: '2.4',
      promotionDate: new Date('2016-04-11'),
      isActive: false,
    },
  ];
}
