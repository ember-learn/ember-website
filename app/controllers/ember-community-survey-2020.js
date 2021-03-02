import Controller from '@ember/controller';
import {
  AreaSplineChart,
  HorizontalBarChart,
  PieChart,
} from 'ember-website/utils/highcharts';

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
var color2018 = emberColors.gray;
var color2019 = emberColors.blue;
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
/*
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
*/

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

// Q4.01: Which version(s) of Ember are in use in your apps?
//------------------------------------------------

const MS_Q401 = new AreaSplineChart({
  chart: {
    categories: ['1.x', '2.x', '3.0-3.4', '3.5-3.8', '3.9-3.12', '3.13-3.16'],
    subtitle: '(Multi-select question)',
    title: 'Which version(s) of Ember are in use in your apps?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (79 / 1232), // 1.x
        100 * (443 / 1232), // 2.x
        100 * (488 / 1232), // 3.0-3.4
        100 * (675 / 1232), // 3.5-3.8
      ],
    },
    {
      color: color2020,
      label: '2020',
      values: [
        100 * (27 / 1006), // 1.x
        100 * (111 / 1006), // 2.x
        100 * (121 / 1006), // 3.0-3.4
        100 * (148 / 1006), // 3.5-3.8
        100 * (291 / 1006), // 3.9-3.12
        100 * (524 / 1006), // 3.13-3.16
      ],
    },
  ],
}).highchartsOptions;

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
*/

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
  SS_Q204 = SS_Q204;
  // SS_Q301 = SS_Q301; // unused
  SS_Q302 = SS_Q302;
  SS_Q305 = SS_Q305;
  SS_Q306 = SS_Q306;
  //=============================================================================
  MS_Q103 = MS_Q103;
  MS_Q111 = MS_Q111;
  MS_Q112 = MS_Q112;
  MS_Q304 = MS_Q304;
  MS_Q401 = MS_Q401;
  MS_Q406 = MS_Q406;
  // MS_Q408 = MS_Q408; // unused
  // MS_Q412 = MS_Q412; // unused
  MS_Q413 = MS_Q413;
  MS_Q601 = MS_Q601;
  //=============================================================================
}
