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
});

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
});

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
});
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
});
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
});

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
});

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
});
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
});

// Q3.03: At this time next year, how many Ember developers does your company plan to employ?
//------------------------------------------------
/*
const SS_Q303 = new VerticalBarChart({
  chart: {
    categories: ['More', 'The same amount', 'Fewer', 'I do not know'],
    title:
      'At this time next year, how many Ember developers does your company plan to employ?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (530 / 1232),
        100 * (306 / 1232),
        100 * (89 / 1232),
        100 * (292 / 1232),
      ],
    },
  ],
});
*/

// Prose for Q3.06
// Q3.05: What is the primary language of apps developed at your business?
//------------------------------------------------
/*
const SS_Q305 = new VerticalBarChart({
  chart: {
    categories: [
      'English',
      'Chinese',
      'Spanish',
      'Hindi',
      'Arabic',
      'French',
      'Other',
    ],
    title: 'What is the primary language of apps developed at your business?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (1010 / 1232),
        100 * (8 / 1232),
        100 * (32 / 1232),
        100 * (0 / 1232),
        100 * (0 / 1232),
        100 * (30 / 1232),
        100 * (137 / 1232),
      ],
    },
  ],
});
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
});

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
});

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
});

// Q4.18: How many addons have you written (including private, unpublished libraries)?
//------------------------------------------------
/*
const SS_Q418 = new VerticalBarChart({
  chart: {
    categories: ['0', '1 - 3', '4 - 6', '> 6'],
    title: 'How many addons have you written?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (394 / 1232),
        100 * (450 / 1232),
        100 * (148 / 1232),
        100 * (213 / 1232),
      ],
    },
  ],
});
*/

// Q4.19: How many addons have you published publicly?
//------------------------------------------------
/*
const SS_Q419 = new VerticalBarChart({
  chart: {
    categories: ['0', '1 - 3', '4 - 6', '> 6'],
    title: 'How many addons have you published publicly?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (795 / 1232),
        100 * (306 / 1232),
        100 * (43 / 1232),
        100 * (62 / 1232),
      ],
    },
  ],
});
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
});

// Q5.02: Do you have a disability?
//------------------------------------------------
/*
const SS_Q502 = new VerticalBarChart({
  chart: {
    categories: ['Yes', 'No', 'Prefer not to answer'],
    title: 'Do you have a disability?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [100 * (26 / 1232), 100 * (1175 / 1232), 100 * (0 / 1232)],
    },
  ],
});
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
});

// Q1.10: When learning Ember yourself, or teaching it to someone new, what topics were difficult to understand?
//------------------------------------------------
/*
const MS_Q110 = new VerticalBarChart({
  chart: {
    categories: [
      // 'JavaScript Modules (import/export/etc.)',
      // 'JavaScript async/await',
      'Customizing ember-data via adapters and serializers',
      'Managing application state',
      // 'Managing CSS complexity',
      // 'Writing basics tests',
      // 'Building your own test helpers',
      // 'Composition with components',
      'Engines',
      'Fastboot & Server-Side Rendering',
      // 'Progressive Web App Technologies',
      'Debugging',
      // 'Node.js',
      'Using the ember-data store',
      // 'Component lifecycle',
      // 'Routing & the Router',
      // 'Promises',
      'Measuring client-side performance',
      'Closure actions',
      // 'Other',
    ],
    title:
      'When learning Ember yourself, or teaching it to someone new, what topics were difficult to understand?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        // 100 * (118 / 1232),
        // 100 * (148 / 1232),
        100 * (639 / 1232),
        100 * (447 / 1232),
        // 100 * (217 / 1232),
        // 100 * (253 / 1232),
        // 100 * (270 / 1232),
        // 100 * (281 / 1232),
        100 * (423 / 1232),
        100 * (406 / 1232),
        // 100 * (171 / 1232),
        100 * (314 / 1232),
        // 100 * (90 / 1232),
        100 * (425 / 1232),
        // 100 * (246 / 1232),
        // 100 * (220 / 1232),
        // 100 * (208 / 1232),
        100 * (378 / 1232),
        100 * (297 / 1232),
        // 100 * (90 / 1232),
      ],
    },
  ],
});
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
});

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
});

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
});
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
});
*/

// Q2.01: What best describes your role at work?
//------------------------------------------------
/*
const MS_Q201 = new VerticalBarChart({
  chart: {
    categories: [
      'Software Developer/Engineer',
      // 'Designer',
      'Project manager',
      'Dev-ops',
      // 'Systems administration',
      // 'Student',
      'Leadership position (CTO, VP, etc.)',
      // 'Other',
    ],
    title: 'What best describes your role at work?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (1168 / 1232),
        // 100 * (79 / 1232),
        100 * (124 / 1232),
        100 * (119 / 1232),
        // 100 * (51 / 1232),
        // 100 * (15 / 1232),
        100 * (182 / 1232),
        // 100 * (23 / 1232),
      ],
    },
  ],
});
*/

// Q2.02: Choose the option(s) that best describe your employment situation:
//------------------------------------------------
/*
const MS_Q202 = new VerticalBarChart({
  chart: {
    categories: [
      'Employee working on product(s)',
      'Employee in a firm doing consulting/client work',
      'Employee working on internal Ember tooling',
      'Independent product developer',
    ],
    title: 'Choose the option(s) that best describe your employment situation:',
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
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (961 / 1232), // 'Employee working on product(s)'
        100 * (157 / 1232), // 'Employee in a firm doing consulting/client work'
        100 * (158 / 1232), // 'Employee working on internal Ember tooling'
        100 * (114 / 1232), // 'Independent product developer'
        100 * (102 / 1232), // 'Independent consultant'
        100 * (11 / 1232), // 'Employed in a non-programming field'
        100 * (13 / 1232), // 'Unemployed'
      ],
    },
  ],
});
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
});

// Q3.07: In which sector(s) does your employer operate? Select all that apply:
//------------------------------------------------
/*
const MS_Q307 = new VerticalBarChart({
  chart: {
    categories: [
      // 'Agriculture',
      'Advertising',
      // 'Arts & entertainment',
      'Consulting',
      'Education',
      'Financial services',
      // 'Government',
      'Health care & social assistance',
      // 'Insurance',
      // 'Manufacturing',
      // 'Real estate',
      // 'Retailers (including online)',
      'Technology',
      // 'Transportation',
      // 'Travel/hospitality/food services',
      // 'Utilities (telecom, energy)',
      // 'Other',
    ],
    title: 'In which sector(s) do you operate?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        // 100 * (33 / 1232),
        100 * (101 / 1232),
        // 100 * (89 / 1232),
        100 * (157 / 1232),
        100 * (138 / 1232),
        100 * (202 / 1232),
        // 100 * (86 / 1232),
        100 * (140 / 1232),
        // 100 * (57 / 1232),
        // 100 * (65 / 1232),
        // 100 * (46 / 1232),
        // 100 * (93 / 1232),
        100 * (611 / 1232),
        // 100 * (63 / 1232),
        // 100 * (82 / 1232),
        // 100 * (83 / 1232),
        // 100 * (174 / 1232),
      ],
    },
  ],
});
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
});

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
});
*/

// Q4.03: If you use Ember CLI, which version(s) are used in your apps?
//------------------------------------------------
/*
const MS_Q403 = new VerticalBarChart({
  chart: {
    categories: [
      // '1.13',
      // '2.0-2.6',
      // '2.7-2.13',
      // '2.14',
      // '2.15',
      // '2.16',
      // '2.17',
      '2.18',
      // '3.0',
      // '3.1',
      // '3.2',
      // '3.3',
      '3.4',
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
    title: 'If you use Ember CLI, which version(s) are used in your apps?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        // 100 * (37 / 1232),
        // 100 * (34 / 1232),
        // 100 * (73 / 1232),
        // 100 * (33 / 1232),
        // 100 * (20 / 1232),
        // 100 * (47 / 1232),
        // 100 * (29 / 1232),
        100 * (210 / 1232),
        // 100 * (58 / 1232),
        // 100 * (77 / 1232),
        // 100 * (68 / 1232),
        // 100 * (74 / 1232),
        100 * (222 / 1232),
        100 * (166 / 1232),
        100 * (148 / 1232),
        100 * (353 / 1232),
        100 * (213 / 1232),
        // 100 * (8 / 1232),
        // 100 * (6 / 1232),
        // 100 * (2 / 1232),
        // 100 * (104 / 1232),
        // 100 * (11 / 1232),
      ],
    },
  ],
});
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
        46.1, 25.8, 10.6, 11.0, 9, 7.6,
        // 5.7,
        // 0,
      ],
    },
    {
      color: color2017,
      label: '2017',
      values: [
        37.9, 20.4, 10.1, 8.8, 10.0, 6.2,
        // 5.8,
        // 0,
      ],
    },
    {
      color: color2018,
      label: '2018',
      values: [
        35.0, 21.6, 12.5, 20.5, 8.2, 7.7,
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
});

// Q4.07: What standards do you follow for HTTP API design?
//------------------------------------------------
/*
const MS_Q407 = new VerticalBarChart({
  chart: {
    categories: [
      // 'Falcor',
      'GraphQL',
      // 'HAL',
      // 'HATEOAS',
      'JSON-API',
      'Rest.li',
      'Custom design',
      // 'I am unsure',
      // 'Other',
    ],
    title: 'What standards do you follow for HTTP API design?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        // 100 * (0 / 1232),
        100 * (130 / 1232),
        // 100 * (17 / 1232),
        // 100 * (31 / 1232),
        100 * (758 / 1232),
        100 * (155 / 1232),
        100 * (384 / 1232),
        // 100 * (79 / 1232),
        // 100 * (71 / 1232),
      ],
    },
  ],
});
*/

// Q4.08: What testing framework(s) do you use in your Ember apps?
//------------------------------------------------
/*
const MS_Q408 = new VerticalBarChart({
  chart: {
    categories: [
      // 'Blanket.js',
      // 'Capybara',
      'Mocha',
      'QUnit',
      // 'Jasmine',
      // 'Jest',
      // 'Karma',
      // 'Cucumber',
      "I don't write tests",
      // 'Other',
    ],
    title: 'What testing framework(s) do you use in your Ember apps?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        // 100 * (6 / 1232),
        // 100 * (38 / 1232),
        100 * (206 / 1232),
        100 * (887 / 1232),
        // 100 * (30 / 1232),
        // 100 * (26 / 1232),
        // 100 * (18 / 1232),
        // 100 * (45 / 1232),
        100 * (176 / 1232),
        // 100 * (44 / 1232),
      ],
    },
  ],
});
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
});

// Q4.11: What technologies are part of your deployment stack?
//------------------------------------------------
/*
const MS_Q411 = new VerticalBarChart({
  chart: {
    categories: [
      'Amazon Web Services (S3, Elastic Beanstalk, Lambda, etc.)',
      // 'Ansible',
      // 'App Store or Native Shell (Play Store, App Store, Ad Hoc)',
      // 'Azure',
      // 'Bamboo',
      // 'Capistrano',
      // 'Chef',
      'Circle CI',
      // 'Cloudant',
      // 'Codeship',
      'Custom or shell scripts',
      'Docker',
      'Ember CLI Deploy',
      // 'Firebase',
      // 'FTP',
      'Git',
      // 'GitHub Pages',
      // 'GitLab CI',
      // 'Google Cloud',
      'Heroku',
      'Jenkins or Hudson',
      // 'Netlify',
      // 'Pagefront',
      // 'Rackspace Cloud',
      // 'Rsync or SCP',
      'Self-hosted (dedicated infrastructure)',
      // 'Surge.sh',
      // 'Team City',
      'Travis CI',
      // 'VPS (cloud infrastructure)',
      // 'Zeit',
      'Other',
    ],
    title: 'What technologies are part of your deployment stack?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (688 / 1232),
        // 100 * (126 / 1232),
        // 100 * (74 / 1232),
        // 100 * (103 / 1232),
        // 100 * (63 / 1232),
        // 100 * (75 / 1232),
        // 100 * (46 / 1232),
        100 * (201 / 1232),
        // 100 * (0 / 1232),
        // 100 * (42 / 1232),
        100 * (267 / 1232),
        100 * (571 / 1232),
        100 * (455 / 1232),
        // 100 * (85 / 1232),
        // 100 * (43 / 1232),
        100 * (871 / 1232),
        // 100 * (101 / 1232),
        // 100 * (137 / 1232),
        // 100 * (82 / 1232),
        100 * (234 / 1232),
        100 * (292 / 1232),
        // 100 * (62 / 1232),
        // 100 * (0 / 1232),
        // 100 * (7 / 1232),
        // 100 * (59 / 1232),
        100 * (227 / 1232),
        // 100 * (16 / 1232),
        // 100 * (33 / 1232),
        100 * (178 / 1232),
        // 100 * (93 / 1232),
        // 100 * (14 / 1232),
        100 * (159 / 1232),
      ],
    },
  ],
});
*/

// Q4.12: What is the primary target platform for your Ember apps?
//------------------------------------------------
/*
const MS_Q412 = new VerticalBarChart({
  chart: {
    categories: [
      'Desktop and mobile',
      'Desktop only',
      'Mobile web',
      // 'Mobile native (Cordova/Phonegap/Crosswalk)',
      // 'Legacy desktop (point-of-sale units or embedded devices)',
      // 'Browser extension (Chrome, Firefox, etc.)',
    ],
    title: 'What is the primary target platform for your Ember apps?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (784 / 1232),
        100 * (543 / 1232),
        100 * (91 / 1232),
        // 100 * (97 / 1232),
        // 100 * (25 / 1232),
        // 100 * (37 / 1232),
      ],
    },
  ],
});
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
});

// Q4.14: What browser versions do your applications target?
//------------------------------------------------
/*
const MS_Q414 = new VerticalBarChart({
  chart: {
    categories: ['Modern browsers', 'Mobile browsers', 'IE 11', 'IE 10'],
    title: 'What browser versions do your applications target?',
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
      color: color2019,
      label: '2019',
      values: [92.7, 54.8, 25.4, 2.5],
    },
  ],
});
*/

// Q4.15: At this time next year, what browser versions do you expect your applications to target?
//------------------------------------------------
/*
const MS_Q415 = new VerticalBarChart({
  chart: {
    categories: [
      'Modern browsers',
      'Mobile browsers',
      // 'Legacy Chrome, Firefox, Safari, etc.',
      'IE 11',
      'IE 10',
      // 'Other',
    ],
    title:
      'At this time next year, what browser versions do you expect your applications to target?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (1143 / 1232),
        100 * (676 / 1232),
        // 100 * (168 / 1232),
        100 * (313 / 1232),
        100 * (32 / 1232),
        // 100 * (17 / 1232),
      ],
    },
  ],
});
*/

// Q4.16: Which of these best describes your use of Ember in production applications?
//------------------------------------------------
/*
const MS_Q416 = new VerticalBarChart({
  chart: {
    categories: [
      'None / Prototypes only',
      'Tens',
      'Hundreds',
      'Thousands',
      'Tens of thousands',
      'Hundreds of thousands',
      'Millions',
    ],
    title:
      'Which of these best describes your use of Ember in production applications?',
  },

  rawData: [
    {
      color: color2018,
      label: '2018',
      values: [9.1, 23.3, 34.5, 30.7, 17.7, 11.1, 9.8],
    },

    {
      color: color2019,
      label: '2019',
      values: [
        100 * (92 / 1232),
        100 * (242 / 1232),
        100 * (405 / 1232),
        100 * (400 / 1232),
        100 * (289 / 1232),
        100 * (170 / 1232),
        100 * (117 / 1232),
      ],
    },
  ],
});
*/

// Q4.17: What method do you rely on for search engine indexing?
//------------------------------------------------
/*
const MS_Q417 = new VerticalBarChart({
  chart: {
    categories: [
      'FastBoot',
      // 'FastBoot for prerendering (Prember)',
      // 'Phantom.js or other pre-rendering',
      // 'noscript tags',
      'Search engine JavaScript execution (no pre-render)',
      'Private app behind an authentication flow',
      'I do not know',
      'Other',
    ],
    title: 'What method do you rely on for search engine indexing?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (158 / 1232),
        // 100 * (64 / 1232),
        // 100 * (32 / 1232),
        // 100 * (17 / 1232),
        100 * (114 / 1232),
        100 * (532 / 1232),
        100 * (308 / 1232),
        100 * (93 / 1232),
      ],
    },
  ],
});
*/

// Q5.04: Which categories describe you?
//------------------------------------------------
/*
const MS_Q504 = new VerticalBarChart({
  chart: {
    categories: [
      'American Indian or Alaska Native',
      'Asian',
      'Black or African American',
      'Hispanic/Latino/Spanish origin',
      'Middle Eastern or North African',
      'Pacific Islander',
      'White',
      'Some other race/ethnicity or origin',
      'Prefer not to answer',
    ],
    title: 'Which categories describe you?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (8 / 1232),
        100 * (144 / 1232),
        100 * (23 / 1232),
        100 * (98 / 1232),
        100 * (25 / 1232),
        100 * (5 / 1232),
        100 * (858 / 1232),
        100 * (23 / 1232),
        100 * (73 / 1232),
      ],
    },
  ],
});
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
});

//=============================================================================
export default class Survey2019Controller extends Controller {
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
