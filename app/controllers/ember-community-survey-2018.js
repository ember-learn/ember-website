import Controller from '@ember/controller';
import {
  HorizontalBarChart,
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

const overallAdoption = new VerticalBarChart({
  chart: {
    categories: [
      'Pre 1.13',
      '1.13',
      '2.0',
      '2.1',
      '2.2',
      '2.3',
      '2.4 LTS',
      '2.5',
      '2.6',
      '2.7',
      '2.8 LTS',
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
    title: 'Breakdown of Ember use by Version',
  },

  rawData: [
    {
      color: lightGrayColor,
      label: '2016',
      values: [
        4 + 2 + 3 + 4 + 3 + 4 + 6 + 6,
        36,
        8,
        6,
        12,
        27,
        47,
        3,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
    },
    {
      color: darkGrayColor,
      label: '2017',
      values: [
        9.46,
        14.45,
        2.97,
        2.1,
        2.02,
        4.48,
        11.29,
        4.35,
        4.48,
        5.8,
        21.2,
        10.09,
        21.6,
        40.88,
        19.31,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
    },
    {
      color: emberOrange,
      label: '2018',
      values: [
        5,
        7.8,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1.4,
        7,
        2,
        2.7,
        2.7,
        11.4, // 2.12
        7,
        8,
        6.6,
        23.5, // 2.16
        9.3,
        43.2,
        27.8, // 3.0
      ],
    },
  ],
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

function makeVersionChart(versionData, title) {
  var seriesData = [];

  for (var i = 0; i < versionData.length; ++i) {
    var _series = {
      name: versionData[i].year,
      type: 'spline',
      data: versionData[i].data.map(function (d) {
        return d && d.value;
      }),
    };
    if (versionData[i].color) {
      _series.color = versionData[i].color;
    }
    seriesData.push(_series);
  }

  return {
    options: {
      title: { text: title },
      subtitle: { text: '' },
      tooltip: {
        shared: true,
        crosshairs: true,
        formatter: function () {
          var releasesPrior = +this.x;
          var s =
            '<b>' +
            +this.x +
            ' Release' +
            (releasesPrior !== 1 ? 's' : '') +
            ' Prior to Survey</b>';
          for (var i = 0; i < this.points.length; ++i) {
            var point = this.points[i],
              seriesName = point.series.name;
            s +=
              '<br/><span style="color:' +
              point.color +
              '">●</span>' +
              seriesName +
              ': ';
            var labels;
            for (var j = 0; j < versionData.length; ++j) {
              if (versionData[j].year === seriesName) {
                labels = versionData[j].data;
              }
            }
            var label = labels[labels.length - 1 - releasesPrior].label;
            s += label + ' Release (' + point.y + '%)';
          }
          return s;
        },
      },
      plotOptions: { series: { marker: { enabled: false } } },
      yAxis: {
        title: { text: 'Percent' },
      },
      xAxis: {
        categories: [
          '13',
          '12',
          '11',
          '10',
          '9',
          '8',
          '7',
          '6',
          '5',
          '4',
          '3',
          '2',
          '1',
          '0',
        ],
        title: {
          text: 'Releases Prior to Survey',
        },
      },
    },
    data: seriesData,
  };
}

var emberVersionData = [
  {
    year: '2015',
    color: color2015,
    data: [
      null,
      null,
      null,
      { value: 3, label: '1.0' },
      { value: 1, label: '1.1' },
      { value: 0.7, label: '1.2' },
      { value: 2, label: '1.3' },
      { value: 2.6, label: '1.4' },
      { value: 3.9, label: '1.5' },
      { value: 6.8, label: '1.6' },
      { value: 15, label: '1.7' },
      { value: 31.7, label: '1.8' },
      { value: 39.5, label: '1.9' },
      { value: 35, label: '1.10' },
    ],
  },
  {
    year: '2016',
    color: color2016,
    data: [
      { value: 1.8, label: '1.6' },
      { value: 2.7, label: '1.7' },
      { value: 3.5, label: '1.8' },
      { value: 2.6, label: '1.9' },
      { value: 3.9, label: '1.10' },
      { value: 6, label: '1.11' },
      { value: 5.8, label: '1.12' },
      { value: 36, label: '1.13 LTS' },
      { value: 8.2, label: '2.0' },
      { value: 6.3, label: '2.1' },
      { value: 11.5, label: '2.2' },
      { value: 27, label: '2.3' },
      { value: 47, label: '2.4 LTS' },
      null,
    ],
  },
  {
    year: '2017',
    color: color2017,
    data: [
      { value: 14.5, label: '1.13 LTS' },
      { value: 3, label: '2.0' },
      { value: 2.1, label: '2.1' },
      { value: 2, label: '2.2' },
      { value: 4.5, label: '2.3' },
      { value: 11.3, label: '2.4 LTS' },
      { value: 4.4, label: '2.5' },
      { value: 4.5, label: '2.6' },
      { value: 5.8, label: '2.7' },
      { value: 21.2, label: '2.8 LTS' },
      { value: 10, label: '2.9' },
      { value: 22, label: '2.10' },
      { value: 41, label: '2.11' },
      { value: 19.3, label: '2.12 LTS' },
    ],
  },
  {
    year: '2018',
    color: color2018,
    data: [
      { value: 8.6, label: '2.0-2.6' },
      { value: 1.5, label: '2.7' },
      { value: 7.1, label: '2.8 LTS' },
      { value: 2.1, label: '2.9' },
      { value: 2.8, label: '2.10' },
      { value: 2.7, label: '2.11' },
      { value: 11.6, label: '2.12 LTS' },
      { value: 7.1, label: '2.13' },
      { value: 8.1, label: '2.14' },
      { value: 6.7, label: '2.15' },
      { value: 23.8, label: '2.16 LTS' },
      { value: 9.4, label: '2.17' },
      { value: 43.8, label: '2.18 LTS' },
      { value: 28.2, label: '3.0' },
    ],
  },
];

const newReleaseAdoption = makeVersionChart(
  emberVersionData,
  'Which version(s) of Ember are used in your apps?'
);

var emberDataVersionData = [
  {
    year: '2016',
    color: color2016,
    data: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      { value: 27, label: '1.13' },
      { value: 6, label: '2.0' },
      { value: 4, label: '2.1' },
      { value: 8, label: '2.2' },
      { value: 21, label: '2.3' },
      { value: 42, label: '2.4' },
      null,
    ],
  },
  {
    year: '2017',
    color: color2017,
    data: [
      { value: 9, label: '1.13' },
      { value: 2.15, label: '2.0' },
      { value: 2.1, label: '2.1' },
      { value: 1.5, label: '2.2' },
      { value: 2.8, label: '2.3' },
      { value: 7, label: '2.4' },
      { value: 3, label: '2.5' },
      { value: 4, label: '2.6' },
      { value: 4, label: '2.7' },
      { value: 13.8, label: '2.8' },
      { value: 7, label: '2.9' },
      { value: 21.6, label: '2.10' },
      { value: 34.9, label: '2.11' },
      { value: 17, label: 'stable (2.12)' },
    ],
  },
  {
    year: '2018',
    color: color2018,
    data: [
      { value: 5.9, label: '2.0-2.6' },
      { value: 1, label: '2.7' },
      { value: 5.2, label: '2.8' },
      { value: 2, label: '2.9' },
      { value: 2.3, label: '2.10' },
      { value: 2.5, label: '2.11' },
      { value: 12.5, label: '2.12' },
      { value: 6.2, label: '2.13' },
      { value: 6.2, label: '2.14' },
      { value: 0, label: '2.15' },
      { value: 17.2, label: '2.16' },
      { value: 6.8, label: '2.17' },
      { value: 35.8, label: '2.18' },
      { value: 21.5, label: '3.0' },
    ],
  },
];

const emberDataAdoption = makeVersionChart(
  emberDataVersionData,
  'Which versions of Ember Data are used in your apps?'
);

export default class EmberCommunitySurvey2018Controller extends Controller {
  newReleaseAdoption = newReleaseAdoption;
  overallAdoption = overallAdoption;
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
