import Controller from '@ember/controller';
import { HorizontalBarChart, PieChart } from 'ember-website/utils/highcharts';

// 2020 Color Palette
// eslint-disable-next-line no-unused-vars
const darkGrayColor = '#4b4b4b';
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
var color2017 = darkGrayColor;
var color2018 = emberColors.gray;
var color2019 = orangePalette.blue;
var color2020 = orangePalette.orangeDarkest;
// eslint-disable-next-line no-unused-vars
// var colorFutureYear = emberColors.yellow;

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
  htmlData: [1.9, 36.0, 62.1],
  cssData: [9.6, 47.0, 43.4],
  jsData: [2.7, 35.9, 61.4],
  ariaData: [68.3, 25.7, 6],
  //emberData: [11.3, 40.7, 48],
};
const stackSkillsChart = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Rank your web skills' },
    yAxis: { title: { text: 'Percent' } },
    xAxis: { categories: ['Beginner', 'Intermediate', 'Advanced'] },
  },
  data: [
    { name: 'ARIA', color: stackColors.ariaDark, data: stackData.ariaData },
    { name: 'CSS', color: stackColors.cssLight, data: stackData.cssData },
    { name: 'HTML', color: stackColors.htmlLight, data: stackData.htmlData },
    { name: 'JavaScript', color: stackColors.jsLight, data: stackData.jsData },
    // { name: 'Ember.js', color: emberColors.ember, data: stackData.emberData },
  ],
};

// AUTO-GENERATED HighCharts
//=============================================================================

// Q1.01: How likely are you to recommend Ember to your friends and colleagues?
//------------------------------------------------

const SS_Q101 = {
  options: {
    chart: { type: 'spline' },
    title: {
      text: 'How likely are you to recommend Ember?',
    },
    subtitle: { text: 'On a scale of 1-5' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent of Responses' } },
  },
  data: [
    {
      name: '2020',
      color: color2020,
      data: [
        { name: '1', y: (100 / 699) * 35 },
        { name: '2', y: (100 / 699) * 25 },
        { name: '3', y: (100 / 699) * 94 },
        { name: '4', y: (100 / 699) * 201 },
        { name: '5', y: (100 / 699) * 344 },
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
    yAxis: { title: { text: 'Percent of Responses' } },
  },
  data: [
    {
      name: '2020',
      color: color2020,
      data: [
        // {name: '< 3 months', y: (100/1006)*47},
        // {name: '3 - 6 months', y: (100/1006)*56},
        // {name: '6 - 12 months', y: (100/1006)*78},
        { name: '< 1 year', y: (100 / 761) * 66 },
        { name: '1 - 3 years', y: (100 / 761) * 210 },
        { name: '4 - 5 years', y: (100 / 761) * 252 },
        { name: '6 - 8 years', y: (100 / 761) * 196 },
        { name: '9+ years', y: (100 / 761) * 37 },
        // {name: 'Started on Sproutcore 2 (or before!)', y: (100/1006)*34}
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

// Q2.04: Are you still required to support versions of Internet Explorer?
//------------------------------------------------

const SS_Q204 = new PieChart({
  chart: {
    title: 'Are you still required to support versions of Internet Explorer?',
  },

  rawData: [
    { color: emberColors.blue, label: 'Yes', value: 311 },
    { color: emberColors.ember, label: 'No', value: 443 },
  ],
}).highchartsOptions;

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
        { name: '1-10', y: (100 / 1180) * 699 },
        { name: '11-20', y: (100 / 1180) * 160 },
        { name: '21-50', y: (100 / 1180) * 95 },
        { name: '51-100', y: (100 / 1180) * 68 },
        { name: '> 100', y: (100 / 1180) * 158 },
        { name: 'I do not know', y: (100 / 1180) * 39 },
      ],
    },
    {
      name: '2020',
      color: color2020,
      data: [
        { name: '1-10', y: (100 / 752) * 441 },
        { name: '11-20', y: (100 / 752) * 109 },
        { name: '21-50', y: (100 / 752) * 61 },
        { name: '51-100', y: (100 / 752) * 29 },
        { name: '> 100', y: (100 / 752) * 112 },
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
    yAxis: { title: { text: 'Percent of Responses' } },
  },
  data: [
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
        { name: '1-10', y: (100 / 1154) * 833 },
        { name: '11-20', y: (100 / 1154) * 101 },
        { name: '21-50', y: (100 / 1154) * 79 },
        { name: '51-100', y: (100 / 1154) * 47 },
        { name: '> 100', y: (100 / 1154) * 94 },
      ],
    },
    {
      name: '2020',
      color: color2020,
      data: [
        { name: '1-10', y: (100 / 749) * 487 },
        { name: '11-20', y: (100 / 749) * 106 },
        { name: '21-50', y: (100 / 749) * 57 },
        { name: '51-100', y: (100 / 749) * 25 },
        { name: '> 100', y: (100 / 749) * 74 },
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
        { name: 'More', y: (100 / 1006) * 530 },
        { name: 'The same amount', y: (100 / 1006) * 306 },
        { name: 'Fewer', y: (100 / 1006) * 89 },
        { name: 'I do not know', y: (100 / 1006) * 292 },
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
      text: 'Primary App Language',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent of Responses' } },
  },
  data: [
    {
      showInLegend: false,
      name: '2020',
      color: color2020,
      data: [
        { name: 'English', y: (100 / 758) * 656 },
        { name: 'French', y: (100 / 758) * 20 },
        { name: 'German', y: (100 / 758) * 35 },
        { name: 'Spanish', y: (100 / 758) * 11 },
        { name: 'Other', y: (100 / 758) * 36 },
      ],
    },
  ],
};

// Q3.06: Does your business require applications to be internationalized?
//------------------------------------------------

const SS_Q306 = new PieChart({
  chart: {
    title: 'Do you internationalize your applications?',
  },

  rawData: [
    { color: emberColors.blue, label: 'Yes', value: 480 },
    { color: emberColors.ember, label: 'No', value: 267 },
  ],
}).highchartsOptions;

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
        { name: '1', y: (100 / 1006) * 354 },
        { name: '2 - 5', y: (100 / 1006) * 701 },
        { name: '5 - 10', y: (100 / 1006) * 100 },
        { name: '> 10', y: (100 / 1006) * 58 },
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
        { name: '0', y: (100 / 1006) * 394 },
        { name: '1 - 3', y: (100 / 1006) * 450 },
        { name: '4 - 6', y: (100 / 1006) * 148 },
        { name: '> 6', y: (100 / 1006) * 213 },
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
        { name: '0', y: (100 / 1006) * 795 },
        { name: '1 - 3', y: (100 / 1006) * 306 },
        { name: '4 - 6', y: (100 / 1006) * 43 },
        { name: '> 6', y: (100 / 1006) * 62 },
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
      text: 'What is the primary way you stay up to date with Ember?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent of Responses' } },
  },
  data: [
    {
      name: '2020',
      color: color2020,
      data: [
        { name: 'Discord server (chat)', y: (100 / 690) * 69 },
        { name: 'Release blog posts', y: (100 / 690) * 471 },
        { name: 'In-person or other formal training', y: (100 / 690) * 26 },
        { name: 'Podcasts', y: (100 / 690) * 12 },
        { name: 'The Ember Times', y: (100 / 690) * 19 },
        { name: 'Social Media', y: (100 / 690) * 64 },
        { name: 'Other', y: (100 / 690) * 29 },
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
        // {name: 'JavaScript Modules (import/export/etc.)', y: (100/1006)*118},
        // {name: 'JavaScript async/await', y: (100/1006)*148},
        {
          name: 'Customizing ember-data via adapters and serializers',
          y: (100 / 1006) * 639,
        },
        { name: 'Managing application state', y: (100 / 1006) * 447 },
        // {name: 'Managing CSS complexity', y: (100/1006)*217},
        // {name: 'Writing basics tests', y: (100/1006)*253},
        // {name: 'Building your own test helpers', y: (100/1006)*270},
        // {name: 'Composition with components', y: (100/1006)*281},
        { name: 'Engines', y: (100 / 1006) * 423 },
        { name: 'Fastboot & Server-Side Rendering', y: (100 / 1006) * 406 },
        // {name: 'Progressive Web App Technologies', y: (100/1006)*171},
        { name: 'Debugging', y: (100 / 1006) * 314 },
        // {name: 'Node.js', y: (100/1006)*90},
        { name: 'Using the ember-data store', y: (100 / 1006) * 425 },
        // {name: 'Component lifecycle', y: (100/1006)*246},
        // {name: 'Routing & the Router', y: (100/1006)*220},
        // {name: 'Promises', y: (100/1006)*208},
        { name: 'Measuring client-side performance', y: (100 / 1006) * 378 },
        { name: 'Closure actions', y: (100 / 1006) * 297 },
        // {name: 'Other', y: (100/1006)*90}
      ],
    },
  ],
};

// Q1.11: Which text editors do you use for development?
//------------------------------------------------
// this is a single-select question now, so we need to update the question name/export
const MS_Q111 = {
  options: {
    chart: { type: 'column' },
    title: { text: 'What is your preferred IDE?' },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: {
      type: 'category',
    },
    yAxis: { title: { text: 'Percent of Responses' } },
  },
  data: [
    {
      showInLegend: false,
      name: '2020',
      color: color2020,
      data: [
        { name: 'Atom', y: (100 / 696) * 48 },
        { name: 'Emacs', y: (100 / 696) * 22 },
        { name: 'Jetbrains IDEs', y: (100 / 696) * 80 },
        { name: 'Sublime Text', y: (100 / 696) * 30 },
        { name: 'VS Code', y: (100 / 696) * 438 },
        { name: 'Vim', y: (100 / 696) * 70 },
        { name: 'Other', y: (100 / 696) * 8 },
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
      name: '2020',
      color: color2020,
      data: [
        { name: 'Answering community questions', y: (100 / 1006) * 254 },
        { name: 'Maintaining a library or addon', y: (100 / 1006) * 213 },
        { name: 'Triaging issues', y: (100 / 1006) * 58 },
        { name: 'Commenting on RFCs', y: (100 / 1006) * 175 },
        { name: 'Writing blog posts / articles', y: (100 / 1006) * 110 },
        { name: 'Other', y: (100 / 1006) * 221 },
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
        { name: 'Mac OS', y: (100 / 1006) * 979 },
        { name: 'Linux/Unix', y: (100 / 1006) * 338 },
        { name: 'Windows', y: (100 / 1006) * 205 },
        // {name: 'Other', y: (100/1006)*1}
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
        { name: 'Angular 1.x', y: (100 / 1006) * 414 },
        // {name: 'Angular 2.x', y: (100/1006)*207},
        // {name: 'Backbone', y: (100/1006)*368},
        // {name: 'Ionic', y: (100/1006)*95},
        { name: 'jQuery / jQuery Mobile', y: (100 / 1006) * 950 },
        // {name: 'Knockout', y: (100/1006)*123},
        // {name: 'Marionette', y: (100/1006)*94},
        // {name: 'Meteor', y: (100/1006)*72},
        // {name: 'Polymer', y: (100/1006)*73},
        // {name: 'Preact', y: (100/1006)*79},
        { name: 'React', y: (100 / 1006) * 690 },
        // {name: 'Sencha (ExtJS/Sencha Touch)', y: (100/1006)*91},
        // {name: 'Sproutcore', y: (100/1006)*31},
        { name: 'Vue', y: (100 / 1006) * 333 },
        { name: 'None (Ember is my first framework)', y: (100 / 1006) * 106 },
        // {name: 'Other', y: (100/1006)*94}
      ],
    },
    {
      name: 'Advanced Experience',
      color: emberColors.lightBlue,
      data: [
        { name: 'Angular 1.x', y: (100 / 1006) * 126 },
        // {name: 'Angular 2.x', y: (100/1006)*73},
        // {name: 'Backbone', y: (100/1006)*129},
        // {name: 'Ionic', y: (100/1006)*20},
        { name: 'jQuery / jQuery Mobile', y: (100 / 1006) * 453 },
        // {name: 'Knockout', y: (100/1006)*28},
        // {name: 'Marionette', y: (100/1006)*38},
        // {name: 'Meteor', y: (100/1006)*12},
        // {name: 'Polymer', y: (100/1006)*16},
        // {name: 'Preact', y: (100/1006)*22},
        { name: 'React', y: (100 / 1006) * 286 },
        // {name: 'Sencha (ExtJS/Sencha Touch)', y: (100/1006)*25},
        // {name: 'Sproutcore', y: (100/1006)*7},
        { name: 'Vue', y: (100 / 1006) * 79 },
        { name: 'None (Ember is my first framework)', y: (100 / 1006) * 327 },
        // {name: 'Other', y: (100/1006)*51}
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
        { name: 'Angular 1.x', y: (100 / 1006) * 126 },
        // {name: 'Angular 2.x', y: (100/1006)*73},
        // {name: 'Backbone', y: (100/1006)*129},
        // {name: 'Ionic', y: (100/1006)*20},
        { name: 'jQuery / jQuery Mobile', y: (100 / 1006) * 453 },
        // {name: 'Knockout', y: (100/1006)*28},
        // {name: 'Marionette', y: (100/1006)*38},
        // {name: 'Meteor', y: (100/1006)*12},
        // {name: 'Polymer', y: (100/1006)*16},
        // {name: 'Preact', y: (100/1006)*22},
        { name: 'React', y: (100 / 1006) * 286 },
        // {name: 'Sencha (ExtJS/Sencha Touch)', y: (100/1006)*25},
        // {name: 'Sproutcore', y: (100/1006)*7},
        { name: 'Vue', y: (100 / 1006) * 79 },
        { name: 'None (Ember is my first framework)', y: (100 / 1006) * 327 },
        // {name: 'Other', y: (100/1006)*51}
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
        { name: 'Software Developer/Engineer', y: (100 / 1006) * 1168 },
        // {name: 'Designer', y: (100/1006)*79},
        { name: 'Project manager', y: (100 / 1006) * 124 },
        { name: 'Dev-ops', y: (100 / 1006) * 119 },
        // {name: 'Systems administration', y: (100/1006)*51},
        // {name: 'Student', y: (100/1006)*15},
        { name: 'Leadership position (CTO/VP/etc.)', y: (100 / 1006) * 182 },
        // {name: 'Other', y: (100/1006)*23}
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
        { name: 'Employee working on product(s)', y: (100 / 1006) * 961 },
        {
          name: 'Employee in a firm doing consulting/client work',
          y: (100 / 1006) * 157,
        },
        {
          name: 'Employee working on internal Ember tooling',
          y: (100 / 1006) * 158,
        },
        { name: 'Independent product developer', y: (100 / 1006) * 114 },
        // {name: 'Independent consultant', y: (100/1006)*102},
        // {name: 'Employed in a non-programming field', y: (100/1006)*11},
        // {name: 'Unemployed', y: (100/1006)*13}]}
      ],
    },
  ],
};

// Q3.04: What are the accessibility requirements for your business?
//------------------------------------------------
// this is a single-select
const MS_Q304 = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'Are you required by law to provide accessible applications?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [
    {
      showInLegend: false,
      name: '2020',
      color: color2020,
      data: [
        {
          name: 'Yes, and we are doing it',
          y: (100 / 694) * 192,
        },
        { name: 'Yes, but we are not doing it', y: (100 / 694) * 12 },
        { name: 'No, but we are doing it anyway', y: (100 / 694) * 206 },
        { name: 'No, and we are not doing it', y: (100 / 694) * 272 },
        { name: 'I do not know', y: (100 / 694) * 75 },
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
        // {name: 'Agriculture', y: (100/1006)*33},
        { name: 'Advertising', y: (100 / 1006) * 101 },
        // {name: 'Arts & entertainment', y: (100/1006)*89},
        { name: 'Consulting', y: (100 / 1006) * 157 },
        { name: 'Education', y: (100 / 1006) * 138 },
        { name: 'Financial services', y: (100 / 1006) * 202 },
        // {name: 'Government', y: (100/1006)*86},
        { name: 'Health care & social assistance', y: (100 / 1006) * 140 },
        // {name: 'Insurance', y: (100/1006)*57},
        // {name: 'Manufacturing', y: (100/1006)*65},
        // {name: 'Real estate', y: (100/1006)*46},
        // {name: 'Retailers (including online)', y: (100/1006)*93},
        { name: 'Technology', y: (100 / 1006) * 611 },
        // {name: 'Utilities (telecom/energy)', y: (100/1006)*83},
        // {name: 'Transportation', y: (100/1006)*63},
        // {name: 'Travel/hospitality/food services', y: (100/1006)*82},
        // {name: 'Other', y: (100/1006)*174}
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
    subtitle: { text: '(Multi-select question)' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent of Responses' } },
  },
  data: [
    {
      name: '2019',
      color: color2019,
      data: [
        { name: '1.x', y: (100 / 1232) * 79 },
        { name: '2.x', y: (100 / 1232) * 443 },
        { name: '3.0-3.4', y: (100 / 1232) * 488 },
        { name: '3.5-3.8', y: (100 / 1232) * 675 },
      ],
    },
    {
      name: '2020',
      color: color2020,
      data: [
        { name: '1.x', y: (100 / 1006) * 27 },
        { name: '2.x', y: (100 / 1006) * 111 },
        { name: '3.0-3.4', y: (100 / 1006) * 121 },
        { name: '3.5-3.8', y: (100 / 1006) * 148 },
        { name: '3.9-3.12', y: (100 / 1006) * 291 },
        { name: '3.13-3.16', y: (100 / 1006) * 524 },
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
        { name: '1.13', y: (100 / 1006) * 50 },
        { name: '2.0', y: 0 },
        { name: '2.1', y: 0 },
        { name: '2.2', y: 0 },
        { name: '2.3', y: 0 },
        { name: '2.4', y: (100 / 1006) * 40 },
        { name: '2.5', y: 0 },
        { name: '2.6', y: 0 },
        { name: '2.7', y: 0 },
        { name: '2.8', y: (100 / 1006) * 84 },
        { name: '2.9', y: 2 },
        { name: '2.10', y: 1 },
        { name: '2.11', y: 1 },
        { name: '2.12', y: 2 },
        { name: '2.13', y: 2 },
        { name: '2.14', y: (100 / 1006) * 46 },
        { name: '2.15', y: (100 / 1006) * 19 },
        { name: '2.16', y: (100 / 1006) * 49 },
        { name: '2.17', y: (100 / 1006) * 33 },
        { name: '2.18', y: (100 / 1006) * 193 },
        { name: '3.0', y: (100 / 1006) * 61 },
        { name: '3.1', y: (100 / 1006) * 82 },
        { name: '3.2', y: (100 / 1006) * 52 },
        { name: '3.3', y: (100 / 1006) * 70 },
        { name: '3.4', y: (100 / 1006) * 253 },
        { name: '3.5', y: (100 / 1006) * 156 },
        { name: '3.6', y: (100 / 1006) * 121 },
        { name: '3.7', y: (100 / 1006) * 260 },
        { name: '3.8', y: (100 / 1006) * 154 },
        // {name: 'Beta', y: (100/1006)*7},
        // {name: 'Canary (master)', y: (100/1006)*5},
        // {name: 'Custom fork', y: (100/1006)*10},
        // {name: 'I don’t know', y: (100/1006)*123}
        // {name: 'Other', y: (100/1006)*28}
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
        // {name: '1.13', y: (100/1006)*37},
        // {name: '2.0-2.6', y: (100/1006)*34},
        // {name: '2.7-2.13', y: (100/1006)*73},
        // {name: '2.14', y: (100/1006)*33},
        // {name: '2.15', y: (100/1006)*20},
        // {name: '2.16', y: (100/1006)*47},
        // {name: '2.17', y: (100/1006)*29},
        { name: '2.18', y: (100 / 1006) * 210 },
        // {name: '3.0', y: (100/1006)*58},
        // {name: '3.1', y: (100/1006)*77},
        // {name: '3.2', y: (100/1006)*68},
        // {name: '3.3', y: (100/1006)*74},
        { name: '3.4', y: (100 / 1006) * 222 },
        { name: '3.5', y: (100 / 1006) * 166 },
        { name: '3.6', y: (100 / 1006) * 148 },
        { name: '3.7', y: (100 / 1006) * 353 },
        { name: '3.8', y: (100 / 1006) * 213 },
        // {name: 'Beta', y: (100/1006)*8},
        // {name: 'Canary (master)', y: (100/1006)*6},
        // {name: 'Custom fork', y: (100/1006)*2},
        // {name: 'I don’t know', y: (100/1006)*104},
        // {name: 'Other', y: (100/1006)*11}
      ],
    },
  ],
};

// Q4.06: Which of these server-side frameworks do you use?
//------------------------------------------------

const MS_Q406 = {
  options: {
    chart: { type: 'column' },
    title: {
      text:
        'Which of these server-side frameworks do you primarily use for work?',
    },
    subtitle: { text: '' },
    tooltip: { pointFormat: '{point.y:.2f}%' },
    xAxis: { type: 'category', labels: { autoRotation: false } },
    yAxis: { title: { text: 'Percent of Responses' } },
  },
  data: [
    {
      name: '2020',
      color: color2020,
      data: [
        { name: 'Django (Python)', y: (100 / 711) * 34 },
        { name: 'Express (JavaScript)', y: (100 / 711) * 88 },
        { name: 'MVC (.NET)', y: (100 / 711) * 32 },
        { name: 'PHP-based', y: (100 / 711) * 51 },
        { name: 'Phoenix (Elixir)', y: (100 / 711) * 49 },
        { name: 'Play (Scala, Java)', y: (100 / 711) * 27 },
        { name: 'Rails (Ruby)', y: (100 / 711) * 229 },
        { name: 'Spring (Java)', y: (100 / 711) * 65 },
        { name: 'Other, Custom, None', y: (100 / 711) * 136 },
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
        // {name: 'Falcor', y: (100/1006)*0},
        { name: 'GraphQL', y: (100 / 1006) * 130 },
        // {name: 'HAL', y: (100/1006)*17},
        // {name: 'HATEOAS', y: (100/1006)*31},
        { name: 'JSON-API', y: (100 / 1006) * 758 },
        { name: 'Rest.li', y: (100 / 1006) * 155 },
        { name: 'Custom design', y: (100 / 1006) * 384 },
        // {name: 'I am unsure', y: (100/1006)*79},
        // {name: 'Other', y: (100/1006)*71}
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
      name: '2020',
      color: color2020,
      data: [
        { name: 'Mocha', y: (100 / 752) * 51 },
        { name: 'QUnit', y: (100 / 752) * 603 },
        { name: 'I don’t write tests', y: (100 / 752) * 80 },
        { name: 'Other', y: (100 / 752) * 18 },
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
          y: (100 / 1006) * 688,
        },
        // {name: 'Ansible', y: (100/1006)*126},
        // {name: 'App Store/Native Shell (Play Store/App Store/Ad Hoc)', y: (100/1006)*74},
        // {name: 'Azure', y: (100/1006)*103},
        // {name: 'Bamboo', y: (100/1006)*63},
        // {name: 'Capistrano', y: (100/1006)*75},
        // {name: 'Chef', y: (100/1006)*46},
        { name: 'Circle CI', y: (100 / 1006) * 201 },
        // {name: 'Cloudant', y: (100/1006)*0},
        // {name: 'Codeship', y: (100/1006)*42},
        { name: 'Custom / shell scripts', y: (100 / 1006) * 267 },
        { name: 'Docker', y: (100 / 1006) * 571 },
        { name: 'Ember-CLI Deploy', y: (100 / 1006) * 455 },
        // {name: 'Firebase', y: (100/1006)*85},
        // {name: 'FTP', y: (100/1006)*43},
        { name: 'Git', y: (100 / 1006) * 871 },
        // {name: 'Gitlab CI', y: (100/1006)*137},
        // {name: 'Github Pages', y: (100/1006)*101},
        // {name: 'Google Cloud', y: (100/1006)*82},
        { name: 'Heroku', y: (100 / 1006) * 234 },
        { name: 'Jenkins / Hudson', y: (100 / 1006) * 292 },
        // {name: 'Netlify', y: (100/1006)*62},
        // {name: 'Pagefront', y: (100/1006)*0},
        // {name: 'Rackspace Cloud', y: (100/1006)*7},
        // {name: 'Rsync / SCP', y: (100/1006)*59},
        {
          name: 'Self-hosted (dedicated infrastructure)',
          y: (100 / 1006) * 227,
        },
        // {name: 'Surge.sh', y: (100/1006)*16},
        // {name: 'Team City', y: (100/1006)*33},
        { name: 'Travis CI', y: (100 / 1006) * 178 },
        // {name: 'VPS (cloud infrastructure)', y: (100/1006)*93},
        // {name: 'Zeit', y: (100/1006)*14},
        { name: 'Other', y: (100 / 1006) * 159 },
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
    yAxis: { title: { text: 'Percent of Responses' } },
  },
  data: [
    {
      name: '2020',
      color: color2020,
      data: [
        { name: 'Desktop and mobile', y: (100 / 754) * 471 },
        { name: 'Desktop only', y: (100 / 754) * 281 },
        { name: 'Mobile only', y: (100 / 754) * 2 },
      ],
    },
  ],
};

// Q4.13: Who uses your application(s)?
//------------------------------------------------
// this is a single select now
const MS_Q413 = new HorizontalBarChart({
  chart: {
    categories: [
      'Business consumers (B2B)',
      'The general public (B2C)',
      'Internal users',
    ],
    title: 'Who are the target users of your applications?',
  },

  rawData: [
    {
      color: color2020,
      label: '2020',
      values: [100 * (408 / 781), 100 * (282 / 781), 100 * (91 / 781)],
    },
  ],
}).highchartsOptions;

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
        { name: 'None / Prototypes only', y: (100 / 1006) * 92 },
        { name: 'Tens', y: (100 / 1006) * 242 },
        { name: 'Hundreds', y: (100 / 1006) * 405 },
        { name: 'Thousands', y: (100 / 1006) * 400 },
        { name: 'Tens of thousands', y: (100 / 1006) * 289 },
        { name: 'Hundreds of thousands', y: (100 / 1006) * 170 },
        { name: 'Millions', y: (100 / 1006) * 117 },
      ],
    },
  ],
};

// Q6.01: Did you participate in any of the following surveys?
//------------------------------------------------

const MS_Q601 = new PieChart({
  chart: {
    title: 'Do you participate in other developer surveys?',
  },

  rawData: [
    { color: emberColors.blue, label: 'Yes', value: 567 },
    { color: emberColors.ember, label: 'No', value: 198 },
    { color: orangePalette.orangeDarkest, label: 'No Response', value: 241 },
  ],
}).highchartsOptions;

//=============================================================================
export default class EmberCommunitySurvey2020Controller extends Controller {
  stackSkillsChart = stackSkillsChart;
  SS_Q101 = SS_Q101;
  SS_Q104 = SS_Q104;
  SS_Q203 = SS_Q203;
  SS_Q204 = SS_Q204;
  SS_Q301 = SS_Q301;
  SS_Q302 = SS_Q302;
  SS_Q303 = SS_Q303;
  SS_Q305 = SS_Q305;
  SS_Q306 = SS_Q306;
  SS_Q410 = SS_Q410;
  SS_Q418 = SS_Q418;
  SS_Q419 = SS_Q419;
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
  MS_Q416 = MS_Q416;
  MS_Q601 = MS_Q601;
  //=============================================================================
}
