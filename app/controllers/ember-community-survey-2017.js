import Controller from '@ember/controller';
import { VerticalBarChart } from 'ember-website/utils/highcharts';

const emberOrange = '#f23818';
const darkGrayColor = '#4b4b4b';
const lightGrayColor = '#cccccc';

const makeChartData = (data) =>
  data.map((datum) => ({
    name: datum.year,
    data: datum.data.map((item) => ({
      y: item && item.value,
      label: item && item.label,
      color: item && item.color,
    })),
    color: datum.color,
  }));

const chartHowlong = {
  options: {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Which version(s) of Ember are used in your apps?',
    },
    tooltip: {
      shared: true,
      crosshairs: true,
      formatter: function () {
        let s = `<b>${+this.x} Release${
          Number(this.x) !== 1 ? 's' : ''
        } Prior to Survey</b>`;

        this.points.forEach((point) => {
          s += `<br/><span style="color: ${point.color}">●</span>${point.series.name}: ${point.point.label} Release (${point.y}%)`;
        });

        return s;
      },
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
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
  data: makeChartData([
    {
      year: '2015',
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
      color: lightGrayColor,
    },
    {
      year: '2016',
      data: [
        { value: 1.8, label: '1.6' },
        { value: 2.7, label: '1.7' },
        { value: 3.5, label: '1.8' },
        { value: 2.6, label: '1.9' },
        { value: 3.9, label: '1.10' },
        { value: 6, label: '1.11' },
        { value: 5.8, label: '1.12' },
        { value: 36, label: '1.13' },
        { value: 8.2, label: '2.0' },
        { value: 6.3, label: '2.1' },
        { value: 11.5, label: '2.2' },
        { value: 27, label: '2.3' },
        { value: 47, label: '2.4' },
      ],
      color: darkGrayColor,
    },
    {
      year: '2017',
      data: [
        { value: 14.5, label: '1.13' },
        { value: 3, label: '2.0' },
        { value: 2.1, label: '2.1' },
        { value: 2, label: '2.2' },
        { value: 4.5, label: '2.3' },
        { value: 11.3, label: '2.4' },
        { value: 4.4, label: '2.5' },
        { value: 4.5, label: '2.6' },
        { value: 5.8, label: '2.7' },
        { value: 21.2, label: '2.8' },
        { value: 10, label: '2.9' },
        { value: 22, label: '2.10' },
        { value: 41, label: '2.11' },
        { value: 19.3, label: 'stable (2.12)' },
      ],
      color: emberOrange,
    },
  ]),
};

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
}).highchartsOptions;

const chartBreakdownByVersion = new VerticalBarChart({
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
    ],
    title: 'Breakdown of Ember use by Version',
  },

  rawData: [
    {
      color: darkGrayColor,
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
      ],
    },
    {
      color: emberOrange,
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
      ],
    },
  ],
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

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
}).highchartsOptions;

const serverLanguage = new VerticalBarChart({
  chart: {
    categories: [
      'Ruby',
      'JavaScript',
      'Java',
      'Python',
      'PHP',
      '.NET',
      'Elixir / Erlang',
      'Go',
      'Scala',
      'TypeScript',
      'C++',
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
        36.97,
        24.54,
        20.57,
        13.5,
        12.43,
        8.71,
        7.95,
        6.44,
        2.65,
        1.58,
        1.2,
        2.97,
      ],
    },
  ],
}).highchartsOptions;

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
      label: '2016',
      values: [94, 49, 40, 28, 13, 12, 3],
      color: lightGrayColor,
    },
    {
      label: '2017',
      values: [94.26, 43.22, 37.67, 18.8, 9.15, 6.37, 1.39],
      color: darkGrayColor,
    },
    {
      label: 'What is expected next year?',
      values: [93.69, 51.36, 28.26, 9.84, 7.82, 2.9, 0.76],
      color: emberOrange,
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
}).highchartsOptions;

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
      label: '2016',
      color: darkGrayColor,
      values: [39, 39.2, 29.24, 20.6, 6, 3.9, 5, 3.2],
    },
    {
      label: '2017',
      color: emberOrange,
      values: [38.11, 26.56, 26.37, 21.08, 19.31, 4.04, 3.97, 2.27],
    },
  ],
}).highchartsOptions;

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
      label: '2016',
      color: darkGrayColor,
      values: [15.11, 26.2, 34.2, 39.6, 8.2],
    },
    {
      label: '2017',
      color: emberOrange,
      values: [12.24, 24.42, 36.85, 42.4, 9.27],
    },
  ],
}).highchartsOptions;

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
      label: '2017',
      color: emberOrange,
      values: [53.63, 38.74, 6.56],
    },
  ],
}).highchartsOptions;

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
      label: '2017',
      color: emberOrange,
      values: [47.13, 25.49, 12.87, 12.87],
    },
  ],
}).highchartsOptions;

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
      label: '2017',
      color: emberOrange,
      values: [49, 33.6, 7.8, 3.7, 3.5, 0.8, 0.4],
    },
  ],
}).highchartsOptions;

// Drill down data not displaying - so only included demographics as verticalBarChart display region only (not full demographic drill down data)
// const demographics = {
//   options: {
//     chart: {
//       type: 'column',
//     },
//     title: {
//       text: 'In which region do you live?',
//     },
//     subtitle: {
//       text: '',
//     },
//     xAxis: {
//       type: 'category',
//     },
//     yAxis: {
//       title: {
//         text: 'Percent',
//       },
//     },
//     drilldown: {
//       series: [
//         {
//           name: 'North America',Africa
//           id: 'North America',
//           data: [
//             { name: 'White', y: 80 },
//             { name: 'Asian', y: 7.2 },
//             { name: 'Prefer not to answer', y: 6.2 },
//             { name: 'Hispanic, Latino, or Spanish origin', y: 6.1 },
//             { name: 'Black or African American', y: 2.2 },
//             { name: 'Middle Eastern or North African', y: 1.1 },
//           ],
//         },
//         {
//           name: 'Europe',
//           id: 'Europe',
//           data: [
//             { name: 'White', y: 81 },
//             { name: 'Prefer not to answer', y: 10.1 },
//             { name: 'Hispanic, Latino, or Spanish origin', y: 5.4 },
//             { name: 'American Indian or Alaskan Native', y: 6.1 },
//             { name: 'Middle Eastern or North African', y: 1.9 },
//             { name: 'Asian', y: 1 },
//             { name: 'Black or African American', y: 0.8 },
//           ],
//         },
//         {
//           name: 'Asia',
//           id: 'Asia',
//           data: [Oceania
//       ],
//     },
//   },
//   data: [
//     {
//       name: '2017',
//       color: emberOrange,
//       data: [
//         { name: 'North America	', y: 49, drilldown: 'North America' },
//         { name: 'Europe	', y: 33.6, drilldown: 'Europe' },
//         { name: 'Asia	', y: 7.8, drilldown: 'Asia' },
//         { name: 'Oceania	', y: 3.7 },
//         { name: 'South America	', y: 3.5 },
//         { name: 'Africa	', y: 0.8 },
//         { name: 'Central America	', y: 0.4 },
//       ],
//     },
//   ],
// };

const versionData = [
  {
    year: '2016',
    color: darkGrayColor,
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
    color: emberOrange,
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
];

const priorVersionsData = {
  options: {
    title: {
      text: 'Which versions of Ember Data are used in your apps?',
    },
    subtitle: {
      text: '',
    },
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
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
    yAxis: {
      title: {
        text: 'Percent',
      },
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
  data: makeVersionChartData(versionData),
};

function makeVersionChartData(versionData) {
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

  return seriesData;
}

export default class EmberCommunitySurvey2017Controller extends Controller {
  chartHowlong = chartHowlong;
  chartSnapshotEmberDevelopers = chartSnapshotEmberDevelopers;
  chartBreakdownByVersion = chartBreakdownByVersion;
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
