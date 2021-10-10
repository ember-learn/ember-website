import Controller from '@ember/controller';
import {
  HorizontalBarChart,
  SplineChart,
  VerticalBarChart,
} from 'ember-website/utils/highcharts';

var emberOrange = '#f23818',
  darkGrayColor = '#4b4b4b',
  lightGrayColor = '#c0c0c0',
  lighterGrayColor = '#dedede',
  lightGreenColor = '#489a6e';
var color2015 = lighterGrayColor;
var color2016 = lightGrayColor;
var color2017 = darkGrayColor;
var color2018 = emberOrange;
var colorFutureYear = lightGreenColor;

const communityParticipation = new HorizontalBarChart({
  chart: {
    categories: [
      'Writing RFCs',
      'Commenting on RFCs',
      'Reading RFCs',
      'Opening PRs',
      'Stack Overflow',
      'emberjs.com blog',
    ],
    subtitle: 'Movers and Shakers from Last Year',
    title: 'How do you stay up to date with Ember?',
  },

  rawData: [
    {
      color: color2017,
      label: '2017',
      values: [1.9, 5.2, 33.3, 16.4, 41.6, 49.8],
    },
    {
      color: color2018,
      label: '2018',
      values: [3.0, 9.8, 52.2, 23.8, 34.2, 57.8],
    },
  ],
});

const longLivedCodebases = new VerticalBarChart({
  chart: {
    title: 'Do you maintain an app started between March 2014 and March 2015?',
    subtitle:
      'Percent of Survey Participants Currently Maintaining an Ember App Created in 2014',
  },

  rawData: [
    {
      color: color2015,
      label: '2015',
      values: [79.5],
    },
    {
      color: color2016,
      label: '2016',
      values: [38.6],
    },
    {
      color: color2017,
      label: '2017',
      values: [34.3],
    },
    {
      color: color2018,
      label: '2018',
      values: [31.3],
    },
  ],
});

const serverSide = new VerticalBarChart({
  chart: {
    categories: [
      'Ruby',
      'Java',
      'JavaScript',
      'Python',
      '.NET',
      'PHP',
      'Elixir / Erlang',
      'Go',
      'Scala',
      'TypeScript',
    ],
    title: 'What is the primary language of your server-side stack?',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [41, 17, 24, 12, 8, 13, 6, 5, 2, 0],
    },
    {
      color: color2017,
      label: '2017',
      values: [36.97, 20.57, 24.54, 13.5, 8.71, 12.43, 7.95, 6.44, 2.65, 1.58],
    },
    {
      color: color2018,
      label: '2018',
      values: [33.7, 26.4, 22.1, 11.9, 10.5, 10.3, 9.2, 6.5, 2.6, 2.6],
    },
  ],
});

const serverSideFrameworks = new VerticalBarChart({
  chart: {
    categories: [
      'Rails (Ruby)',
      'Express (JavaScript)',
      'Phoenix (Elixir)',
      'Spring / Spring Boot (Java)',
      'Django (Python)',
      'MVC (.NET)',
      'None*',
      'Flask (Python)',
    ],
    title: 'Which server-side framework(s) do you use?',
    subtitle: 'Top 8',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [46.1, 25.8, 10.6, 11.0, 9, 7.6, 0, 5.7],
    },
    {
      color: color2017,
      label: '2017',
      values: [37.9, 20.4, 10.1, 8.8, 10.0, 6.2, 0, 5.8],
    },
    {
      color: color2018,
      label: '2018',
      values: [35.0, 21.6, 12.5, 20.5, 8.2, 7.7, 7.6, 5.7],
    },
  ],
});

const browserRequirements = new VerticalBarChart({
  chart: {
    categories: ['Modern browsers', 'Mobile browsers', 'IE 11', 'IE 10'],
    title: 'Which browser versions do your applications target?',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [93.6, 49.0, 39.6, 27.7],
    },
    {
      color: color2017,
      label: '2017',
      values: [94.26, 44.2, 38.5, 19.2],
    },
    {
      color: color2018,
      label: '2018',
      values: [96.5, 52, 45.8, 10.1],
    },
    {
      label: 'Expected for 2019',
      color: colorFutureYear,
      values: [97.7, 57.3, 29.7, 3.7],
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
      color: color2018,
      label: '2018',
      values: [
        100 * (25 / 1269),
        100 * (14 / 1269),
        100 * (22 / 1269),
        100 * (17 / 1269),
        100 * (42 / 1269),
        100 * (58 / 1269),
        100 * (144 / 1269),
        100 * (307 / 1269),
        100 * (195 / 1269),
        100 * (445 / 1269),
      ],
    },
  ],
});

const editorTool = new VerticalBarChart({
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
      color: color2016,
      label: '2016',
      values: [39, 39.2, 29.24, 20.6, 6, 3.9, 5, 3.2],
    },
    {
      color: color2017,
      label: '2017',
      values: [38.11, 26.56, 26.37, 21.08, 19.31, 4.04, 3.97, 2.27],
    },
    {
      color: color2018,
      label: '2018',
      values: [28.2, 20.3, 20.5, 19, 37.9, 3.5, 0, 1.9],
    },
  ],
});

const productionApps = new VerticalBarChart({
  chart: {
    categories: [
      'Prototypes only',
      'Tens of users',
      'Hundreds of users',
      'Thousands of users',
      '10s of Thousands of users',
      '100s of Thousands of users',
      'Millions of users',
    ],
    title:
      'Which of these best describes your use of Ember in production applications?',
    subtitle: '2018 Results Only',
  },

  rawData: [
    {
      color: color2018,
      label: '2018',
      values: [9.1, 23.3, 34.5, 30.7, 17.7, 11.1, 9.8],
    },
  ],
});

const emberenoEmployment = new HorizontalBarChart({
  chart: {
    categories: [
      'Working on product(s)',
      'In a firm doing consulting/client work',
      'Working on internal Ember tooling/products',
      'Independent Product Developer',
    ],
    subtitle: 'Top 4 Responses, Year by Year',
    title: 'What Best Describes Your Employment Situation?',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [59.3, 15.1, 23.4, 16.3],
    },
    {
      color: color2017,
      label: '2017',
      values: [74.8, 14.1, 12.8, 13.7],
    },
    {
      color: color2018,
      label: '2018',
      values: [80.2, 12.7, 11.8, 10.6],
    },
  ],
});

const applicationUsers = new VerticalBarChart({
  chart: {
    categories: ['B2B', 'B2C', 'Internal users'],
    title: 'Who uses your applications?',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [62.6, 48.6, 43.8],
    },
    {
      color: color2017,
      label: '2017',
      values: [65.6, 49, 39],
    },
    {
      color: color2018,
      label: '2018',
      values: [69.5, 49.4, 39.9],
    },
  ],
});

const teamSize = new VerticalBarChart({
  chart: {
    categories: ['None', '1–10', '11–20', '21–50', '51–100', 'More than 100'],
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
    {
      color: color2017,
      label: '2017',
      values: [8.7, 69.8, 6.8, 4.8, 2.5, 2],
    },
    {
      color: color2018,
      label: '2018',
      values: [7.2, 62.5, 9.4, 5.3, 3.9, 6.4],
    },
  ],
});

const employerUsingEmber = new VerticalBarChart({
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
      color: color2017,
      label: '2017',
      values: [53.63, 38.74, 6.56],
    },
    {
      color: color2018,
      label: '2018',
      values: [43.1, 52.3, 4.5],
    },
  ],
});

const gettingHired = new VerticalBarChart({
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
      color: color2017,
      label: '2017',
      values: [47.13, 25.49, 12.87, 12.87],
    },
    {
      color: color2018,
      label: '2018',
      values: [40.9, 27.2, 18.1, 13.8],
    },
  ],
});

const demographicsRegion = new VerticalBarChart({
  chart: {
    categories: [
      'North America',
      'Europe',
      'Asia',
      'Oceania',
      'South America',
      'Africa',
      'Central America',
      'Other',
    ],
    title: 'In which region do you live?',
  },

  rawData: [
    {
      color: color2018,
      label: '2018',
      values: [53.7, 32.7, 7.8, 3.4, 3.2, 0.5, 0.5, 0.4],
    },
  ],
});

const newReleaseAdoption = new SplineChart({
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
      '2.13',
      '2.14',
      '2.15',
      '2.16',
      '2.17',
      '2.18',
      '3.0',
    ],
    title: 'Which versions of Ember are used in your apps?',
  },

  rawData: [
    {
      color: color2015,
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
        null, // '2.13'
        null, // '2.14'
        null, // '2.15'
        null, // '2.16'
        null, // '2.17'
        null, // '2.18'
        null, // '3.0'
      ],
    },
    {
      color: color2016,
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
        null, // '2.13'
        null, // '2.14'
        null, // '2.15'
        null, // '2.16'
        null, // '2.17'
        null, // '2.18'
        null, // '3.0'
      ],
    },
    {
      color: color2017,
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
        null, // '2.13'
        null, // '2.14'
        null, // '2.15'
        null, // '2.16'
        null, // '2.17'
        null, // '2.18'
        null, // '3.0'
      ],
    },
    {
      color: color2018,
      label: '2018',
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
        null, // '1.13'
        null, // '2.0'
        null, // '2.1'
        null, // '2.2'
        null, // '2.3'
        null, // '2.4'
        null, // '2.5'
        8.6, // '2.6' (2.0-2.6)
        1.5, // '2.7'
        7.1, // '2.8'
        2.1, // '2.9'
        2.8, // '2.10'
        2.7, // '2.11'
        11.6, // '2.12'
        7.1, // '2.13'
        8.1, // '2.14'
        6.7, // '2.15'
        23.8, // '2.16'
        9.4, // '2.17'
        43.8, // '2.18'
        28.2, // '3.0'
      ],
    },
  ],
});

const emberDataAdoption = new SplineChart({
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
      '2.13',
      '2.14',
      '2.15',
      '2.16',
      '2.17',
      '2.18',
      '3.0',
    ],
    title: 'Which versions of Ember Data are used in your apps?',
  },

  rawData: [
    {
      color: color2016,
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
        null, // '2.13'
        null, // '2.14'
        null, // '2.15'
        null, // '2.16'
        null, // '2.17'
        null, // '2.18'
        null, // '3.0'
      ],
    },
    {
      color: color2017,
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
        null, // '2.13'
        null, // '2.14'
        null, // '2.15'
        null, // '2.16'
        null, // '2.17'
        null, // '2.18'
        null, // '3.0'
      ],
    },
    {
      color: color2018,
      label: '2018',
      values: [
        null, // '1.13'
        null, // '2.0'
        null, // '2.1'
        null, // '2.2'
        null, // '2.3'
        null, // '2.4'
        null, // '2.5'
        5.9, // '2.6' (2.0-2.6)
        1, // '2.7'
        5.2, // '2.8'
        2, // '2.9'
        2.3, // '2.10'
        2.5, // '2.11'
        12.5, // '2.12'
        6.2, // '2.13'
        6.2, // '2.14'
        0, // '2.15'
        17.2, // '2.16'
        6.8, // '2.17'
        35.8, // '2.18'
        21.5, // '3.0'
      ],
    },
  ],
});

export default class Survey2018Controller extends Controller {
  newReleaseAdoption = newReleaseAdoption;
  emberDataAdoption = emberDataAdoption;
  recommendingEmber = recommendingEmber;
  employerUsingEmber = employerUsingEmber;
  gettingHired = gettingHired;
  productionApps = productionApps;
  emberenoEmployment = emberenoEmployment;
  applicationUsers = applicationUsers;
  teamSize = teamSize;
  longLivedCodebases = longLivedCodebases;
  communityParticipation = communityParticipation;
  serverSide = serverSide;
  serverSideFrameworks = serverSideFrameworks;
  editorTool = editorTool;
  browserRequirements = browserRequirements;
  demographicsRegion = demographicsRegion;
}
