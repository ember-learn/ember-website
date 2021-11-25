import Controller from '@ember/controller';
import { VerticalBarChart } from 'ember-website/utils/highcharts';

const color2015 = '#CCCCCC';
const color2016 = '#F23818';

const chartHowlong = new VerticalBarChart({
  chart: {
    categories: [
      '> 24 months',
      '18–24 months',
      '12–18 months',
      '9–12 monts',
      '6–9 months',
      '3–6 months',
      'Less than 3 months',
    ],
  },

  rawData: [
    {
      color: color2015,
      label: '2015',
      values: [12.5, 10.8, 20.9, 13, 10.5, 13.1, 14.6],
    },
    {
      color: color2016,
      label: '2016',
      values: [27, 16, 16, 9, 9, 10, 10],
    },
  ],
});

const chartEmberAtTheOffice = [
  new VerticalBarChart({
    chart: {
      categories: [
        'Working on product',
        'Doing consultant / client work',
        'Independent product developer',
        'Independent consultant',
        'Internal ember products',
      ],
      title: 'What best describes your employment situation:',
    },

    rawData: [
      {
        color: color2015,
        label: '2015',
        values: [67.3, 22.8, 24.4, 13.4, 0],
      },
      {
        color: color2016,
        label: '2016',
        values: [59, 15, 16, 11, 23],
      },
    ],
  }),

  new VerticalBarChart({
    chart: {
      categories: ['None', '1–10', '10–20', '20–50', '50–100', 'More than 100'],
      title: 'How many developers at your company work with Ember?',
    },

    rawData: [
      {
        color: color2015,
        label: '2015',
        values: [15.5, 78, 3.7, 1.7, 0.8, 0.3],
      },
      {
        color: color2016,
        label: '2016',
        values: [12, 74, 6, 4, 2, 1],
      },
    ],
  }),
];

const chartNewReleaseAdoptionEmber = new VerticalBarChart({
  chart: {
    categories: [
      'Pre 1.6',
      '1.6',
      '1.7',
      '1.8',
      '1.9',
      '1.10',
      '1.11',
      '1.12',
      '1.13',
      '2.0',
      '2.1',
      '2.2',
      '2.3',
      '2.4',
      '2.5 Beta',
      'Canary (master)',
      'Custom Fork',
      "I don't know",
    ],
    title: 'Which version(s) of Ember are used in your apps?',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [
        4, // 'Pre 1.6',
        2, // '1.6',
        3, // '1.7',
        4, // '1.8',
        3, // '1.9',
        4, // '1.10',
        6, // '1.11',
        6, // '1.12',
        36, // '1.13',
        8, // '2.0',
        6, // '2.1',
        12, // '2.2',
        27, // '2.3',
        47, // '2.4',
        3, // '2.5 Beta',
        2, // 'Canary (master)',
        1, // 'Custom Fork',
        3, // 'I don\'t know',
      ],
    },
  ],
});

const chartNewReleaseAdoptionEmberData = new VerticalBarChart({
  chart: {
    categories: [
      'Pre 1.13',
      '1.13',
      '2.0',
      '2.1',
      '2.2',
      '2.3',
      '2.4',
      '2.5 Beta',
      'Canary (master)',
      'Custom Fork',
      "I don't know",
    ],
    title: 'Ember Data',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [
        11, // 'Pre 1.13',
        27, // '1.13',
        6, // '2.0',
        4, // '2.1',
        8, // '2.2',
        21, // '2.3',
        42, // '2.4',
        3, // '2.5 Beta',
        2, // 'Canary (master)',
        0, // 'Custom Fork',
        5, // 'I don\'t know',
      ],
    },
  ],
});

const chartLongLivedCodebases = new VerticalBarChart({
  chart: {
    categories: [
      '> 24 Months',
      '18–24 Months',
      '12–18 Months',
      '9–12 Months',
      '6–9 Months',
      '3–6 Months',
      '< 3 Months',
    ],
    title: 'How old are your Ember applications?',
  },

  rawData: [
    {
      color: color2015,
      label: '2015',
      values: [
        1.9, // '> 24 Months',
        9.2, // '18–24 Months',
        18.4, // '12–18 Months',
        20, // '9–12 Months',
        20, // '6–9 Months',
        25.8, // '3–6 Months',
        38.8, // '< 3 Months',
      ],
    },
    {
      color: color2016,
      label: '2016',
      values: [
        15, // '> 24 Months',
        16, // '18–24 Months',
        23, // '12–18 Months',
        21, // '9–12 Months',
        18, // '6–9 Months',
        20, // '3–6 Months',
        27, // '< 3 Months',
      ],
    },
  ],
});

const chartServerSide = [
  new VerticalBarChart({
    chart: {
      categories: [
        'Ruby',
        'Javascript',
        'Java',
        'PHP',
        'Python',
        '.NET',
        'Elixir/Erlang',
        'Go',
        'Scala',
        'Rust',
        'Other',
      ],
      title: 'What is the primary language of your server-side stack?',
    },

    rawData: [
      {
        color: color2016,
        label: '2016',
        values: [
          41, // 'Ruby',
          24, // 'Javascript',
          17, // 'Java',
          13, // 'PHP',
          12, // 'Python',
          8, // '.NET',
          6, // 'Elixir/Erlang',
          5, // 'Go',
          2, // 'Scala',
          1, // 'Rust',
          3, // 'Other',
        ],
      },
    ],
  }),

  new VerticalBarChart({
    chart: {
      categories: [
        'Ruby',
        'Javascript',
        'Java',
        'PHP',
        'Python',
        '.NET',
        'Elixir/Erlang',
        'Go',
        'Scala',
        'Rust',
        'Other',
      ],
      title: 'What are your preferred server-side languages',
    },

    rawData: [
      {
        color: color2016,
        label: '2016',
        values: [
          49, // 'Ruby',
          47, // 'Javascript',
          16, // 'Java',
          17, // 'PHP',
          17, // 'Python',
          9, // '.NET',
          15, // 'Elixir/Erlang',
          9, // 'Go',
          3, // 'Scala',
          4, // 'Rust',
          3, // 'Other',
        ],
      },
    ],
  }),
];

const chartBrowserSuppor = [
  new VerticalBarChart({
    chart: {
      categories: [
        'Modern browsers (last two versions)',
        'Mobile browsers',
        'IE 11',
        'IE 10',
        'Legacy Chrome, Firefox, Safari',
        'IE 9',
        'IE 8',
      ],
      title: 'What browsers do Ember apps support?',
    },

    rawData: [
      {
        color: color2016,
        label: '2016',
        values: [
          94, // 'Modern browsers (last two versions)',
          49, // 'Mobile browsers',
          40, // 'IE 11',
          28, // 'IE 10',
          13, // 'Legacy Chrome, Firefox, Safari',
          12, // 'IE 9',
          3, // 'IE 8',
        ],
      },
    ],
  }),

  new VerticalBarChart({
    chart: {
      categories: [
        'Modern browsers (last two versions)',
        'Mobile browsers',
        'IE 11',
        'IE 10',
        'Legacy Chrome, Firefox, Safari',
        'IE 9',
        'IE 8',
      ],
      title: 'What will they support next year?',
    },

    rawData: [
      {
        color: color2016,
        label: '2016',
        values: [
          94, // 'Modern browsers (last two versions)',
          57, // 'Mobile browsers',
          35, // 'IE 11',
          15, // 'IE 10',
          11, // 'Legacy Chrome, Firefox, Safari',
          4, // 'IE 9',
          1, // 'IE 8',
        ],
      },
    ],
  }),
];

const chartEmberEcosystem = [
  new VerticalBarChart({
    chart: {
      categories: ['0', '1–3', '4–6', '> 6'],
      title: 'Number of addons written per participant',
    },

    rawData: [
      {
        color: color2016,
        label: '2016',
        values: [
          48, // '0',
          36, // '1–3',
          8, // '4–6',
          8, // '> 6',
        ],
      },
    ],
  }),

  new VerticalBarChart({
    chart: {
      categories: ['All', 'Some', 'None', 'Unknown'],
      title: 'Are your addons unit tested?',
    },

    rawData: [
      {
        color: color2015,
        label: '2015',
        values: [
          15.6, // 'All',
          22.1, // 'Some',
          48, // 'None',
          14.3, // 'I\'m not sure how to do this',
        ],
      },
      {
        color: color2016,
        label: '2016',
        values: [
          23, // 'All',
          27, // 'Some',
          36, // 'None',
          14, // 'I\'m not sure how to do this',
        ],
      },
    ],
  }),
];

const chartSEO = new VerticalBarChart({
  chart: {
    categories: [
      'App is private, behind authentication flow, or this question generally does not apply',
      "Google's Javascript Execution",
      "Our app is indexable, but I don't know how",
      'phantomjs or other pre-rendering (including Prerender.io)',
      'FastBoot or other use of the "visit" API',
      'noscript tags',
    ],
    title: 'What method do you rely on for search engine indexing?',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [
        73, // 'App is private,...',
        16, // 'Google\'s Javascript Execution',
        12, // 'Our app is indexable, but I don\'t know how',
        7, // 'phantomjs or other pre-rendering (including Prerender.io)',
        5, // 'FastBoot or other use of the "visit" API',
        3, // 'noscript tags',
      ],
    },
  ],
});

export default class Survey2016Controller extends Controller {
  chartHowlong = chartHowlong;
  chartEmberAtTheOffice = chartEmberAtTheOffice;
  chartNewReleaseAdoptionEmber = chartNewReleaseAdoptionEmber;
  chartNewReleaseAdoptionEmberData = chartNewReleaseAdoptionEmberData;
  chartServerSide = chartServerSide;
  chartLongLivedCodebases = chartLongLivedCodebases;
  chartBrowserSuppor = chartBrowserSuppor;
  chartEmberEcosystem = chartEmberEcosystem;
  chartSEO = chartSEO;
}
