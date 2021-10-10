import Controller from '@ember/controller';
import {
  AreaSplineChart,
  HorizontalBarChart,
  PieChart,
  VerticalBarChart,
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

const stackSkillsChart = new VerticalBarChart({
  chart: {
    categories: ['Beginner', 'Intermediate', 'Advanced'],
    title: 'Rank your web skills',
  },

  rawData: [
    {
      color: stackColors.ariaDark,
      label: 'ARIA',
      values: [68.3, 25.7, 6],
    },
    {
      color: stackColors.cssLight,
      label: 'CSS',
      values: [9.6, 47.0, 43.4],
    },
    {
      color: stackColors.htmlLight,
      label: 'HTML',
      values: [1.9, 36.0, 62.1],
    },
    {
      color: stackColors.jsLight,
      label: 'JavaScript',
      values: [2.7, 35.9, 61.4],
    },
    /*
    {
      color: emberColors.burntEmber,
      label: 'Ember.js',
      values: [11.3, 40.7, 48],
    },
    */
  ],
});

// AUTO-GENERATED HighCharts
//=============================================================================

// Q1.01: How likely are you to recommend Ember to your friends and colleagues?
//------------------------------------------------

const SS_Q101 = new VerticalBarChart({
  chart: {
    categories: ['1', '2', '3', '4', '5'],
    subtitle: '1 = Unlikely, 5 = Likely',
    title: 'How likely are you to recommend Ember?',
  },

  rawData: [
    {
      color: color2020,
      label: '2020',
      values: [
        100 * (35 / 699),
        100 * (25 / 699),
        100 * (94 / 699),
        100 * (201 / 699),
        100 * (344 / 699),
      ],
    },
  ],
});

// Q1.04: How long have you been working with Ember?
//------------------------------------------------

const SS_Q104 = new VerticalBarChart({
  chart: {
    categories: [
      '< 1 year',
      '1 - 3 years',
      '4 - 5 years',
      '6 - 8 years',
      '9+ years',
    ],
    title: 'How long have you been working with Ember?',
  },

  rawData: [
    {
      color: color2020,
      label: '2020',
      values: [
        100 * (66 / 761),
        100 * (210 / 761),
        100 * (252 / 761),
        100 * (196 / 761),
        100 * (37 / 761),
      ],
    },
  ],
});

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
      '> 100',
      'I do not know',
    ],
    title: 'How many developers at your company are responsible for writing Front-End code?',
  },

  rawData: [
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (699 / 1180),
        100 * (160 / 1180),
        100 * (95 / 1180),
        100 * (68 / 1180),
        100 * (158 / 1180),
        100 * (39 / 1180),
      ],
    },
    {
      color: color2020,
      label: '2020',
      values: [
        100 * (441 / 752),
        100 * (109 / 752),
        100 * (61 / 752),
        100 * (29 / 752),
        100 * (112 / 752),
        100 * (0 / 752),
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
      color: color2018,
      label: '2018',
      values: [62.5, 9.4, 5.3, 3.9, 6.4],
    },
    {
      color: color2019,
      label: '2019',
      values: [
        100 * (833 / 1154),
        100 * (101 / 1154),
        100 * (79 / 1154),
        100 * (47 / 1154),
        100 * (94 / 1154),
      ],
    },
    {
      color: color2020,
      label: '2020',
      values: [
        100 * (487 / 749),
        100 * (106 / 749),
        100 * (57 / 749),
        100 * (25 / 749),
        100 * (74 / 749),
      ],
    },
  ],
});

// Prose for Q3.06
// Q3.05: What is the primary language of apps developed at your business?
//------------------------------------------------

const SS_Q305 = new VerticalBarChart({
  chart: {
    categories: ['English', 'French', 'German', 'Spanish', 'Other'],
    title: 'Primary App Language',
  },

  rawData: [
    {
      color: color2020,
      label: '2020',
      values: [
        100 * (656 / 758),
        100 * (20 / 758),
        100 * (35 / 758),
        100 * (11 / 758),
        100 * (36 / 758),
      ],
    },
  ],
});

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
});

// Q1.03: What are the ways you learn about and stay up to date with Ember?
//------------------------------------------------

const MS_Q103 = new VerticalBarChart({
  chart: {
    categories: [
      'Discord server (chat)',
      'Release blog posts',
      'In-person or other formal training',
      'Podcasts',
      'The Ember Times',
      'Social Media',
      'Other',
    ],
    title: 'What is the primary way you stay up to date with Ember?',
  },

  rawData: [
    {
      color: color2020,
      label: '2020',
      values: [
        100 * (69 / 690),
        100 * (471 / 690),
        100 * (26 / 690),
        100 * (12 / 690),
        100 * (19 / 690),
        100 * (64 / 690),
        100 * (29 / 690),
      ],
    },
  ],
});

// Q1.11: Which text editors do you use for development?
//------------------------------------------------
// this is a single-select question now, so we need to update the question name/export
const MS_Q111 = new VerticalBarChart({
  chart: {
    categories: [
      'Atom',
      'Emacs',
      'Jetbrains IDEs',
      'Sublime Text',
      'VS Code',
      'Vim',
      'Other',
    ],
    title: 'What is your preferred IDE?',
  },

  rawData: [
    {
      color: color2020,
      label: '2020',
      values: [
        100 * (48 / 696),
        100 * (22 / 696),
        100 * (80 / 696),
        100 * (30 / 696),
        100 * (438 / 696),
        100 * (70 / 696),
        100 * (8 / 696),
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
      'Maintaining a library or addon',
      'Triaging issues',
      'Commenting on RFCs',
      'Writing blog posts / articles',
      'Other',
    ],
    title: 'Describe your participation in the Ember community:',
  },

  rawData: [
    {
      color: color2020,
      label: '2020',
      values: [
        100 * (254 / 1006),
        100 * (213 / 1006),
        100 * (58 / 1006),
        100 * (175 / 1006),
        100 * (110 / 1006),
        100 * (221 / 1006),
      ],
    },
  ],
});

// Q3.04: What are the accessibility requirements for your business?
//------------------------------------------------
// this is a single-select
const MS_Q304 = new VerticalBarChart({
  chart: {
    categories: [
      'Yes, and we are doing it',
      'Yes, but we are not doing it',
      'No, but we are doing it anyway',
      'No, and we are not doing it',
      'I do not know',
    ],
    title: 'Are you required by law to provide accessible applications?',
  },

  rawData: [
    {
      color: color2020,
      label: '2020',
      values: [
        100 * (192 / 694),
        100 * (12 / 694),
        100 * (206 / 694),
        100 * (272 / 694),
        100 * (75 / 694),
      ],
    },
  ],
});

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
});

// Q4.06: Which of these server-side frameworks do you use?
//------------------------------------------------

const MS_Q406 = new VerticalBarChart({
  chart: {
    categories: [
      'Django (Python)',
      'Express (JavaScript)',
      'MVC (.NET)',
      'PHP-based',
      'Phoenix (Elixir)',
      'Play (Scala, Java)',
      'Rails (Ruby)',
      'Spring (Java)',
      'Other, Custom, None',
    ],
    title:
      'Which of these server-side frameworks do you primarily use for work?',
  },

  rawData: [
    {
      color: color2020,
      label: '2020',
      values: [
        100 * (34 / 711),
        100 * (88 / 711),
        100 * (32 / 711),
        100 * (51 / 711),
        100 * (49 / 711),
        100 * (27 / 711),
        100 * (229 / 711),
        100 * (65 / 711),
        100 * (136 / 711),
      ],
    },
  ],
});

// Q4.08: What testing framework(s) do you use in your Ember apps?
//------------------------------------------------
/*
const MS_Q408 = new VerticalBarChart({
  chart: {
    categories: ['Mocha', 'QUnit', "I don't write tests", 'Other'],
    title: 'What testing framework(s) do you use in your Ember apps?',
  },

  rawData: [
    {
      color: color2020,
      label: '2020',
      values: [
        100 * (51 / 752),
        100 * (603 / 752),
        100 * (80 / 752),
        100 * (18 / 752),
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
    categories: ['Desktop and mobile', 'Desktop only', 'Mobile only'],
    title: 'What is the primary target platform for your Ember apps?',
  },

  rawData: [
    {
      color: color2020,
      label: '2020',
      values: [100 * (471 / 754), 100 * (281 / 754), 100 * (2 / 754)],
    },
  ],
});
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
});

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
});

//=============================================================================
export default class Survey2020Controller extends Controller {
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
