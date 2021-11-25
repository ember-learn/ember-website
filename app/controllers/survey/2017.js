import Controller from '@ember/controller';
import { SplineChart, VerticalBarChart } from 'ember-website/utils/highcharts';

const emberOrange = '#f23818';
const darkGrayColor = '#4b4b4b';
const lightGrayColor = '#cccccc';

const chartHowlong = new SplineChart({
  chart: {
    categories: [
      '1.0',
      '1.1',
      '1.2',
      '1.3',
      '1.4',
      '1.5',
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
      '2.5',
      '2.6',
      '2.7',
      '2.8',
      '2.9',
      '2.10',
      '2.11',
      '2.12',
    ],
    title: 'Which versions of Ember are used in your apps?',
  },

  rawData: [
    {
      color: lightGrayColor,
      label: '2015',
      values: [
        3, // '1.0'
        1, // '1.1'
        0.7, // '1.2'
        2, // '1.3'
        2.6, // '1.4'
        3.9, // '1.5'
        6.8, // '1.6'
        15, // '1.7'
        31.7, //'1.8'
        39.5, // '1.9'
        35, // '1.10'
        null, // '1.11'
        null, // '1.12'
        null, // '1.13'
        null, // '2.0'
        null, // '2.1'
        null, // '2.2'
        null, // '2.3'
        null, // '2.4'
        null, // '2.5'
        null, // '2.6'
        null, // '2.7'
        null, // '2.8'
        null, // '2.9'
        null, // '2.10'
        null, // '2.11'
        null, // '2.12'
      ],
    },
    {
      color: darkGrayColor,
      label: '2016',
      values: [
        null, // '1.0'
        null, // '1.1'
        null, // '1.2'
        null, // '1.3'
        null, // '1.4'
        null, // '1.5'
        1.8, // '1.6'
        2.7, // '1.7'
        3.5, //'1.8'
        2.6, // '1.9'
        3.9, // '1.10'
        6, // '1.11'
        5.8, // '1.12'
        36, // '1.13'
        8.2, // '2.0'
        6.3, // '2.1'
        11.5, // '2.2'
        27, // '2.3'
        47, // '2.4'
        null, // '2.5'
        null, // '2.6'
        null, // '2.7'
        null, // '2.8'
        null, // '2.9'
        null, // '2.10'
        null, // '2.11'
        null, // '2.12'
      ],
    },
    {
      color: emberOrange,
      label: '2017',
      values: [
        null, // '1.0'
        null, // '1.1'
        null, // '1.2'
        null, // '1.3'
        null, // '1.4'
        null, // '1.5'
        null, // '1.6'
        null, // '1.7'
        null, //'1.8'
        null, // '1.9'
        null, // '1.10'
        null, // '1.11'
        null, // '1.12'
        14.5, // '1.13'
        3, // '2.0'
        2.1, // '2.1'
        2, // '2.2'
        4.5, // '2.3'
        11.3, // '2.4'
        4.4, // '2.5'
        4.5, // '2.6'
        5.8, // '2.7'
        21.2, // '2.8'
        10, // '2.9'
        22, // '2.10'
        41, // '2.11'
        19.3, // '2.12'
      ],
    },
  ],
});

const chartSnapshotEmberDevelopers = new VerticalBarChart({
  chart: {
    categories: [
      '> 24 months',
      '18–24 months',
      '12–18 months',
      '9–12 months',
      '6–9 months',
      '3–6 months',
      'Less than 3 months',
    ],
    title: 'How long have you been working with Ember?',
  },

  rawData: [
    {
      color: lightGrayColor,
      label: '2015',
      values: [12.5, 10.8, 20.9, 13, 10.5, 13.1, 14.6],
    },
    {
      color: darkGrayColor,
      label: '2016',
      values: [27, 16, 16, 9, 9, 10, 10],
    },
    {
      color: emberOrange,
      label: '2017',
      values: [44, 15, 14, 7, 7, 6.4, 6.3],
    },
  ],
});

const employmentSituation = new VerticalBarChart({
  chart: {
    categories: [
      'Working on product',
      'Doing consultant/client work',
      'Independent product developer',
      'Independent consultant',
      'Internal ember products',
    ],
    title: 'What best describes your employment situation?',
  },

  rawData: [
    {
      color: lightGrayColor,
      label: '2015',
      values: [67.3, 22.8, 24.4, 13.4, 0],
    },
    {
      color: darkGrayColor,
      label: '2016',
      values: [59, 15, 16, 11, 23],
    },
    {
      color: emberOrange,
      label: '2017',
      values: [74.2, 13.9, 13.6, 10.4, 12.7],
    },
  ],
});

const emberDevelopers = new VerticalBarChart({
  chart: {
    categories: ['None', '1–10', '11–20', '21–50', '51–100', 'More than 100'],
    title: 'How many developers at your company work with Ember?',
  },

  rawData: [
    {
      color: lightGrayColor,
      label: '2015',
      values: [15.5, 78, 3.7, 1.7, 0.8, 0.3],
    },
    {
      color: darkGrayColor,
      label: '2016',
      values: [12, 74, 6, 4, 2, 1],
    },
    {
      color: emberOrange,
      label: '2017',
      values: [8.7, 69.8, 6.8, 4.8, 2.5, 2],
    },
  ],
});

const longLived = new VerticalBarChart({
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
      color: lightGrayColor,
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
      color: darkGrayColor,
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
    {
      color: emberOrange,
      label: '2017',
      values: [
        33.7, // '> 24 Months',
        22, // '18–24 Months',
        15.8, // '12–18 Months',
        13.7, // '9–12 Months',
        13, // '6–9 Months',
        15.8, // '3–6 Months',
        19.8, // '< 3 Months',
      ],
    },
  ],
});

const serverLanguage = new VerticalBarChart({
  chart: {
    categories: [
      'Ruby',
      'JavaScript',
      'Java',
      'PHP',
      'Python',
      '.NET',
      'Elixir / Erlang',
      'Go',
      'Scala',
      'TypeScript',
      'C++',
      'Rust',
      'Other',
    ],
    title: 'What is the primary language of your server-side stack?',
  },

  rawData: [
    {
      color: darkGrayColor,
      label: '2016',
      values: [41, 24, 17, 13, 12, 8, 6, 5, 2, 0, 0, 1, 3],
    },
    {
      color: emberOrange,
      label: '2017',
      values: [
        36.97, 24.54, 20.57, 12.43, 13.5, 8.71, 7.95, 6.44, 2.65, 1.58, 1.2, 0,
        2.97,
      ],
    },
  ],
});

const browserRequirements = new VerticalBarChart({
  chart: {
    categories: [
      'Modern browsers',
      'Mobile browsers',
      'IE 11',
      'IE 10',
      'Legacy Chrome, Firefox, Safari, etc.',
      'IE 9',
      'IE 8',
    ],
    title: 'Which browser versions do your applications target?',
  },

  rawData: [
    {
      color: lightGrayColor,
      label: '2016',
      values: [94, 49, 40, 28, 13, 12, 3],
    },
    {
      color: darkGrayColor,
      label: '2017',
      values: [94.26, 43.22, 37.67, 18.8, 9.15, 6.37, 1.39],
    },
    {
      color: emberOrange,
      label: 'What is expected next year?',
      values: [93.69, 51.36, 28.26, 9.84, 7.82, 2.9, 0.76],
    },
  ],
});

const recommendingEmber = new VerticalBarChart({
  chart: {
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    subtitle: '1 = Unlikely, 10 = Likely',
    title: 'How likely are you to recommend Ember?',
  },

  rawData: [
    {
      color: emberOrange,
      label: '2017',
      values: [
        100 * (19 / 1561),
        100 * (12 / 1561),
        100 * (23 / 1561),
        100 * (26 / 1561),
        100 * (32 / 1561),
        100 * (79 / 1561),
        100 * (177 / 1561),
        100 * (350 / 1561),
        100 * (265 / 1561),
        100 * (578 / 1561),
      ],
    },
  ],
});

const textEditor = new VerticalBarChart({
  chart: {
    categories: [
      'Atom',
      'Sublime Text',
      'Vim',
      'WebStorm / IntelliJ',
      'VS Code',
      'Emacs',
      'Visual Studio',
      'Notepad++',
    ],
    title: 'What is your preferred text editor?',
  },

  rawData: [
    {
      color: darkGrayColor,
      label: '2016',
      values: [39, 39.2, 29.24, 20.6, 6, 3.9, 5, 3.2],
    },
    {
      color: emberOrange,
      label: '2017',
      values: [38.11, 26.56, 26.37, 21.08, 19.31, 4.04, 3.97, 2.27],
    },
  ],
});

const productionUsers = new VerticalBarChart({
  chart: {
    categories: [
      'Prototypes only',
      'Tens of users',
      'Hundreds of users',
      'Thousands of users',
      'Millions of users',
    ],
    title:
      'Which of these best describes your use of Ember in production applications?',
  },

  rawData: [
    {
      color: darkGrayColor,
      label: '2016',
      values: [15.11, 26.2, 34.2, 39.6, 8.2],
    },
    {
      color: emberOrange,
      label: '2017',
      values: [12.24, 24.42, 36.85, 42.4, 9.27],
    },
  ],
});

const whenStarting = new VerticalBarChart({
  chart: {
    categories: [
      'My employer was not using Ember',
      'My employer was already using Ember',
      'Does not apply (e.g. I am a student)',
    ],
    title: 'When starting your most recent job...',
  },

  rawData: [
    {
      color: emberOrange,
      label: '2017',
      values: [53.63, 38.74, 6.56],
    },
  ],
});

const preExistingKnowledge = new VerticalBarChart({
  chart: {
    categories: [
      'I did not know Ember',
      'Unimportant',
      'Very important',
      'Important',
    ],
    title:
      'When getting hired to your most recent job, your pre-existing knowledge of Ember was...',
  },

  rawData: [
    {
      color: emberOrange,
      label: '2017',
      values: [47.13, 25.49, 12.87, 12.87],
    },
  ],
});

const demographics = new VerticalBarChart({
  chart: {
    categories: [
      'North America',
      'Europe',
      'Asia',
      'Oceania',
      'South America',
      'Africa',
      'Central America',
    ],
    title: 'In which region do you live?',
  },

  rawData: [
    {
      color: emberOrange,
      label: '2017',
      values: [49, 33.6, 7.8, 3.7, 3.5, 0.8, 0.4],
    },
  ],
});

const priorVersionsData = new SplineChart({
  chart: {
    categories: [
      '1.13',
      '2.0',
      '2.1',
      '2.2',
      '2.3',
      '2.4',
      '2.5',
      '2.6',
      '2.7',
      '2.8',
      '2.9',
      '2.10',
      '2.11',
      '2.12',
    ],
    title: 'Which versions of Ember Data are used in your apps?',
  },

  rawData: [
    {
      color: darkGrayColor,
      label: '2016',
      values: [
        27, // '1.13'
        6, // '2.0'
        4, // '2.1'
        8, // '2.2'
        21, // '2.3'
        42, // '2.4'
        null, // '2.5'
        null, // '2.6'
        null, // '2.7'
        null, // '2.8'
        null, // '2.9'
        null, // '2.10'
        null, // '2.11'
        null, // '2.12'
      ],
    },
    {
      color: emberOrange,
      label: '2017',
      values: [
        9, // '1.13'
        2.15, // '2.0'
        2.1, // '2.1'
        1.5, // '2.2'
        2.8, // '2.3'
        7, // '2.4'
        3, // '2.5'
        4, // '2.6'
        4, // '2.7'
        13.8, // '2.8'
        7, // '2.9'
        21.6, // '2.10'
        34.9, // '2.11'
        17, // '2.12'
      ],
    },
  ],
});

export default class Survey2017Controller extends Controller {
  chartHowlong = chartHowlong;
  chartSnapshotEmberDevelopers = chartSnapshotEmberDevelopers;
  priorVersionsData = priorVersionsData;
  recommendingEmber = recommendingEmber;
  whenStarting = whenStarting;
  preExistingKnowledge = preExistingKnowledge;
  employmentSituation = employmentSituation;
  emberDevelopers = emberDevelopers;
  productionUsers = productionUsers;
  longLived = longLived;
  serverLanguage = serverLanguage;
  textEditor = textEditor;
  browserRequirements = browserRequirements;
  demographics = demographics;
}
