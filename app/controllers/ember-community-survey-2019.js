import Controller from '@ember/controller';

// 2018 Color Palette
// eslint-disable-next-line no-unused-vars
const emberOrange = '#f23818';
const darkGrayColor = '#4b4b4b';
// eslint-disable-next-line no-unused-vars
const lightGrayColor = '#c0c0c0';
// eslint-disable-next-line no-unused-vars
const lighterGrayColor = '#dedede';
// eslint-disable-next-line no-unused-vars
const lightGreenColor = '#489a6e';

// Ember Branding Color Palette
const emberColors = {
  ember: '#E04E39',
  burntEmber: '#9B2918',
  blue: '#1E719B',
  lightBlue: '#74B0CE',
  yellow: '#FBC840',
  black: '#212121',
  gray: '#817F7F',
  faintGray: '#EFEBEA',
  linen: '#FDF7F6',
  white: '#FDFDFD',
};

const orangePalette = {
  orange: '#e04e39',
  orangeDarker: '#c7341f',
  orangeDarkest: '#9b2918',
  orangeLighter: '#e77565',
};

// Default Color Assignments for Yearly Graph Data Series
var color2015 = orangePalette.orangeLighter;
var color2016 = darkGrayColor;
var color2017 = orangePalette.orangeDarkest;
var color2018 = orangePalette.orange;
var color2019 = emberColors.blue;
// eslint-disable-next-line no-unused-vars
var colorFutureYear = emberColors.yellow;

// Begin Chart Definitions

const stackColors = {
  htmlDark: '#E45126',
  htmlLight: '#F2682A',
  cssDark: '#0D72B8',
  cssLight: '#32AADE',
  jsDark: '#E4A228',
  jsLight: '#F1BF28',
  ariaDark: '#1A5E9A',
};
const stackData = {
  htmlData: [1.4, 26.1, 72.5],
  cssData: [6.5, 42.1, 51.4],
  jsData: [2.7, 32.6, 64.7],
  ariaData: [69.5, 26, 4.5],
  emberData: [11.3, 40.7, 48],
};
const stackSkillsChart = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Grade your knowledge of various skills' },
    yAxis: { title: { text: 'Percent' } },
    xAxis: { categories: ['Beginner', 'Intermediate', 'Advanced'] },
  },
  data: [
    { name: 'HTML', color: stackColors.htmlLight, data: stackData.htmlData },
    { name: 'CSS', color: stackColors.cssLight, data: stackData.cssData },
    { name: 'JavaScript', color: stackColors.jsLight, data: stackData.jsData },
    { name: 'ARIA', color: stackColors.ariaDark, data: stackData.ariaData },
    { name: 'Ember.js', color: emberColors.ember, data: stackData.emberData },
  ],
};

// Data Updated
const recommendingEmber = {
  options: {
    chart: { type: 'spline' },
    title: { text: 'How Likely Are You To Recommend Ember?' },
    subtitle: { text: '' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Responses' } },
  },
  data: [
    {
      showInLegend: false,
      name: '2019',
      color: color2019,
      data: [
        [1, 39],
        [2, 19],
        [3, 34],
        [4, 36],
        [5, 36],
        [6, 67],
        [7, 148],
        [8, 278],
        [9, 186],
        [10, 384],
      ],
    },
  ],
};

// DEMO OF AUTO-GENERATED HighCharts
//=============================================================================

// Q1.01: How likely are you to recommend Ember to your friends and colleagues?
//------------------------------------------------

const SS_Q101 = {
  options: {
    chart: { type: 'column' },
    title: {
      text:
        'How likely are you to recommend Ember to your friends and colleagues?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: '10', y: (100 / 1232) * 384 },
        { name: '9', y: (100 / 1232) * 186 },
        { name: '8', y: (100 / 1232) * 278 },
        { name: '7', y: (100 / 1232) * 148 },
        { name: '6', y: (100 / 1232) * 67 },
        { name: '5', y: (100 / 1232) * 36 },
        { name: '4', y: (100 / 1232) * 36 },
        { name: '3', y: (100 / 1232) * 34 },
        { name: '2', y: (100 / 1232) * 19 },
        { name: '1', y: (100 / 1232) * 39 },
      ],
    },
  ],
};

// Q1.04: How long have you been working with Ember?
//------------------------------------------------

const SS_Q104 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'How long have you been working with Ember?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        // {name: '< 3 months', y: (100/1232)*47},
        // {name: '3 - 6 months', y: (100/1232)*56},
        // {name: '6 - 12 months', y: (100/1232)*78},
        { name: '< 1 year', y: (100 / 1232) * 181 },
        { name: '1 - 2 years', y: (100 / 1232) * 173 },
        { name: '2 - 3 years', y: (100 / 1232) * 213 },
        { name: '3 - 4 years', y: (100 / 1232) * 209 },
        { name: '4 - 5 years', y: (100 / 1232) * 200 },
        { name: '5+ years', y: (100 / 1232) * 253 },
        // {name: 'Started on Sproutcore 2 (or before!)', y: (100/1232)*34}
      ],
    },
  ],
};

// Q1.05: Grade your knowledge of HTML:
//------------------------------------------------

const SS_Q105 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Grade your knowledge of HTML:' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Beginner', y: (100 / 1232) * 17 },
        { name: 'Intermediate', y: (100 / 1232) * 319 },
        { name: 'Advanced', y: (100 / 1232) * 888 },
      ],
    },
  ],
};

// Q1.06: Grade your knowledge of CSS:
//------------------------------------------------

const SS_Q106 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Grade your knowledge of CSS:' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Beginner', y: (100 / 1232) * 80 },
        { name: 'Intermediate', y: (100 / 1232) * 515 },
        { name: 'Advanced', y: (100 / 1232) * 630 },
      ],
    },
  ],
};

// Q1.07: Grade your knowledge of JavaScript:
//------------------------------------------------

const SS_Q107 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Grade your knowledge of JavaScript:' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Beginner', y: (100 / 1232) * 33 },
        { name: 'Intermediate', y: (100 / 1232) * 397 },
        { name: 'Advanced', y: (100 / 1232) * 787 },
      ],
    },
  ],
};

// Q1.08: Grade your knowledge of ARIA:
//------------------------------------------------

const SS_Q108 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Grade your knowledge of ARIA:' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Beginner', y: (100 / 1232) * 836 },
        { name: 'Intermediate', y: (100 / 1232) * 313 },
        { name: 'Advanced', y: (100 / 1232) * 54 },
      ],
    },
  ],
};

// Q1.09: Grade your knowledge of Ember.js:
//------------------------------------------------

const SS_Q109 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Grade your knowledge of Ember.js:' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Beginner', y: (100 / 1232) * 138 },
        { name: 'Intermediate', y: (100 / 1232) * 499 },
        { name: 'Advanced', y: (100 / 1232) * 589 },
      ],
    },
  ],
};

// Q2.03: I use Ember for work:
//------------------------------------------------

const SS_Q203 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'I use Ember for work:' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'All of the time', y: (100 / 1232) * 564 },
        { name: 'Most of the time', y: (100 / 1232) * 406 },
        { name: 'Some of the time', y: (100 / 1232) * 209 },
        { name: 'Never', y: (100 / 1232) * 42 },
      ],
    },
  ],
};
// Yes / No? 96% / 4%

// Q2.04: When taking your most recent job:
//------------------------------------------------

const SS_Q204 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'When taking your most recent job:' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2017',
      color: color2017,
      data: [
        { name: 'My employer was not using Ember', y: 53.63 },
        { name: 'My employer was already using Ember', y: 38.74 },
        { name: 'Does not apply (e.g. I am a student)', y: 6.56 },
      ],
    },
    {
      name: '2018',
      color: color2018,
      data: [
        { name: 'My employer was not using Ember', y: 43.1 },
        { name: 'My employer was already using Ember', y: 52.3 },
        { name: 'Does not apply (e.g. I am a student)', y: 4.5 },
      ],
    },
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'My employer was already using Ember', y: (100 / 1232) * 718 },
        { name: 'My employer was not using Ember', y: (100 / 1232) * 453 },
        { name: 'Does not apply (e.g. I am a student)', y: (100 / 1232) * 49 },
      ],
    },
  ],
};

// Q2.05: When taking your most recent job your pre-existing knowledge of Ember.js was:
//------------------------------------------------

const SS_Q205 = {
  options: {
    chart: { type: 'column' },
    title: {
      text:
        'When taking your most recent job your pre-existing knowledge of Ember.js was:',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2017',
      color: color2017,
      data: [
        { name: 'I did not know Ember', y: 47.13 },
        { name: 'Unimportant', y: 25.49 },
        { name: 'Very important', y: 12.87 },
        { name: 'Important', y: 12.87 },
      ],
    },
    {
      name: '2018',
      color: color2018,
      data: [
        { name: 'I did not know Ember', y: 40.9 },
        { name: 'Unimportant', y: 27.2 },
        { name: 'Very important', y: 18.1 },
        { name: 'Important', y: 13.8 },
      ],
    },
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Very important', y: (100 / 1232) * 235 },
        { name: 'Important', y: (100 / 1232) * 178 },
        { name: 'Unimportant', y: (100 / 1232) * 268 },
        { name: 'I did not know Ember', y: (100 / 1232) * 532 },
      ],
    },
  ],
};

// Q3.01: How many developers at your company are responsible for writing Front-End code?
//------------------------------------------------

const SS_Q301 = {
  options: {
    chart: { type: 'column' },
    title: {
      text:
        'How many developers at your company are responsible for writing Front-End code?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: '1-10', y: (100 / 1232) * 699 },
        { name: '11-20', y: (100 / 1232) * 160 },
        { name: '21-50', y: (100 / 1232) * 95 },
        { name: '51-100', y: (100 / 1232) * 68 },
        { name: '101-500', y: (100 / 1232) * 76 },
        { name: '> 500', y: (100 / 1232) * 82 },
        { name: 'I do not know', y: (100 / 1232) * 39 },
      ],
    },
  ],
};

// Q3.02: How many developers at your company are responsible for writing Ember code?
//------------------------------------------------

const SS_Q302 = {
  options: {
    chart: { type: 'column' },
    title: {
      text:
        'How many developers at your company are responsible for writing Ember code?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { categories: ['1–10', '11–20', '21–50', '51–100', '> 100'] },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2015',
      color: color2015,
      data: [
        // 15.5,
        78,
        3.7,
        1.7,
        0.8,
        0.3,
      ],
    },
    {
      name: '2016',
      color: color2016,
      data: [
        //12,
        74,
        6,
        4,
        2,
        1,
      ],
    },
    {
      name: '2017',
      color: color2017,
      data: [
        // 8.7,
        69.8,
        6.8,
        4.8,
        2.5,
        2,
      ],
    },
    {
      name: '2018',
      color: color2018,
      data: [
        // 7.2,
        62.5,
        9.4,
        5.3,
        3.9,
        6.4,
      ],
    },

    {
      name: '2019',
      color: color2019,
      data: [
        { name: '1-10', y: (100 / 1232) * 833 },
        { name: '11-20', y: (100 / 1232) * 101 },
        { name: '21-50', y: (100 / 1232) * 79 },
        { name: '51-100', y: (100 / 1232) * 47 },
        // {name: '101-500', y: (100/1232)*58},
        // {name: '> 500', y: (100/1232)*36},
        { name: '> 100', y: (100 / 1232) * 94 },
        // {name: 'I do not know', y: (100/1232)*59}
      ],
    },
  ],
};

// Q3.03: At this time next year, how many Ember developers does your company plan to employ?
//------------------------------------------------

const SS_Q303 = {
  options: {
    chart: { type: 'column' },
    title: {
      text:
        'At this time next year, how many Ember developers does your company plan to employ?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'More', y: (100 / 1232) * 530 },
        { name: 'The same amount', y: (100 / 1232) * 306 },
        { name: 'Fewer', y: (100 / 1232) * 89 },
        { name: 'I do not know', y: (100 / 1232) * 292 },
      ],
    },
  ],
};

// Prose for Q3.06
// Q3.05: What is the primary language of apps developed at your business?
//------------------------------------------------

const SS_Q305 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'What is the primary language of apps developed at your business?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'English', y: (100 / 1232) * 1010 },
        { name: 'Chinese', y: (100 / 1232) * 8 },
        { name: 'Spanish', y: (100 / 1232) * 32 },
        { name: 'Hindi', y: (100 / 1232) * 0 },
        { name: 'Arabic', y: (100 / 1232) * 0 },
        { name: 'Other', y: (100 / 1232) * 137 },
        { name: 'French', y: (100 / 1232) * 30 },
      ],
    },
  ],
};

// Q3.06: Does your business require applications to be internationalized?
//------------------------------------------------

const SS_Q306 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'Does your business require applications to be internationalized?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      showInLegend: false,
      name: '2019',
      color: color2019,
      data: [
        { name: 'Yes', y: (100 / 1232) * 695 },
        { name: 'No', y: (100 / 1232) * 472 },
        { name: 'I do not know', y: (100 / 1232) * 46 },
      ],
    },
  ],
};

// Q4.05: What is the primary language of your server-side stack?
//------------------------------------------------

const SS_Q405 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'What is the primary language of your server-side stack?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2016',
      color: color2016,
      data: [
        { y: 41, name: 'Ruby' },
        { y: 17, name: 'Java' },
        { y: 24, name: 'JavaScript' },
        { y: 12, name: 'Python' },
        // { y: 8, name: '.NET' },
        { y: 13, name: 'PHP' },
        // { y: 6, name: 'Elixir / Erlang' },
        // { y: 5, name: 'Go' },
        // { y: 2, name: 'Scala' },
        // { y: 0, name: 'TypeScript' }
      ],
    },
    {
      name: '2017',
      color: color2017,
      data: [
        { name: 'Ruby', y: 36.97 },
        { name: 'Java', y: 20.57 },
        { name: 'JavaScript', y: 24.54 },
        { name: 'Python', y: 13.5 },
        // {name: '.NET', y:	8.71},
        { name: 'PHP', y: 12.43 },
        // {name: 'Elixir / Erlang', y:	7.95},
        // {name: 'Go', y:	6.44},
        // {name: 'Scala', y:	2.65},
        // {name: 'TypeScript', y:	1.58}
      ],
    },
    {
      name: '2018',
      color: color2018,
      data: [
        { name: 'Ruby', y: 33.7 },
        { name: 'Java', y: 26.4 },
        { name: 'JavaScript', y: 22.1 },
        { name: 'Python', y: 11.9 },
        // {name: '.NET', y:	10.5},
        { name: 'PHP', y: 10.3 },
        // {name: 'Elixir / Erlang', y: 9.2},
        // {name: 'Go', y:	6.5},
        // {name: 'Scala', y: 2.6},
        // {name: 'TypeScript', y:	2.6}
      ],
    },
    {
      name: '2019',
      color: color2019,
      data: [
        // {name: 'Elixir / Erlang', y: (100/1232)*64},
        // {name: 'Go', y: (100/1232)*54},
        { name: 'Java', y: (100 / 1232) * 241 },
        { name: 'JavaScript', y: (100 / 1232) * 134 },
        { name: 'PHP', y: (100 / 1232) * 78 },
        { name: 'Python', y: (100 / 1232) * 101 },
        { name: 'Ruby', y: (100 / 1232) * 369 },
        // {name: 'Scala', y: (100/1232)*22},
        // {name: 'TypeScript', y: (100/1232)*26},
        // {name: 'Other', y: (100/1232)*120}
      ],
    },
  ],
};

// Q4.10: How many Ember apps do you work on?
//------------------------------------------------

const SS_Q410 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'How many Ember apps do you work on?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      showInLegend: false,
      name: '2019',
      color: color2019,
      data: [
        { name: '1', y: (100 / 1232) * 354 },
        { name: '2 - 5', y: (100 / 1232) * 701 },
        { name: '5 - 10', y: (100 / 1232) * 100 },
        { name: '> 10', y: (100 / 1232) * 58 },
      ],
    },
  ],
};

// Q4.18: How many addons have you written (including private, unpublished libraries)?
//------------------------------------------------

const SS_Q418 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'How many addons have you written?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: '0', y: (100 / 1232) * 394 },
        { name: '1 - 3', y: (100 / 1232) * 450 },
        { name: '4 - 6', y: (100 / 1232) * 148 },
        { name: '> 6', y: (100 / 1232) * 213 },
      ],
    },
  ],
};

// Q4.19: How many addons have you published publicly?
//------------------------------------------------

const SS_Q419 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'How many addons have you published publicly?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: '0', y: (100 / 1232) * 795 },
        { name: '1 - 3', y: (100 / 1232) * 306 },
        { name: '4 - 6', y: (100 / 1232) * 43 },
        { name: '> 6', y: (100 / 1232) * 62 },
      ],
    },
  ],
};

// Q5.01: In which region do you live?
//------------------------------------------------

const SS_Q501 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'In which region do you live?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2018',
      color: color2018,
      data: [
        { name: 'North America', y: 53.7 },
        { name: 'Europe', y: 32.7 },
        { name: 'Asia', y: 7.8 },
        { name: 'Oceania', y: 3.4 },
        { name: 'South America', y: 3.2 },
        // {name: 'Africa', y: 0.5},
        // {name: 'Central America', y: 0.5},
        { name: 'Other', y: 1.4 },
      ],
    },
    {
      name: '2019',
      color: color2019,
      data: [
        // {name: 'Africa', y: (100/1232)*5},
        { name: 'Asia', y: (100 / 1232) * 87 },
        { name: 'Oceania', y: (100 / 1232) * 40 },
        { name: 'Europe', y: (100 / 1232) * 468 },
        { name: 'North America', y: (100 / 1232) * 566 },
        // {name: 'Central America', y: (100/1232)*2},
        { name: 'South America', y: (100 / 1232) * 32 },
        { name: 'Other', y: (100 / 1232) * 17 },
      ],
    },
  ],
};

// Q5.02: Do you have a disability?
//------------------------------------------------

const SS_Q502 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Do you have a disability?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Yes', y: (100 / 1232) * 26 },
        { name: 'No', y: (100 / 1232) * 1175 },
        { name: 'Prefer not to answer', y: (100 / 1232) * 0 },
      ],
    },
  ],
};
// Generating HighCharts Javascript Objects

// Q1.03: What are the ways you learn about and stay up to date with Ember?
//------------------------------------------------

const MS_Q103 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'What are the ways you learn about and stay up to date with Ember?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2017',
      color: color2017,
      data: [
        // {name: 'Writing RFCs', y:1.9},
        // {name: 'Commenting on RFCs', y:5.2},
        { name: 'RFCs', y: 33.3 },
        { name: 'Github PRs', y: 16.4 },
        { name: 'Stack Overflow', y: 41.6 },
        { name: 'emberjs.com blog', y: 49.8 },
      ],
    },
    {
      name: '2018',
      color: color2018,
      data: [
        // {name: 'Writing RFCs', y:3.0},
        // {name: 'Commenting on RFCs', y:9.8},
        { name: 'RFCs', y: 52.2 },
        { name: 'Github PRs', y: 23.8 },
        { name: 'Stack Overflow', y: 34.2 },
        { name: 'emberjs.com blog', y: 57.8 },
      ],
    },
    {
      name: '2019',
      color: color2019,
      data: [
        // {name: 'Books / ebooks', y: (100/1232)*174},
        // {name: 'Attending conferences', y: (100/1232)*313},
        // {name: 'discuss.emberjs.com', y: (100/1232)*349},
        // {name: 'Ember Core Notes Repo', y: (100/1232)*154},
        { name: 'Github PRs', y: (100 / 1232) * 372 },
        { name: 'Guides & API Docs', y: (100 / 1232) * 878 },
        { name: 'RFCs', y: (100 / 1232) * 638 },
        { name: 'Discord server (chat)', y: (100 / 1232) * 398 },
        { name: 'emberjs.com blog', y: (100 / 1232) * 669 },
        { name: 'Blog posts', y: (100 / 1232) * 575 },
        // {name: 'In-person or other formal training', y: (100/1232)*142},
        // {name: 'Local meetups', y: (100/1232)*218},
        { name: 'Newsletters', y: (100 / 1232) * 413 },
        // {name: 'Podcasts', y: (100/1232)*248},
        { name: 'Code Samples', y: (100 / 1232) * 626 },
        // {name: 'Reddit', y: (100/1232)*124},
        // {name: 'Screencasts or video training', y: (100/1232)*255},
        { name: 'Stack Overflow', y: (100 / 1232) * 419 },
        { name: 'Social Media', y: (100 / 1232) * 398 },
        //{name: 'Other', y: (100/1232)*75}
      ],
    },
  ],
};

// Q1.10: When learning Ember yourself, or teaching it to someone new, what topics were difficult to understand?
//------------------------------------------------

const MS_Q110 = {
  options: {
    chart: { type: 'column' },
    title: {
      text:
        'When learning Ember yourself, or teaching it to someone new, what topics were difficult to understand?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        // {name: 'JavaScript Modules (import/export/etc.)', y: (100/1232)*118},
        // {name: 'JavaScript async/await', y: (100/1232)*148},
        {
          name: 'Customizing ember-data via adapters and serializers',
          y: (100 / 1232) * 639,
        },
        { name: 'Managing application state', y: (100 / 1232) * 447 },
        // {name: 'Managing CSS complexity', y: (100/1232)*217},
        // {name: 'Writing basics tests', y: (100/1232)*253},
        // {name: 'Building your own test helpers', y: (100/1232)*270},
        // {name: 'Composition with components', y: (100/1232)*281},
        { name: 'Engines', y: (100 / 1232) * 423 },
        { name: 'Fastboot & Server-Side Rendering', y: (100 / 1232) * 406 },
        // {name: 'Progressive Web App Technologies', y: (100/1232)*171},
        { name: 'Debugging', y: (100 / 1232) * 314 },
        // {name: 'Node.js', y: (100/1232)*90},
        { name: 'Using the ember-data store', y: (100 / 1232) * 425 },
        // {name: 'Component lifecycle', y: (100/1232)*246},
        // {name: 'Routing & the Router', y: (100/1232)*220},
        // {name: 'Promises', y: (100/1232)*208},
        { name: 'Measuring client-side performance', y: (100 / 1232) * 378 },
        { name: 'Closure actions', y: (100 / 1232) * 297 },
        // {name: 'Other', y: (100/1232)*90}
      ],
    },
  ],
};

// Q1.11: Which text editors do you use for development?
//------------------------------------------------

const MS_Q111 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Which text editors do you use for development?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: {
      categories: [
        'Atom',
        'Sublime Text',
        'Vim',
        'WebStorm / IntelliJ / Other Jetbrains',
        'VS Code',
      ],
    },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2016',
      color: color2016,
      data: [
        39,
        39.2,
        29.24,
        20.6,
        6,
        //  , 3.9, 5, 3.2
      ],
    },
    {
      name: '2017',
      color: color2017,
      data: [
        38.11,
        26.56,
        26.37,
        21.08,
        19.31,
        //, 4.04, 3.97, 2.27
      ],
    },
    {
      name: '2018',
      color: color2018,
      data: [
        28.2,
        20.3,
        20.5,
        19,
        37.9,
        //  , 3.5, 0, 1.9
      ],
    },
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Atom', y: (100 / 1232) * 252 },
        { name: 'Sublime Text', y: (100 / 1232) * 181 },
        //    {name: 'Emacs', y: (100/1232)*46},
        { name: 'Vim', y: (100 / 1232) * 273 },
        //    {name: 'Notepad++', y: (100/1232)*0},
        //    {name: 'Visual Studio', y: (100/1232)*99},
        {
          name: 'WebStorm / IntelliJ / Other Jetbrains',
          y: (100 / 1232) * 233,
        },
        { name: 'VS Code', y: (100 / 1232) * 700 },
        //      {name: 'Other', y: (100/1232)*28}
      ],
    },
  ],
};

// Q1.12: Choose the option(s) that best describe your participation in the Ember community:
//------------------------------------------------

const MS_Q112 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'Describe your participation in the Ember community:',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      showInLegend: false,
      name: '2019',
      color: color2019,
      data: [
        { name: 'Answering community questions', y: (100 / 1232) * 194 },
        { name: 'Attending meetups / conferences', y: (100 / 1232) * 437 },
        { name: 'Maintaining a library or addon', y: (100 / 1232) * 327 },
        { name: 'Opening issues', y: (100 / 1232) * 436 },
        { name: 'Opening PRs', y: (100 / 1232) * 299 },
        { name: 'Creating RFCs', y: (100 / 1232) * 42 },
        { name: 'Commenting on RFCs', y: (100 / 1232) * 160 },
        { name: 'Presenting at events / lectures', y: (100 / 1232) * 152 },
        { name: 'Writing blog posts / articles', y: (100 / 1232) * 178 },
        // {name: 'None of these', y: (100/1232)*396},
        { name: 'Other', y: (100 / 1232) * 75 },
      ],
    },
  ],
};

// Q1.13: Which operating system(s) do you use for development?
//------------------------------------------------

const MS_Q113 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'Which operating system(s) do you use for development?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Mac OS', y: (100 / 1232) * 979 },
        { name: 'Linux/Unix', y: (100 / 1232) * 338 },
        { name: 'Windows', y: (100 / 1232) * 205 },
        // {name: 'Other', y: (100/1232)*1}
      ],
    },
  ],
};

// Q1.14: With which of these other front-end framework(s) do you have some level of experience?
//------------------------------------------------

const MS_Q114 = {
  options: {
    chart: { type: 'column' },
    title: {
      text:
        'With which of these other front-end framework(s) do you have experience?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: 'Some Experience',
      color: color2019,
      data: [
        { name: 'Angular 1.x', y: (100 / 1232) * 414 },
        // {name: 'Angular 2.x', y: (100/1232)*207},
        // {name: 'Backbone', y: (100/1232)*368},
        // {name: 'Ionic', y: (100/1232)*95},
        { name: 'jQuery / jQuery Mobile', y: (100 / 1232) * 950 },
        // {name: 'Knockout', y: (100/1232)*123},
        // {name: 'Marionette', y: (100/1232)*94},
        // {name: 'Meteor', y: (100/1232)*72},
        // {name: 'Polymer', y: (100/1232)*73},
        // {name: 'Preact', y: (100/1232)*79},
        { name: 'React', y: (100 / 1232) * 690 },
        // {name: 'Sencha (ExtJS/Sencha Touch)', y: (100/1232)*91},
        // {name: 'Sproutcore', y: (100/1232)*31},
        { name: 'Vue', y: (100 / 1232) * 333 },
        { name: 'None (Ember is my first framework)', y: (100 / 1232) * 106 },
        // {name: 'Other', y: (100/1232)*94}
      ],
    },
    {
      name: 'Advanced Experience',
      color: emberColors.lightBlue,
      data: [
        { name: 'Angular 1.x', y: (100 / 1232) * 126 },
        // {name: 'Angular 2.x', y: (100/1232)*73},
        // {name: 'Backbone', y: (100/1232)*129},
        // {name: 'Ionic', y: (100/1232)*20},
        { name: 'jQuery / jQuery Mobile', y: (100 / 1232) * 453 },
        // {name: 'Knockout', y: (100/1232)*28},
        // {name: 'Marionette', y: (100/1232)*38},
        // {name: 'Meteor', y: (100/1232)*12},
        // {name: 'Polymer', y: (100/1232)*16},
        // {name: 'Preact', y: (100/1232)*22},
        { name: 'React', y: (100 / 1232) * 286 },
        // {name: 'Sencha (ExtJS/Sencha Touch)', y: (100/1232)*25},
        // {name: 'Sproutcore', y: (100/1232)*7},
        { name: 'Vue', y: (100 / 1232) * 79 },
        { name: 'None (Ember is my first framework)', y: (100 / 1232) * 327 },
        // {name: 'Other', y: (100/1232)*51}
      ],
    },
  ],
};

// Q1.15: With which of these other front-end framework(s) do you have an advanced level of experience?
//------------------------------------------------

const MS_Q115 = {
  options: {
    chart: { type: 'column' },
    title: {
      text:
        'With which of these other front-end framework(s) do you have an advanced level of experience?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Angular 1.x', y: (100 / 1232) * 126 },
        // {name: 'Angular 2.x', y: (100/1232)*73},
        // {name: 'Backbone', y: (100/1232)*129},
        // {name: 'Ionic', y: (100/1232)*20},
        { name: 'jQuery / jQuery Mobile', y: (100 / 1232) * 453 },
        // {name: 'Knockout', y: (100/1232)*28},
        // {name: 'Marionette', y: (100/1232)*38},
        // {name: 'Meteor', y: (100/1232)*12},
        // {name: 'Polymer', y: (100/1232)*16},
        // {name: 'Preact', y: (100/1232)*22},
        { name: 'React', y: (100 / 1232) * 286 },
        // {name: 'Sencha (ExtJS/Sencha Touch)', y: (100/1232)*25},
        // {name: 'Sproutcore', y: (100/1232)*7},
        { name: 'Vue', y: (100 / 1232) * 79 },
        { name: 'None (Ember is my first framework)', y: (100 / 1232) * 327 },
        // {name: 'Other', y: (100/1232)*51}
      ],
    },
  ],
};

// Q2.01: What best describes your role at work?
//------------------------------------------------

const MS_Q201 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'What best describes your role at work?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Software Developer/Engineer', y: (100 / 1232) * 1168 },
        // {name: 'Designer', y: (100/1232)*79},
        { name: 'Project manager', y: (100 / 1232) * 124 },
        { name: 'Dev-ops', y: (100 / 1232) * 119 },
        // {name: 'Systems administration', y: (100/1232)*51},
        // {name: 'Student', y: (100/1232)*15},
        { name: 'Leadership position (CTO/VP/etc.)', y: (100 / 1232) * 182 },
        // {name: 'Other', y: (100/1232)*23}
      ],
    },
  ],
};

// Q2.02: Choose the option(s) that best describe your employment situation:
//------------------------------------------------

const MS_Q202 = {
  options: {
    chart: { type: 'column' },
    title: {
      text:
        'Choose the option(s) that best describe your employment situation:',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: {
      categories: [
        'Employee working on product(s)',
        'Employee in a firm doing consulting/client work',
        'Employee working on internal Ember tooling',
        'Independent product developer',
      ],
    },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2016',
      color: color2016,
      data: [59.3, 15.1, 23.4, 16.3],
    },
    {
      name: '2017',
      color: color2017,
      data: [74.8, 14.1, 12.8, 13.7],
    },
    {
      name: '2018',
      color: color2018,
      data: [80.2, 12.7, 11.8, 10.6],
    },
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Employee working on product(s)', y: (100 / 1232) * 961 },
        {
          name: 'Employee in a firm doing consulting/client work',
          y: (100 / 1232) * 157,
        },
        {
          name: 'Employee working on internal Ember tooling',
          y: (100 / 1232) * 158,
        },
        { name: 'Independent product developer', y: (100 / 1232) * 114 },
        // {name: 'Independent consultant', y: (100/1232)*102},
        // {name: 'Employed in a non-programming field', y: (100/1232)*11},
        // {name: 'Unemployed', y: (100/1232)*13}]}
      ],
    },
  ],
};

// Q3.04: What are the accessibility requirements for your business?
//------------------------------------------------

const MS_Q304 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'What are the accessibility requirements for your business?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      showInLegend: false,
      name: '2019',
      color: color2019,
      data: [
        {
          name: 'Required by law to provide accessibility',
          y: (100 / 1232) * 224,
        },
        { name: 'Self-imposed requirement', y: (100 / 1232) * 473 },
        { name: 'No requirements', y: (100 / 1232) * 462 },
        { name: 'I do not know', y: (100 / 1232) * 201 },
      ],
    },
  ],
};

// Q3.07: In which sector(s) does your employer operate? Select all that apply:
//------------------------------------------------

const MS_Q307 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'In which sector(s) do you  operate?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      showInLegend: false,
      name: '2019',
      color: color2019,
      data: [
        // {name: 'Agriculture', y: (100/1232)*33},
        { name: 'Advertising', y: (100 / 1232) * 101 },
        // {name: 'Arts & entertainment', y: (100/1232)*89},
        { name: 'Consulting', y: (100 / 1232) * 157 },
        { name: 'Education', y: (100 / 1232) * 138 },
        { name: 'Financial services', y: (100 / 1232) * 202 },
        // {name: 'Government', y: (100/1232)*86},
        { name: 'Health care & social assistance', y: (100 / 1232) * 140 },
        // {name: 'Insurance', y: (100/1232)*57},
        // {name: 'Manufacturing', y: (100/1232)*65},
        // {name: 'Real estate', y: (100/1232)*46},
        // {name: 'Retailers (including online)', y: (100/1232)*93},
        { name: 'Technology', y: (100 / 1232) * 611 },
        // {name: 'Utilities (telecom/energy)', y: (100/1232)*83},
        // {name: 'Transportation', y: (100/1232)*63},
        // {name: 'Travel/hospitality/food services', y: (100/1232)*82},
        // {name: 'Other', y: (100/1232)*174}
      ],
    },
  ],
};

// Q4.01: Which version(s) of Ember are in use in your apps?
//------------------------------------------------

const MS_Q401 = {
  options: {
    chart: { type: 'areaspline' },
    title: {
      text: 'Which version(s) of Ember are in use in your apps?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2016',
      color: color2016,
      data: [
        { name: 'Pre 1.13', y: 32 },
        { name: '1.13', y: 36 },
        { name: '2.0', y: 8 },
        { name: '2.1', y: 6 },
        { name: '2.2', y: 12 },
        { name: '2.3', y: 27 },
        { name: '2.4 LTS', y: 47 },
        // {name: '2.5', y:3},
        // {name: '2.6', y:0},
        // {name: '2.7', y:0},
        // {name: '2.8 LTS', y:0},
        // {name: '2.9', y:0},
        // {name: '2.10', y:0},
        // {name: '2.11', y:0},
        // {name: '2.12', y:0},
        // {name: '2.13', y:0},
        // {name: '2.14', y:0},
        // {name: '2.15', y:0},
        // {name: '2.16', y:0},
        // {name: '2.17', y:0},
        // {name: '2.18', y:0},
        // {name: '3.0', y:0}
      ],
    },
    {
      name: '2017',
      color: color2017,
      data: [
        { name: 'Pre 1.13', y: 9.46 },
        { name: '1.13', y: 14.45 },
        { name: '2.0', y: 2.97 },
        { name: '2.1', y: 2.1 },
        { name: '2.2', y: 2.02 },
        { name: '2.3', y: 4.48 },
        { name: '2.4 LTS', y: 11.29 },
        { name: '2.5', y: 4.35 },
        { name: '2.6', y: 4.48 },
        { name: '2.7', y: 5.8 },
        { name: '2.8 LTS', y: 21.2 },
        { name: '2.9', y: 10.09 },
        { name: '2.10', y: 21.6 },
        { name: '2.11', y: 40.88 },
        { name: '2.12 LTS', y: 19.31 },
        // {name: '2.13', y:0},
        // {name: '2.0-2.6', y: 0},
        // {name: '2.7-2.13', y: 0},
        // {name: '2.14', y:0},
        // {name: '2.15', y:0},
        // {name: '2.16', y:0},
        // {name: '2.17', y:0},
        // {name: '2.18', y:0},
        // {name: '3.0', y:0}
      ],
    },
    {
      name: '2018',
      color: color2018,
      data: [
        { name: 'Pre 1.13', y: 5 },
        { name: '1.13', y: 7.8 },
        { name: '2.0', y: 0 },
        { name: '2.1', y: 0 },
        { name: '2.2', y: 0 },
        { name: '2.3', y: 0 },
        { name: '2.4 LTS', y: 0 },
        { name: '2.5', y: 0 },
        { name: '2.6', y: 0 },
        { name: '2.7', y: 1.4 },
        { name: '2.8 LTS', y: 7 },
        { name: '2.9', y: 2 },
        { name: '2.10', y: 2.7 },
        { name: '2.11', y: 2.7 },
        { name: '2.12 LTS', y: 11.4 },
        { name: '2.13', y: 7 },
        { name: '2.14', y: 8 },
        { name: '2.15', y: 6.6 },
        { name: '2.16 LTS', y: 23.5 },
        { name: '2.17', y: 9.3 },
        { name: '2.18 LTS', y: 43.2 },
        { name: '3.0', y: 27.8 },
      ],
    },
    {
      name: '2019',
      color: color2019,
      data: [
        { name: '1.13', y: (100 / 1232) * 79 },
        { name: '2.0', y: 0 },
        { name: '2.1', y: 0 },
        { name: '2.2', y: 0 },
        { name: '2.3', y: 0 },
        { name: '2.4 LTS', y: (100 / 1232) * 48 },
        { name: '2.5', y: 1 },
        { name: '2.6', y: 0 },
        { name: '2.7', y: 1 },
        { name: '2.8 LTS', y: (100 / 1232) * 102 },
        { name: '2.9', y: 2 },
        { name: '2.10', y: 1 },
        { name: '2.11', y: 1 },
        { name: '2.12 LTS', y: 2 },
        { name: '2.13', y: 2 },
        { name: '2.14', y: (100 / 1232) * 48 },
        { name: '2.15', y: (100 / 1232) * 30 },
        { name: '2.16 LTS', y: (100 / 1232) * 57 },
        { name: '2.17', y: (100 / 1232) * 36 },
        { name: '2.18 LTS', y: (100 / 1232) * 282 },
        { name: '3.0', y: (100 / 1232) * 80 },
        { name: '3.1', y: (100 / 1232) * 111 },
        { name: '3.2', y: (100 / 1232) * 75 },
        { name: '3.3', y: (100 / 1232) * 80 },
        { name: '3.4 LTS', y: (100 / 1232) * 289 },
        { name: '3.5', y: (100 / 1232) * 200 },
        { name: '3.6', y: (100 / 1232) * 179 },
        { name: '3.7', y: (100 / 1232) * 356 },
        { name: '3.8', y: (100 / 1232) * 214 },
        // {name: 'Beta', y: (100/1232)*13},
        // {name: 'Canary (master)', y: (100/1232)*14},
        // {name: 'Custom fork', y: (100/1232)*4},
        // {name: 'I don’t know', y: (100/1232)*51},
        // {name: 'Other', y: (100/1232)*11}
      ],
    },
  ],
};

// Q4.02: If you use Ember Data, which version(s) are used in your apps?
//------------------------------------------------

const MS_Q402 = {
  options: {
    chart: { type: 'areaspline' },
    title: {
      text: 'If you use Ember Data, which version(s) are used in your apps?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2016',
      color: color2016,
      data: [
        { y: 27, name: '1.13' },
        { y: 6, name: '2.0' },
        { y: 4, name: '2.1' },
        { y: 8, name: '2.2' },
        { y: 21, name: '2.3' },
        { y: 42, name: '2.4' },
      ],
    },
    {
      name: '2017',
      color: color2017,
      data: [
        { y: 9, name: '1.13' },
        { y: 2.15, name: '2.0' },
        { y: 2.1, name: '2.1' },
        { y: 1.5, name: '2.2' },
        { y: 2.8, name: '2.3' },
        { y: 7, name: '2.4' },
        { y: 3, name: '2.5' },
        { y: 4, name: '2.6' },
        { y: 4, name: '2.7' },
        { y: 13.8, name: '2.8' },
        { y: 7, name: '2.9' },
        { y: 21.6, name: '2.10' },
        { y: 34.9, name: '2.11' },
        { y: 17, name: '2.12' },
      ],
    },
    {
      name: '2018',
      color: color2018,
      data: [
        { y: 5.9, name: '2.4' },
        { name: '2.5', y: 0 },
        { name: '2.6', y: 0 },
        { y: 1, name: '2.7' },
        { y: 5.2, name: '2.8' },
        { y: 2, name: '2.9' },
        { y: 2.3, name: '2.10' },
        { y: 2.5, name: '2.11' },
        { y: 12.5, name: '2.12' },
        { y: 6.2, name: '2.13' },
        { y: 6.2, name: '2.14' },
        { y: 0, name: '2.15' },
        { y: 17.2, name: '2.16' },
        { y: 6.8, name: '2.17' },
        { y: 35.8, name: '2.18' },
        { y: 21.5, name: '3.0' },
      ],
    },
    {
      name: '2019',
      color: color2019,
      data: [
        { name: '1.13', y: (100 / 1232) * 50 },
        { name: '2.0', y: 0 },
        { name: '2.1', y: 0 },
        { name: '2.2', y: 0 },
        { name: '2.3', y: 0 },
        { name: '2.4', y: (100 / 1232) * 40 },
        { name: '2.5', y: 0 },
        { name: '2.6', y: 0 },
        { name: '2.7', y: 0 },
        { name: '2.8', y: (100 / 1232) * 84 },
        { name: '2.9', y: 2 },
        { name: '2.10', y: 1 },
        { name: '2.11', y: 1 },
        { name: '2.12', y: 2 },
        { name: '2.13', y: 2 },
        { name: '2.14', y: (100 / 1232) * 46 },
        { name: '2.15', y: (100 / 1232) * 19 },
        { name: '2.16', y: (100 / 1232) * 49 },
        { name: '2.17', y: (100 / 1232) * 33 },
        { name: '2.18', y: (100 / 1232) * 193 },
        { name: '3.0', y: (100 / 1232) * 61 },
        { name: '3.1', y: (100 / 1232) * 82 },
        { name: '3.2', y: (100 / 1232) * 52 },
        { name: '3.3', y: (100 / 1232) * 70 },
        { name: '3.4', y: (100 / 1232) * 253 },
        { name: '3.5', y: (100 / 1232) * 156 },
        { name: '3.6', y: (100 / 1232) * 121 },
        { name: '3.7', y: (100 / 1232) * 260 },
        { name: '3.8', y: (100 / 1232) * 154 },
        // {name: 'Beta', y: (100/1232)*7},
        // {name: 'Canary (master)', y: (100/1232)*5},
        // {name: 'Custom fork', y: (100/1232)*10},
        // {name: 'I don’t know', y: (100/1232)*123}
        // {name: 'Other', y: (100/1232)*28}
      ],
    },
  ],
};

// Q4.03: If you use Ember CLI, which version(s) are used in your apps?
//------------------------------------------------

const MS_Q403 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'If you use Ember CLI, which version(s) are used in your apps?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        // {name: '1.13', y: (100/1232)*37},
        // {name: '2.0-2.6', y: (100/1232)*34},
        // {name: '2.7-2.13', y: (100/1232)*73},
        // {name: '2.14', y: (100/1232)*33},
        // {name: '2.15', y: (100/1232)*20},
        // {name: '2.16', y: (100/1232)*47},
        // {name: '2.17', y: (100/1232)*29},
        { name: '2.18', y: (100 / 1232) * 210 },
        // {name: '3.0', y: (100/1232)*58},
        // {name: '3.1', y: (100/1232)*77},
        // {name: '3.2', y: (100/1232)*68},
        // {name: '3.3', y: (100/1232)*74},
        { name: '3.4', y: (100 / 1232) * 222 },
        { name: '3.5', y: (100 / 1232) * 166 },
        { name: '3.6', y: (100 / 1232) * 148 },
        { name: '3.7', y: (100 / 1232) * 353 },
        { name: '3.8', y: (100 / 1232) * 213 },
        // {name: 'Beta', y: (100/1232)*8},
        // {name: 'Canary (master)', y: (100/1232)*6},
        // {name: 'Custom fork', y: (100/1232)*2},
        // {name: 'I don’t know', y: (100/1232)*104},
        // {name: 'Other', y: (100/1232)*11}
      ],
    },
  ],
};

// Q4.06: Which of these server-side frameworks do you use?
//------------------------------------------------

const MS_Q406 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Which of these server-side frameworks do you use?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: {
      categories: [
        'Rails',
        'Express',
        'Phoenix',
        'Spring',
        'Django',
        'MVC/WebAPI',
        // 'None*',
        // 'Flask (Python)'
      ],
      labels: { autoRotation: false },
    },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2016',
      color: color2016,
      data: [
        46.1,
        25.8,
        10.6,
        11.0,
        9,
        7.6,
        // , 0, 5.7
      ],
    },
    {
      name: '2017',
      color: color2017,
      data: [
        37.9,
        20.4,
        10.1,
        8.8,
        10.0,
        6.2,
        // , 0, 5.8
      ],
    },
    {
      name: '2018',
      color: color2018,
      data: [
        35.0,
        21.6,
        12.5,
        20.5,
        8.2,
        7.7,
        // , 7.6, 5.7
      ],
    },
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Rails', y: (100 / 1209) * 435 },
        { name: 'Express', y: (100 / 1209) * 239 },
        // {name: 'Flask (Python)', y: (100/1232)*74},
        // {name: 'Hapi (JavaScript)', y: (100/1232)*26},
        // {name: 'Koa (JavaScript)', y: (100/1232)*34},
        // {name: 'Laravel (PHP)', y: (100/1232)*63},
        // {name: 'MVC (.NET)', y: (100/1232)*48},
        { name: 'Phoenix', y: (100 / 1209) * 133 },
        // {name: 'Play (Scala & Java)', y: (100/1232)*71},
        // {name: 'Sails.js (JavaScript)', y: (100/1232)*14},
        // {name: 'Sinatra (Ruby)', y: (100/1232)*37},
        { name: 'Spring', y: (100 / 1209) * 115 },
        // {name: 'Spring Boot (Java)', y: (100/1232)*92},
        // {name: 'Symfony (PHP)', y: (100/1232)*38},
        // {name: 'None (no server-side framework)', y: (100/1232)*61},
        // {name: 'Other', y: (100/1232)*150},
        { name: 'Django', y: (100 / 1209) * 93 },
        { name: 'MVC/WebAPI', y: (100 / 1209) * 97 },
      ],
    },
  ],
};

// Q4.07: What standards do you follow for HTTP API design?
//------------------------------------------------

const MS_Q407 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'What standards do you follow for HTTP API design?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        // {name: 'Falcor', y: (100/1232)*0},
        { name: 'GraphQL', y: (100 / 1232) * 130 },
        // {name: 'HAL', y: (100/1232)*17},
        // {name: 'HATEOAS', y: (100/1232)*31},
        { name: 'JSON-API', y: (100 / 1232) * 758 },
        { name: 'Rest.li', y: (100 / 1232) * 155 },
        { name: 'Custom design', y: (100 / 1232) * 384 },
        // {name: 'I am unsure', y: (100/1232)*79},
        // {name: 'Other', y: (100/1232)*71}
      ],
    },
  ],
};

// Q4.08: What testing framework(s) do you use in your Ember apps?
//------------------------------------------------

const MS_Q408 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'What testing framework(s) do you use in your Ember apps?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        // {name: 'Blanket.js', y: (100/1232)*6},
        // {name: 'Capybara', y: (100/1232)*38},
        {
          name: 'Mocha (via ember-mocha or ember-cli-mocha)',
          y: (100 / 1232) * 206,
        },
        {
          name: 'QUnit (via ember-quinit or ember-cli-qunit)',
          y: (100 / 1232) * 887,
        },
        // {name: 'Jasmine', y: (100/1232)*30},
        // {name: 'Jest', y: (100/1232)*26},
        // {name: 'Karma', y: (100/1232)*18},
        // {name: 'Cucumber', y: (100/1232)*45},
        { name: 'I don’t write tests', y: (100 / 1232) * 176 },
        // {name: 'Other', y: (100/1232)*44}
      ],
    },
  ],
};

// Q4.09: How old are your Ember applications?
//------------------------------------------------

const MS_Q409 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'How old are your Ember applications?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category', labels: { autoRotation: false } },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      showInLegend: false,
      name: '2019',
      color: color2019,
      data: [
        { name: '< 6 months', y: (100 / 1232) * 190 },
        { name: '6 - 12 months', y: (100 / 1232) * 209 },
        { name: '1 - 2 years', y: (100 / 1232) * 361 },
        { name: '2 - 3 years', y: (100 / 1232) * 399 },
        { name: '3 - 4 years', y: (100 / 1232) * 312 },
        { name: '4+ years', y: (100 / 1232) * 336 },
      ],
    },
  ],
};

// Q4.11: What technologies are part of your deployment stack?
//------------------------------------------------

// Not certain to keep or not
const MS_Q411 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'What technologies are part of your deployment stack?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        {
          name: 'Amazon Web Services (S3/ElasticBeanstalk/Lambda/etc.)',
          y: (100 / 1232) * 688,
        },
        // {name: 'Ansible', y: (100/1232)*126},
        // {name: 'App Store/Native Shell (Play Store/App Store/Ad Hoc)', y: (100/1232)*74},
        // {name: 'Azure', y: (100/1232)*103},
        // {name: 'Bamboo', y: (100/1232)*63},
        // {name: 'Capistrano', y: (100/1232)*75},
        // {name: 'Chef', y: (100/1232)*46},
        { name: 'Circle CI', y: (100 / 1232) * 201 },
        // {name: 'Cloudant', y: (100/1232)*0},
        // {name: 'Codeship', y: (100/1232)*42},
        { name: 'Custom / shell scripts', y: (100 / 1232) * 267 },
        { name: 'Docker', y: (100 / 1232) * 571 },
        { name: 'Ember-CLI Deploy', y: (100 / 1232) * 455 },
        // {name: 'Firebase', y: (100/1232)*85},
        // {name: 'FTP', y: (100/1232)*43},
        { name: 'Git', y: (100 / 1232) * 871 },
        // {name: 'Gitlab CI', y: (100/1232)*137},
        // {name: 'Github Pages', y: (100/1232)*101},
        // {name: 'Google Cloud', y: (100/1232)*82},
        { name: 'Heroku', y: (100 / 1232) * 234 },
        { name: 'Jenkins / Hudson', y: (100 / 1232) * 292 },
        // {name: 'Netlify', y: (100/1232)*62},
        // {name: 'Pagefront', y: (100/1232)*0},
        // {name: 'Rackspace Cloud', y: (100/1232)*7},
        // {name: 'Rsync / SCP', y: (100/1232)*59},
        {
          name: 'Self-hosted (dedicated infrastructure)',
          y: (100 / 1232) * 227,
        },
        // {name: 'Surge.sh', y: (100/1232)*16},
        // {name: 'Team City', y: (100/1232)*33},
        { name: 'Travis CI', y: (100 / 1232) * 178 },
        // {name: 'VPS (cloud infrastructure)', y: (100/1232)*93},
        // {name: 'Zeit', y: (100/1232)*14},
        { name: 'Other', y: (100 / 1232) * 159 },
      ],
    },
  ],
};

// Q4.12: What is the primary target platform for your Ember apps?
//------------------------------------------------

const MS_Q412 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'What is the primary target platform for your Ember apps?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Desktop and mobile', y: (100 / 1232) * 784 },
        { name: 'Desktop only', y: (100 / 1232) * 543 },
        { name: 'Mobile web', y: (100 / 1232) * 91 },
        // {name: 'Legacy desktop (Point-of-sale units/embedded devices)', y: (100/1232)*25},
        // {name: 'Browser extension (Chrome/Firefox etc.)', y: (100/1232)*37},
        {
          name: 'Mobile native (Cordova/Phonegap/Crosswalk)',
          y: (100 / 1232) * 97,
        },
      ],
    },
    // {name: 'Desktop native (Electron/NW.js/MacGap/CEF)', y: (100/1232)*51}]}
  ],
};

// Q4.13: Who uses your application(s)?
//------------------------------------------------

const MS_Q413 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Who uses your application(s)?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: {
      categories: [
        'Business consumers (B2B)',
        'The general public (B2C)',
        'Internal users',
      ],
    },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2016',
      color: color2016,
      data: [62.6, 48.6, 43.8],
    },
    {
      name: '2017',
      color: color2017,
      data: [65.6, 49, 39],
    },
    {
      name: '2018',
      color: color2018,
      data: [69.5, 49.4, 39.9],
    },
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Business consumers (B2B)', y: (100 / 1232) * 888 },
        { name: 'The general public (B2C)', y: (100 / 1232) * 613 },
        { name: 'Internal users', y: (100 / 1232) * 479 },
      ],
    },
  ],
};

// Q4.14: What browser versions do your applications target?
//------------------------------------------------

const MS_Q414 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'What browser versions do your applications target?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: {
      categories: ['Modern browsers', 'Mobile browsers', 'IE 11', 'IE 10'],
    },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2016',
      color: color2016,
      data: [93.6, 49.0, 39.6, 27.7],
    },
    {
      name: '2017',
      color: color2017,
      data: [94.26, 44.2, 38.5, 19.2],
    },
    {
      name: '2018',
      color: color2018,
      data: [96.5, 52, 45.8, 10.1],
    },
    {
      name: '2019',
      color: color2019,
      data: [92.7, 54.8, 25.4, 2.5],
    },
  ],
};

// Q4.15: At this time next year, what browser versions do you expect your applications to target?
//------------------------------------------------

const MS_Q415 = {
  options: {
    chart: { type: 'column' },
    title: {
      text:
        'At this time next year, what browser versions do you expect your applications to target?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'Modern browsers', y: (100 / 1232) * 1143 },
        { name: 'Mobile browsers', y: (100 / 1232) * 676 },
        // {name: 'Legacy Chrome/Firefox/Safari/etc.', y: (100/1232)*168},
        { name: 'IE 11', y: (100 / 1232) * 313 },
        // {name: 'Other', y: (100/1232)*17},
        { name: 'IE 10', y: (100 / 1232) * 32 },
      ],
    },
  ],
};

// Q4.16: Which of these best describes your use of Ember in production applications?
//------------------------------------------------

const MS_Q416 = {
  options: {
    chart: { type: 'column' },
    title: {
      text:
        'Which of these best describes your use of Ember in production applications?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: {
      categories: [
        'None / Prototypes only',
        'Tens',
        'Hundreds',
        'Thousands',
        'Tens of thousands',
        'Hundreds of thousands',
        'Millions',
      ],
    },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2018',
      color: color2018,
      data: [9.1, 23.3, 34.5, 30.7, 17.7, 11.1, 9.8],
    },

    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'None / Prototypes only', y: (100 / 1232) * 92 },
        { name: 'Tens', y: (100 / 1232) * 242 },
        { name: 'Hundreds', y: (100 / 1232) * 405 },
        { name: 'Thousands', y: (100 / 1232) * 400 },
        { name: 'Tens of thousands', y: (100 / 1232) * 289 },
        { name: 'Hundreds of thousands', y: (100 / 1232) * 170 },
        { name: 'Millions', y: (100 / 1232) * 117 },
      ],
    },
  ],
};

// Q4.17: What method do you rely on for search engine indexing?
//------------------------------------------------

const MS_Q417 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'What method do you rely on for search engine indexing?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'FastBoot', y: (100 / 1232) * 158 },
        // {name: 'FastBoot for prerendering (prember)', y: (100/1232)*64},
        // {name: 'phantomjs or other pre-rendering', y: (100/1232)*32},
        // {name: 'noscript tags', y: (100/1232)*17},
        {
          name: 'Search engine JavaScript execution (no pre-render)',
          y: (100 / 1232) * 114,
        },
        {
          name: 'Private app behind an authentication flow',
          y: (100 / 1232) * 532,
        },
        { name: 'I do not know', y: (100 / 1232) * 308 },
        { name: 'Other', y: (100 / 1232) * 93 },
      ],
    },
  ],
};

// Q5.04: Which categories describe you?
//------------------------------------------------

const MS_Q504 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Which categories describe you?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: 'American Indian or Alaska Native', y: (100 / 1232) * 8 },
        { name: 'Asian', y: (100 / 1232) * 144 },
        { name: 'Black or African American', y: (100 / 1232) * 23 },
        { name: 'Hispanic/Latino/Spanish origin', y: (100 / 1232) * 98 },
        { name: 'Middle Eastern or North African', y: (100 / 1232) * 25 },
        { name: 'Pacific Islander', y: (100 / 1232) * 5 },
        { name: 'White', y: (100 / 1232) * 858 },
        { name: 'Some other race/ethnicity or origin', y: (100 / 1232) * 23 },
        { name: 'Prefer not to answer', y: (100 / 1232) * 73 },
      ],
    },
  ],
};

// Q6.01: Did you participate in any of the following surveys?
//------------------------------------------------

const MS_Q601 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'Did you participate in any of the following surveys?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      showInLegend: false,
      name: '2019',
      color: color2019,
      data: [
        { name: '2018 NPM JavaScript EcoSystem Survey', y: (100 / 1232) * 261 },
        { name: '2018 StackOverflow Developer Survey', y: (100 / 1232) * 311 },
        { name: 'GitLab 2018 Global Developer Survey', y: (100 / 1232) * 45 },
        { name: 'The State of JavaScript 2018', y: (100 / 1232) * 484 },
        // {name: 'Other(s)', y: (100/1232)*0}
      ],
    },
  ],
};

//=============================================================================
export default class EmberCommunitySurvey2019Controller extends Controller {
  recommendingEmber = recommendingEmber;
  stackSkillsChart = stackSkillsChart;

  // DEMO OF AUTO-GENERATED EXPORTS
  //=============================================================================
  SS_Q101 = SS_Q101;
  SS_Q104 = SS_Q104;
  SS_Q105 = SS_Q105;
  SS_Q106 = SS_Q106;
  SS_Q107 = SS_Q107;
  SS_Q108 = SS_Q108;
  SS_Q109 = SS_Q109;
  SS_Q203 = SS_Q203;
  SS_Q204 = SS_Q204;
  SS_Q205 = SS_Q205;
  SS_Q301 = SS_Q301;
  SS_Q302 = SS_Q302;
  SS_Q303 = SS_Q303;
  SS_Q305 = SS_Q305;
  SS_Q306 = SS_Q306;
  SS_Q405 = SS_Q405;
  SS_Q410 = SS_Q410;
  SS_Q418 = SS_Q418;
  SS_Q419 = SS_Q419;
  SS_Q501 = SS_Q501;
  SS_Q502 = SS_Q502;
  //=============================================================================
  MS_Q103 = MS_Q103;
  MS_Q110 = MS_Q110;
  MS_Q111 = MS_Q111;
  MS_Q112 = MS_Q112;
  MS_Q113 = MS_Q113;
  MS_Q114 = MS_Q114;
  MS_Q115 = MS_Q115;
  MS_Q201 = MS_Q201;
  MS_Q202 = MS_Q202;
  MS_Q304 = MS_Q304;
  MS_Q307 = MS_Q307;
  MS_Q401 = MS_Q401;
  MS_Q402 = MS_Q402;
  MS_Q403 = MS_Q403;
  MS_Q406 = MS_Q406;
  MS_Q407 = MS_Q407;
  MS_Q408 = MS_Q408;
  MS_Q409 = MS_Q409;
  MS_Q411 = MS_Q411;
  MS_Q412 = MS_Q412;
  MS_Q413 = MS_Q413;
  MS_Q414 = MS_Q414;
  MS_Q415 = MS_Q415;
  MS_Q416 = MS_Q416;
  MS_Q417 = MS_Q417;
  MS_Q504 = MS_Q504;
  MS_Q601 = MS_Q601;
  //=============================================================================
}
