import Controller from '@ember/controller';
import {
  AreaSplineChart,
  VerticalBarChart,
} from 'ember-website/utils/highcharts';

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

const stackSkillsChart = new VerticalBarChart({
  chart: {
    categories: ['Beginner', 'Intermediate', 'Advanced'],
    title: 'Grade your knowledge of various skills',
  },

  rawData: [
    {
      color: stackColors.htmlLight,
      label: 'HTML',
      values: [100 * (17 / 1232), 100 * (319 / 1232), 100 * (888 / 1232)],
    },
    {
      color: stackColors.cssLight,
      label: 'CSS',
      values: [100 * (80 / 1232), 100 * (515 / 1232), 100 * (630 / 1232)],
    },
    {
      color: stackColors.jsLight,
      label: 'JavaScript',
      values: [100 * (33 / 1232), 100 * (397 / 1232), 100 * (787 / 1232)],
    },
    {
      color: stackColors.ariaDark,
      label: 'ARIA',
      values: [100 * (836 / 1232), 100 * (313 / 1232), 100 * (54 / 1232)],
    },
    {
      color: emberColors.ember,
      label: 'Ember.js',
      values: [100 * (138 / 1232), 100 * (499 / 1232), 100 * (589 / 1232)],
    },
  ],
}).highchartsOptions;

// DEMO OF AUTO-GENERATED HighCharts
//=============================================================================

// Q1.01: How likely are you to recommend Ember to your friends and colleagues?
//------------------------------------------------

const SS_Q101 = new VerticalBarChart({
  chart: {
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    subtitle: '1 = Unlikely, 10 = Likely',
    title: 'How likely are you to recommend Ember?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (39 / 1227),
        100 * (19 / 1227),
        100 * (34 / 1227),
        100 * (36 / 1227),
        100 * (36 / 1227),
        100 * (67 / 1227),
        100 * (148 / 1227),
        100 * (278 / 1227),
        100 * (186 / 1227),
        100 * (384 / 1227),
      ],
    },
  ],
}).highchartsOptions;

// Q1.04: How long have you been working with Ember?
//------------------------------------------------
/*
const SS_Q104 = new VerticalBarChart({
  chart: {
    categories: [
      // '< 3 months',
      // '3 - 6 months',
      // '6 - 12 months',
      '< 1 year',
      '1 - 2 years',
      '2 - 3 years',
      '3 - 4 years',
      '4 - 5 years',
      '5+ years',
      // 'Started on Sproutcore 2 (or before!)',
    ],
    title: 'How long have you been working with Ember?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        // 100 * (47 / 1232),
        // 100 * (56 / 1232),
        // 100 * (78 / 1232),
        100 * (181 / 1232),
        100 * (173 / 1232),
        100 * (213 / 1232),
        100 * (209 / 1232),
        100 * (200 / 1232),
        100 * (253 / 1232),
        // 100 * (34 / 1232),
      ],
    },
  ],
}).highchartsOptions;
*/

// Q2.03: I use Ember for work:
//------------------------------------------------
/*
const SS_Q203 = new VerticalBarChart({
  chart: {
    categories: [
      'All of the time',
      'Most of the time',
      'Some of the time',
      'Never',
    ],
    title: 'I use Ember for work:',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (564 / 1232),
        100 * (406 / 1232),
        100 * (209 / 1232),
        100 * (42 / 1232),
      ],
    },
  ],
}).highchartsOptions;
*/

// Q2.04: When taking your most recent job:
//------------------------------------------------

const SS_Q204 = new VerticalBarChart({
  chart: {
    categories: [
      'My employer was not using Ember',
      'My employer was already using Ember',
      'Does not apply (e.g. I am a student)',
    ],
    title: 'When taking your most recent job:',
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
    {
      color: color2019,
      label: '2019',
      values: [100 * (453 / 1232), 100 * (718 / 1232), 100 * (49 / 1232)],
    },
  ],
}).highchartsOptions;

// Q2.05: When taking your most recent job your pre-existing knowledge of Ember.js was:
//------------------------------------------------

const SS_Q205 = new VerticalBarChart({
  chart: {
    categories: [
      'I did not know Ember',
      'Unimportant',
      'Important',
      'Very important',
    ],
    title:
      'When taking your most recent job, your pre-existing knowledge of Ember.js was:',
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
      values: [40.9, 27.2, 13.8, 18.1],
    },
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (532 / 1232),
        100 * (268 / 1232),
        100 * (178 / 1232),
        100 * (235 / 1232),
      ],
    },
  ],
}).highchartsOptions;

// Q3.01: How many developers at your company are responsible for writing Front-End code?
//------------------------------------------------
/*
const SS_Q301 = new VerticalBarChart({
  chart: {
    categories: [
      '1-10',
      '11-20',
      '21-50',
      '51-100',
      '101-500',
      '> 500',
      'I do not know',
    ],
    title:
      'How many developers at your company are responsible for writing Front-End code?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (699 / 1232),
        100 * (160 / 1232),
        100 * (95 / 1232),
        100 * (68 / 1232),
        100 * (76 / 1232),
        100 * (82 / 1232),
        100 * (39 / 1232),
      ],
    },
  ],
}).highchartsOptions;
*/

// Q3.02: How many developers at your company are responsible for writing Ember code?
//------------------------------------------------

const SS_Q302 = new VerticalBarChart({
  chart: {
    categories: ['1–10', '11–20', '21–50', '51–100', '> 100'],
    title:
      'How many developers at your company are responsible for writing Ember code?',
  },

  rawData: [
    {
      color: color2015,
      label: '2015',
      values: [78, 3.7, 1.7, 0.8, 0.3],
    },
    {
      color: color2016,
      label: '2016',
      values: [74, 6, 4, 2, 1],
    },
    {
      color: color2017,
      label: '2017',
      values: [69.8, 6.8, 4.8, 2.5, 2],
    },
    {
      color: color2018,
      label: '2018',
      values: [62.5, 9.4, 5.3, 3.9, 6.4],
    },
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (833 / 1232),
        100 * (101 / 1232),
        100 * (79 / 1232),
        100 * (47 / 1232),
        100 * (94 / 1232), // 58 from 101-500, 36 from > 500
        // 100 * (59 / 1232), // I do not know
      ],
    },
  ],
}).highchartsOptions;

// Q3.03: At this time next year, how many Ember developers does your company plan to employ?
//------------------------------------------------
/*
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
*/

// Prose for Q3.06
// Q3.05: What is the primary language of apps developed at your business?
//------------------------------------------------
/*
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
*/

// Q3.06: Does your business require applications to be internationalized?
//------------------------------------------------

const SS_Q306 = new VerticalBarChart({
  chart: {
    categories: ['Yes', 'No', 'I do not know'],
    title: 'Does your business require applications to be internationalized?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [100 * (695 / 1232), 100 * (472 / 1232), 100 * (46 / 1232)],
    },
  ],
}).highchartsOptions;

// Q4.05: What is the primary language of your server-side stack?
//------------------------------------------------

const SS_Q405 = new VerticalBarChart({
  chart: {
    categories: ['Ruby', 'Java', 'JavaScript', 'Python', 'PHP'],
    title: 'What is the primary language of your server-side stack?',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [41, 17, 24, 12, 13],
    },
    {
      color: color2017,
      label: '2017',
      values: [36.97, 20.57, 24.54, 13.5, 12.43],
    },
    {
      color: color2018,
      label: '2018',
      values: [33.7, 26.4, 22.1, 11.9, 10.3],
    },
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (369 / 1232),
        100 * (241 / 1232),
        100 * (134 / 1232),
        100 * (101 / 1232),
        100 * (78 / 1232),
      ],
    },
  ],
}).highchartsOptions;

// Q4.10: How many Ember apps do you work on?
//------------------------------------------------

const SS_Q410 = new VerticalBarChart({
  chart: {
    categories: ['1', '2 - 5', '5 - 10', '> 10'],
    title: 'How many Ember apps do you work on?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (354 / 1232),
        100 * (701 / 1232),
        100 * (100 / 1232),
        100 * (58 / 1232),
      ],
    },
  ],
}).highchartsOptions;

// Q4.18: How many addons have you written (including private, unpublished libraries)?
//------------------------------------------------
/*
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
*/

// Q4.19: How many addons have you published publicly?
//------------------------------------------------
/*
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
*/

// Q5.01: In which region do you live?
//------------------------------------------------

const SS_Q501 = new VerticalBarChart({
  chart: {
    categories: [
      'North America',
      'Europe',
      'Asia',
      'Oceania',
      'South America',
      'Other',
    ],
    title: 'In which region do you live?',
  },

  rawData: [
    {
      color: color2018,
      label: '2018',
      values: [53.7, 32.7, 7.8, 3.4, 3.2, 1.4],
    },
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (566 / 1232),
        100 * (468 / 1232),
        100 * (87 / 1232),
        100 * (40 / 1232),
        100 * (32 / 1232),
        100 * (17 / 1232),
      ],
    },
  ],
}).highchartsOptions;

// Q5.02: Do you have a disability?
//------------------------------------------------
/*
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
*/

// Q1.03: What are the ways you learn about and stay up to date with Ember?
//------------------------------------------------

const MS_Q103 = new VerticalBarChart({
  chart: {
    categories: [
      'Guides & API Docs',
      'Ember Blog',
      'RFCs',
      'Code samples',
      'Blog posts',
      'Stack Overflow',
      'Newsletters',
      'Discord',
      'Social media',
      'GitHub PRs',
      // 'discuss.emberjs.com',
      // 'Attending conferences',
      // 'Screencasts or video training',
      // 'Podcasts',
      // 'Local meetups',
      // 'Books / e-Books',
      // 'Ember Core notes repo',
      // 'In-person or other formal training',
      // 'Reddit',
      // 'Other',
    ],
    title: 'What are the ways you learn about and stay up to date with Ember?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (878 / 1232), // Guides & API Docs
        100 * (669 / 1232), // Ember Blog
        100 * (638 / 1232), // RFCs
        100 * (626 / 1232), // Code samples
        100 * (575 / 1232), // Blog posts
        100 * (419 / 1232), // Stack Overflow
        100 * (413 / 1232), // Newsletters
        100 * (398 / 1232), // Discord
        100 * (398 / 1232), // Social media
        100 * (372 / 1232), // GitHub PRs
        // 100 * (349 / 1232), // discuss.emberjs.com
        // 100 * (313 / 1232), // Attending conferences
        // 100 * (255 / 1232), // Screencasts or video training
        // 100 * (248 / 1232), // Podcasts
        // 100 * (218 / 1232), // Local meetups
        // 100 * (174 / 1232), // Books / e-Books
        // 100 * (154 / 1232), // Ember Core notes repo
        // 100 * (142 / 1232), // In-person or other formal training
        // 100 * (124 / 1232), // Reddit
        // 100 * (75 / 1232), // Other
      ],
    },
  ],
}).highchartsOptions;

// Q1.10: When learning Ember yourself, or teaching it to someone new, what topics were difficult to understand?
//------------------------------------------------
/*
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
*/

// Q1.11: Which text editors do you use for development?
//------------------------------------------------

const MS_Q111 = new VerticalBarChart({
  chart: {
    categories: [
      'Atom',
      'Sublime Text',
      'Vim',
      'WebStorm / IntelliJ / Other Jetbrains',
      'VS Code',
    ],
    title: 'Which text editors do you use for development?',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [39, 39.2, 29.24, 20.6, 6],
    },
    {
      color: color2017,
      label: '2017',
      values: [38.11, 26.56, 26.37, 21.08, 19.31],
    },
    {
      color: color2018,
      label: '2018',
      values: [28.2, 20.3, 20.5, 19, 37.9],
    },
    {
      color: color2019,
      label: '2019',
      values: [
        { name: 'Atom', y: 100 * (252 / 1232) },
        { name: 'Sublime Text', y: 100 * (181 / 1232) },
        // {name: 'Emacs', y: (100/1232)*46},
        { name: 'Vim', y: 100 * (272 / 1232) },
        // {name: 'Notepad++', y: (100/1232)*0},
        // {name: 'Visual Studio', y: (100/1232)*99},
        {
          name: 'WebStorm / IntelliJ / Other Jetbrains',
          y: 100 * (233 / 1232),
        },
        { name: 'VS Code', y: 100 * (700 / 1232) },
        // {name: 'Other', y: (100/1232)*28}
      ],
    },
  ],
}).highchartsOptions;

// Q1.12: Choose the option(s) that best describe your participation in the Ember community:
//------------------------------------------------

const MS_Q112 = new VerticalBarChart({
  chart: {
    categories: [
      'Answering community questions',
      'Attending meetups / conferences',
      'Maintaining a library or addon',
      'Opening issues',
      'Opening PRs',
      'Creating RFCs',
      'Commenting on RFCs',
      'Presenting at events / lectures',
      'Writing blog posts / articles',
      // 'None of these',
      'Other',
    ],
    title: 'Describe your participation in the Ember community:',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (194 / 1232),
        100 * (437 / 1232),
        100 * (327 / 1232),
        100 * (436 / 1232),
        100 * (299 / 1232),
        100 * (42 / 1232),
        100 * (160 / 1232),
        100 * (152 / 1232),
        100 * (178 / 1232),
        // 100 * (396 / 1232),
        100 * (75 / 1232),
      ],
    },
  ],
}).highchartsOptions;

// Q1.13: Which operating system(s) do you use for development?
//------------------------------------------------
/*
const MS_Q113 = new VerticalBarChart({
  chart: {
    categories: ['Mac OS', 'Linux/Unix', 'Windows', 'Other'],
    title: 'Which operating system(s) do you use for development?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (979 / 1232),
        100 * (338 / 1232),
        100 * (205 / 1232),
        100 * (1 / 1232),
      ],
    },
  ],
}).highchartsOptions;
*/

// Q1.14: With which of these other front-end framework(s) do you have some level of experience?
//------------------------------------------------
/*
const MS_Q114 = new VerticalBarChart({
  chart: {
    categories: [
      'Angular 1.x',
      // 'Angular 2.x',
      // 'Backbone',
      // 'Ionic',
      'jQuery / jQuery Mobile',
      // 'Knockout',
      // 'Marionette',
      // 'Meteor',
      // 'Polymer',
      // 'Preact',
      'React',
      // 'Sencha (ExtJS/Sencha Touch)',
      // 'Sproutcore',
      'Vue',
      'None (Ember is my first framework)',
      // 'Other',
    ],
    title:
      'With which of these other front-end framework(s) do you have experience?',
  },

  rawData: [
    {
      color: color2019,
      label: 'Some Experience',
      values: [
        100 * (414 / 1232), // Angular 1.x
        // 100 * (207 / 1232), // Angular 2.x
        // 100 * (368 / 1232), // Backbone
        // 100 * (95 / 1232), // Ionic
        100 * (950 / 1232), // jQuery / jQuery Mobile
        // 100 * (123 / 1232), // Knockout
        // 100 * (94 / 1232), // Marionette
        // 100 * (72 / 1232), // Meteor
        // 100 * (73 / 1232), // Polymer
        // 100 * (79 / 1232), // Preact
        100 * (690 / 1232), // React
        // 100 * (91 / 1232), // Sencha (ExtJS/Sencha Touch)
        // 100 * (31 / 1232), // Sproutcore
        100 * (333 / 1232), // Vue
        100 * (106 / 1232), // None (Ember is my first framework)
        // 100 * (94 / 1232), // Other
      ],
    },
    {
      color: color2019,
      label: 'Advanced Experience',
      values: [
        100 * (126 / 1232), // Angular 1.x
        // 100 * (73 / 1232), // Angular 2.x
        // 100 * (129 / 1232), // Backbone
        // 100 * (20 / 1232), // Ionic
        100 * (453 / 1232), // jQuery / jQuery Mobile
        // 100 * (28 / 1232), // Knockout
        // 100 * (38 / 1232), // Marionette
        // 100 * (12 / 1232), // Meteor
        // 100 * (16 / 1232), // Polymer
        // 100 * (22 / 1232), // Preact
        100 * (286 / 1232), // React
        // 100 * (25 / 1232), // Sencha (ExtJS/Sencha Touch)
        // 100 * (7 / 1232), // Sproutcore
        100 * (79 / 1232), // Vue
        100 * (327 / 1232), // None (Ember is my first framework)
        // 100 * (51 / 1232), // Other
      ],
    },
  ],
}).highchartsOptions;
*/

// Q1.15: With which of these other front-end framework(s) do you have an advanced level of experience?
//------------------------------------------------
/*
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
*/

// Q2.01: What best describes your role at work?
//------------------------------------------------
/*
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
*/

// Q2.02: Choose the option(s) that best describe your employment situation:
//------------------------------------------------
/*
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
*/

// Q3.04: What are the accessibility requirements for your business?
//------------------------------------------------

const MS_Q304 = new VerticalBarChart({
  chart: {
    categories: [
      'Required by law to provide accessibility',
      'Self-imposed requirement',
      'No requirements',
      'I do not know',
    ],
    title: 'What are the accessibility requirements for your business?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (224 / 1232),
        100 * (473 / 1232),
        100 * (462 / 1232),
        100 * (201 / 1232),
      ],
    },
  ],
}).highchartsOptions;

// Q3.07: In which sector(s) does your employer operate? Select all that apply:
//------------------------------------------------
/*
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
*/

// Q4.01: Which version(s) of Ember are in use in your apps?
//------------------------------------------------

const MS_Q401 = new AreaSplineChart({
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
      '2.12 LTS',
      '2.13',
      '2.14',
      '2.15',
      '2.16 LTS',
      '2.17',
      '2.18 LTS',
      '3.0',
      '3.1',
      '3.2',
      '3.3',
      '3.4 LTS',
      '3.5',
      '3.6',
      '3.7',
      '3.8',
      // 'Beta',
      // 'Canary',
      // 'Custom fork',
      // "I don't know",
      // 'Other',
    ],
    title: 'Which version(s) of Ember are in use in your apps?',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [
        32, // Pre 1.13
        36, // 1.13
        8, // 2.0
        6, // 2.1
        12, // 2.2
        27, // 2.3
        47, // 2.4 LTS
        /*
        3, // 2.5
        */
      ],
    },
    {
      color: color2017,
      label: '2017',
      values: [
        9.46, // Pre 1.13
        14.45, // 1.13
        2.97, // 2.0
        2.1, // 2.1
        2.02, // 2.2
        4.48, // 2.3
        11.29, // 2.4 LTS
        4.35, // 2.5
        4.48, // 2.6
        5.8, // 2.7
        21.2, // 2.8 LTS
        10.09, // 2.9
        21.6, // 2.10
        40.88, // 2.11
        19.31, // 2.12 LTS
      ],
    },
    {
      color: color2018,
      label: '2018',
      values: [
        5, // Pre 1.13
        7.8, // 1.13
        0, // 2.0
        0, // 2.1
        0, // 2.2
        0, // 2.3
        0, // 2.4 LTS
        0, // 2.5
        0, // 2.6
        1.4, // 2.7
        7, // 2.8 LTS
        2, // 2.9
        2.7, // 2.10
        2.7, // 2.11
        11.4, // 2.12 LTS
        7, // 2.13
        8, // 2.14
        6.6, // 2.15
        23.5, // 2.16 LTS
        9.3, // 2.17
        43.2, // 2.18 LTS
        27.8, // 3.0
      ],
    },
    {
      color: color2019,
      label: '2019',
      values: [
        0, // Pre 1.13
        100 * (79 / 1232), // 1.13
        0, // 2.0
        0, // 2.1
        0, // 2.2
        0, // 2.3
        100 * (48 / 1232), // 2.4 LTS
        1, // 2.5
        0, // 2.6
        1, // 2.7
        100 * (102 / 1232), // 2.8 LTS
        2, // 2.9
        1, // 2.10
        1, // 2.11
        2, // 2.12 LTS
        2, // 2.13
        100 * (48 / 1232), // 2.14
        100 * (30 / 1232), // 2.15
        100 * (57 / 1232), // 2.16 LTS
        100 * (36 / 1232), // 2.17
        100 * (282 / 1232), // 2.18 LTS
        100 * (80 / 1232), // 3.0
        100 * (111 / 1232), // 3.1
        100 * (75 / 1232), // 3.2
        100 * (80 / 1232), // 3.3
        100 * (289 / 1232), // 3.4 LTS
        100 * (200 / 1232), // 3.5
        100 * (179 / 1232), // 3.6
        100 * (356 / 1232), // 3.7
        100 * (214 / 1232), // 3.8
        // 100 * (13 / 1232), // Beta
        // 100 * (14 / 1232), // Canary
        // 100 * (4 / 1232), // Custom fork
        // 100 * (51 / 1232), // I don't know
        // 100 * (11 / 1232), // Other
      ],
    },
  ],
}).highchartsOptions;

// Q4.02: If you use Ember Data, which version(s) are used in your apps?
//------------------------------------------------
/*
const MS_Q402 = new AreaSplineChart({
  chart: {
    categories: [
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
      '2.12 LTS',
      '2.13',
      '2.14',
      '2.15',
      '2.16 LTS',
      '2.17',
      '2.18 LTS',
      '3.0',
      '3.1',
      '3.2',
      '3.3',
      '3.4 LTS',
      '3.5',
      '3.6',
      '3.7',
      '3.8',
      // 'Beta',
      // 'Canary',
      // 'Custom fork',
      // "I don't know",
      // 'Other',
    ],
    title: 'If you use Ember Data, which version(s) are used in your apps?',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [
        27, // 1.13
        6, // 2.0
        4, // 2.1
        8, // 2.2
        21, // 2.3
        42, // 2.4 LTS
      ],
    },
    {
      color: color2017,
      label: '2017',
      values: [
        9, // 1.13
        2.15, // 2.0
        2.1, // 2.1
        1.5, // 2.2
        2.8, // 2.3
        7, // 2.4 LTS
        3, // 2.5
        4, // 2.6
        4, // 2.7
        13.8, // 2.8 LTS
        7, // 2.9
        21.6, // 2.10
        34.9, // 2.11
        17, // 2.12 LTS
      ],
    },
    {
      color: color2018,
      label: '2018',
      values: [
        0, // 1.13
        0, // 2.0
        0, // 2.1
        0, // 2.2
        0, // 2.3
        5.9, // 2.4 LTS
        0, // 2.5
        0, // 2.6
        1, // 2.7
        5.2, // 2.8 LTS
        2, // 2.9
        2.3, // 2.10
        2.5, // 2.11
        12.5, // 2.12 LTS
        6.2, // 2.13
        6.2, // 2.14
        0, // 2.15
        17.2, // 2.16 LTS
        6.8, // 2.17
        35.8, // 2.18 LTS
        21.5, // 3.0
      ],
    },
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (50 / 1232), // 1.13
        0, // 2.0
        0, // 2.1
        0, // 2.2
        0, // 2.3
        100 * (40 / 1232), // 2.4 LTS
        0, // 2.5
        0, // 2.6
        0, // 2.7
        100 * (84 / 1232), // 2.8 LTS
        2, // 2.9
        1, // 2.10
        1, // 2.11
        2, // 2.12 LTS
        2, // 2.13
        100 * (46 / 1232), // 2.14
        100 * (19 / 1232), // 2.15
        100 * (49 / 1232), // 2.16 LTS
        100 * (33 / 1232), // 2.17
        100 * (193 / 1232), // 2.18 LTS
        100 * (61 / 1232), // 3.0
        100 * (82 / 1232), // 3.1
        100 * (52 / 1232), // 3.2
        100 * (70 / 1232), // 3.3
        100 * (253 / 1232), // 3.4 LTS
        100 * (156 / 1232), // 3.5
        100 * (121 / 1232), // 3.6
        100 * (260 / 1232), // 3.7
        100 * (154 / 1232), // 3.8
        // 100 * (7 / 1232), // Beta
        // 100 * (5 / 1232), // Canary
        // 100 * (10 / 1232), // Custom fork
        // 100 * (123 / 1232), // I don't know
        // 100 * (28 / 1232), // Other
      ],
    },
  ],
}).highchartsOptions;
*/

// Q4.03: If you use Ember CLI, which version(s) are used in your apps?
//------------------------------------------------
/*
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
*/

// Q4.06: Which of these server-side frameworks do you use?
//------------------------------------------------

const MS_Q406 = new VerticalBarChart({
  chart: {
    categories: [
      'Rails',
      'Express',
      'Phoenix',
      'Spring',
      'Django',
      'MVC/WebAPI',
      // 'Flask (Python)'
      // 'None',
    ],
    title: 'Which of these server-side frameworks do you use?',
  },

  rawData: [
    {
      color: color2016,
      label: '2016',
      values: [
        46.1,
        25.8,
        10.6,
        11.0,
        9,
        7.6,
        // 5.7,
        // 0,
      ],
    },
    {
      color: color2017,
      label: '2017',
      values: [
        37.9,
        20.4,
        10.1,
        8.8,
        10.0,
        6.2,
        // 5.8,
        // 0,
      ],
    },
    {
      color: color2018,
      label: '2018',
      values: [
        35.0,
        21.6,
        12.5,
        20.5,
        8.2,
        7.7,
        // 5.7,
        // 7.6,
      ],
    },
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (435 / 1209), // Rails
        100 * (239 / 1209), // Express
        100 * (133 / 1209), // Phoenix
        100 * (115 / 1209), // Spring
        100 * (93 / 1209), // Django
        100 * (97 / 1209), // MVC/WebAPI
        // 100 * (74 / 1209), // Flask (Python)
        // 100 * (61 / 1209), // None
        // 100 * (150 / 1232), // Other
        // 100 * (92 / 1232), // Spring Boot (Java)
        // 100 * (71 / 1232), // Play (Scala & Java)
        // 100 * (63 / 1232), // Laravel (PHP)
        // 100 * (48 / 1232), // MVC (.NET)
        // 100 * (38 / 1232), // Symfony (PHP)
        // 100 * (37 / 1232), // Sinatra (Ruby)
        // 100 * (34 / 1232), // Koa (JavaScript)
        // 100 * (26 / 1232), // Hapi (JavaScript)
        // 100 * (14 / 1232), // Sails.js (JavaScript)
      ],
    },
  ],
}).highchartsOptions;

// Q4.07: What standards do you follow for HTTP API design?
//------------------------------------------------
/*
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
*/

// Q4.08: What testing framework(s) do you use in your Ember apps?
//------------------------------------------------
/*
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
*/

// Q4.09: How old are your Ember applications?
//------------------------------------------------

const MS_Q409 = new VerticalBarChart({
  chart: {
    categories: [
      '< 6 months',
      '6 - 12 months',
      '1 - 2 years',
      '2 - 3 years',
      '3 - 4 years',
      '4+ years',
    ],
    title: 'How old are your Ember applications?',
  },
  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (190 / 1232),
        100 * (209 / 1232),
        100 * (361 / 1232),
        100 * (399 / 1232),
        100 * (312 / 1232),
        100 * (336 / 1232),
      ],
    },
  ],
}).highchartsOptions;

// Q4.11: What technologies are part of your deployment stack?
//------------------------------------------------
/*
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
*/

// Q4.12: What is the primary target platform for your Ember apps?
//------------------------------------------------
/*
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
*/

// Q4.13: Who uses your application(s)?
//------------------------------------------------

const MS_Q413 = new VerticalBarChart({
  chart: {
    categories: [
      'Business consumers (B2B)',
      'The general public (B2C)',
      'Internal users',
    ],
    title: 'Who uses your application(s)?',
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
    {
      color: color2019,
      label: '2019',
      values: [100 * (888 / 1232), 100 * (613 / 1232), 100 * (479 / 1232)],
    },
  ],
}).highchartsOptions;

// Q4.14: What browser versions do your applications target?
//------------------------------------------------
/*
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
*/

// Q4.15: At this time next year, what browser versions do you expect your applications to target?
//------------------------------------------------
/*
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
*/

// Q4.16: Which of these best describes your use of Ember in production applications?
//------------------------------------------------
/*
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
*/

// Q4.17: What method do you rely on for search engine indexing?
//------------------------------------------------
/*
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
*/

// Q5.04: Which categories describe you?
//------------------------------------------------
/*
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
*/

// Q6.01: Did you participate in any of the following surveys?
//------------------------------------------------

const MS_Q601 = new VerticalBarChart({
  chart: {
    categories: [
      '2018 NPM JavaScript EcoSystem Survey',
      '2018 StackOverflow Developer Survey',
      'GitLab 2018 Global Developer Survey',
      'The State of JavaScript 2018',
    ],
    title: 'Did you participate in any of the following surveys?',
  },
  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (261 / 1232),
        100 * (311 / 1232),
        100 * (45 / 1232),
        100 * (484 / 1232),
      ],
    },
  ],
}).highchartsOptions;

//=============================================================================
export default class EmberCommunitySurvey2019Controller extends Controller {
  stackSkillsChart = stackSkillsChart;

  // DEMO OF AUTO-GENERATED EXPORTS
  //=============================================================================
  SS_Q101 = SS_Q101;
  // SS_Q104 = SS_Q104; // unused
  // SS_Q203 = SS_Q203; // unused
  SS_Q204 = SS_Q204;
  SS_Q205 = SS_Q205;
  // SS_Q301 = SS_Q301; // unused
  SS_Q302 = SS_Q302;
  // SS_Q303 = SS_Q303; // unused
  // SS_Q305 = SS_Q305; // unused
  SS_Q306 = SS_Q306;
  SS_Q405 = SS_Q405;
  SS_Q410 = SS_Q410;
  // SS_Q418 = SS_Q418; // unused
  // SS_Q419 = SS_Q419; // unused
  SS_Q501 = SS_Q501;
  // SS_Q502 = SS_Q502; // unused
  //=============================================================================
  MS_Q103 = MS_Q103;
  // MS_Q110 = MS_Q110; // unused
  MS_Q111 = MS_Q111;
  MS_Q112 = MS_Q112;
  // MS_Q113 = MS_Q113; // unused
  // MS_Q114 = MS_Q114; // unused
  // MS_Q115 = MS_Q115; // unused
  // MS_Q201 = MS_Q201; // unused
  // MS_Q202 = MS_Q202; // unused
  MS_Q304 = MS_Q304;
  // MS_Q307 = MS_Q307; // unused
  MS_Q401 = MS_Q401;
  // MS_Q402 = MS_Q402; // unused
  // MS_Q403 = MS_Q403; // unused
  MS_Q406 = MS_Q406;
  // MS_Q407 = MS_Q407; // unused
  // MS_Q408 = MS_Q408; // unused
  MS_Q409 = MS_Q409;
  // MS_Q411 = MS_Q411; // unused
  // MS_Q412 = MS_Q412; // unused
  MS_Q413 = MS_Q413;
  // MS_Q414 = MS_Q414; // unused
  // MS_Q415 = MS_Q415; // unused
  // MS_Q416 = MS_Q416; // unused
  // MS_Q417 = MS_Q417; // unused
  // MS_Q504 = MS_Q504; // unused
  MS_Q601 = MS_Q601;
  //=============================================================================
}
