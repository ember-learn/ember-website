import {
  AreaSplineChart,
  VerticalBarChart,
} from 'ember-website/utils/highcharts';

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
const color2015 = orangePalette.orangeLighter;
const color2016 = darkGrayColor;
const color2017 = orangePalette.orangeDarkest;
const color2018 = orangePalette.orange;
const color2019 = emberColors.blue;

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
    title: 'Grade your knowledge of constious skills',
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

export {
  MS_Q103,
  MS_Q111,
  MS_Q112,
  MS_Q304,
  MS_Q401,
  MS_Q406,
  MS_Q409,
  MS_Q413,
  MS_Q601,
  SS_Q101,
  SS_Q204,
  SS_Q205,
  SS_Q302,
  SS_Q306,
  SS_Q405,
  SS_Q410,
  SS_Q501,
  stackSkillsChart,
};
