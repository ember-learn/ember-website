import Controller from '@ember/controller';
import {
  // AreaSplineChart,
  // HorizontalBarChart,
  PieChart,
  VerticalBarChart,
} from 'ember-website/utils/highcharts';

// TODO: 2022 Color Palette
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

// const orangePalette = {
//   orange: '#e04e39',
//   orangeDarker: '#c7341f',
//   orangeDarkest: '#9b2918',
//   orangeLighter: '#e77565',
// };

// Default Color Assignments for Yearly Graph Data Series
// var color2018 = emberColors.gray;
// var color2019 = emberColors.blue;
// var color2020 = orangePalette.orangeDarkest;
var color2022 = emberColors.burntEmber;
// eslint-disable-next-line no-unused-vars
// var colorFutureYear = emberColors.yellow;

const stackColors = {
  htmlDark: '#E45126',
  htmlLight: '#F2682A',
  cssDark: '#0D72B8',
  cssLight: '#32AADE',
  jsDark: '#E4A228',
  jsLight: '#F1BF28',
  ariaDark: '#1A5E9A',
};

// Begin Chart Definitions

const S01_Q02_MS__OTHER_FRAMEWORKS = new VerticalBarChart({
  chart: {
    title: `In addition to Ember, with which of these frameworks do you have some experience?`,
    categories: [`Angular`, `Astro`, `Next`, `Nuxt`, `SvelteKit`],
  },
  rawData: [
    {
      color: color2022,
      label: '2022',
      values: [37.28, 1.77, 22.79, 7.77, 7.07],
    },
  ],
});
const S01_Q03_MS__OTHER_UI_LIBS = new VerticalBarChart({
  chart: {
    title: `Glimmer is Ember's UI Library. What other libraries have Ember users tried?`,
    categories: [`Preact`, `React`, `Solid`, `Svelte`, `Vue`],
  },
  rawData: [
    {
      color: color2022,
      // TODO label should be optional since we don't always need both label and title
      label: '',
      values: [11.51, 68.87, 1.7, 18.49, 40.75],
    },
  ],
});
const S01_Q04_MS__OTHER_SSG = new VerticalBarChart({
  chart: {
    title: `Which static site generators have Ember users tried out?`,
    categories: [`11ty`, `Empress`, `Hugo`, `Jekyll`, `Metalsmith`],
  },
  rawData: [
    {
      color: color2022,
      label: '2022',
      values: [14.98, 19.85, 29.59, 71.16, 8.61],
    },
  ],
});
//TODO: Consolidate into single 'self-assessment' chart
const S01_Q05_SS__KNOW_HTML = new VerticalBarChart({
  chart: {
    title: `How well do you know HTML?`,
    categories: [
      `None`,
      `Beginner (I use introductory tutorials as I am solving problems)`,
      `Intermediate (I know where to look to find the information I need if I get stuck)`,
      `Advanced (I advise others on how to use HTML effectively)`,
    ],
  },
  rawData: [
    { color: color2022, label: '2022', values: [0.0, 0.17, 35.08, 64.76] },
  ],
});
const S01_Q06_SS__KNOW_ARIA = new VerticalBarChart({
  chart: {
    title: `How well do you know Accessibility (WAI-ARIA)?`,
    categories: [
      `None`,
      `Beginner (I use introductory tutorials as I am solving problems)`,
      `Intermediate (I know where to look to find the information I need if I get stuck)`,
      `Advanced (I advise others on how to use ARIA effectively)`,
    ],
  },
  rawData: [
    { color: color2022, label: '2022', values: [8.26, 33.22, 52.11, 6.41] },
  ],
});
const S01_Q07_SS__KNOW_CSS = new VerticalBarChart({
  chart: {
    title: `How well do you know Cascading Style Sheets (CSS)?`,
    categories: [
      `None`,
      `Beginner (I use introductory tutorials as I am solving problems)`,
      `Intermediate (I know where to look to find the information I need if I get stuck)`,
      `Advanced (I advise others on how to use CSS effectively)`,
    ],
  },
  rawData: [
    { color: color2022, label: '2022', values: [0.0, 3.54, 53.03, 43.43] },
  ],
});
const S01_QM01_SS__WEB_SKILLS_MERGED = new VerticalBarChart({
  chart: {
    categories: [
      `None`,
      `Beginner (I use introductory tutorials as I am solving problems)`,
      `Intermediate (I know where to look to find the information I need if I get stuck)`,
      `Advanced (I advise others on how to use it effectively)`,
    ],
    title: 'Rank your web skills: How well do you know ____ ?',
  },

  rawData: [
    {
      color: stackColors.ariaDark,
      label: 'ARIA',
      values: [8.26, 33.22, 52.11, 6.41],
    },
    {
      color: stackColors.cssLight,
      label: 'CSS',
      values: [0.0, 3.54, 53.03, 43.43],
    },
    {
      color: stackColors.htmlLight,
      label: 'HTML',
      values: [0.0, 0.17, 35.08, 64.76],
    },
    {
      color: stackColors.jsLight,
      label: 'JavaScript',
      values: [0.0, 0.51, 27.78, 71.72],
    },
  ],
});
const S01_Q08_SS__KNOW_JS = new VerticalBarChart({
  chart: {
    title: `How well do you know JavaScript?`,
    categories: [
      `None`,
      `Beginner (I use introductory tutorials as I am solving problems)`,
      `Intermediate (I know where to look to find the information I need if I get stuck)`,
      `Advanced (I advise others on how to use JavaScript effectively)`,
    ],
  },
  rawData: [
    { color: color2022, label: '2022', values: [0.0, 0.51, 27.78, 71.72] },
  ],
});
const S02_Q01_SS__OS_PREF = new VerticalBarChart({
  chart: {
    title: `Which of these operating systems do you prefer to use when writing code?`,
    categories: [`Linux/Unix (other than macOS)`, `macOS`, `Windows`, `Other`],
  },
  rawData: [
    { color: color2022, label: '2022', values: [23.57, 68.69, 7.74, 0.0] },
  ],
});
const S02_Q02_SS__OS_WORK = new VerticalBarChart({
  chart: {
    title: `What operating system do you most frequently use at work?`,
    categories: [`Linux/Unix (other than macOS)`, `macOS`, `Windows`, `Other`],
  },
  rawData: [
    { color: color2022, label: '2022', values: [19.19, 71.55, 9.26, 0.0] },
  ],
});
const S02_Q03_SS__OS_HOME = new VerticalBarChart({
  chart: {
    title: `Which operating system do you most frequently use at home?`,
    categories: [`Linux/Unix (other than macOS)`, `macOS`, `Windows`, `Other`],
  },
  rawData: [
    { color: color2022, label: '2022', values: [19.8, 58.38, 21.49, 0.34] },
  ],
});
//TODO: `Other` text responses can often be re-bucketed, e.g. `NeoVim` -> `Vim`
/*
Other:
  20 total answers in other-text
  16 that selected other as value
  VS Code: +2 -1
  Atom: +1
  VIM: +9
  Sublime: Textmate +1
  FAR Nova Eclipse RStudio: 4
*/
const S02_Q04_SS__IDE_PREF = new VerticalBarChart({
  chart: {
    title: `Which is your preferred text editor or development environment?`,
    categories: [
      `Atom`,
      `Emacs`,
      `Jetbrains (brand) IDEs`,
      `Sublime Text`,
      `Vim`,
      `Visual Studio Code`,
      `Other`,
    ],
  },
  rawData: [
    {
      color: color2022,
      label: '2022',
      values: [
        100 * (15 / 593),
        100 * (15 / 593),
        100 * (66 / 593),
        100 * (20 / 593),
        100 * (85 / 593),
        100 * (387 / 593),
        100 * (5 / 593),
      ],
    },
  ],
});
//TODO: `Other` text responses
const S03_Q02_MS__WORK_SECTOR = new VerticalBarChart({
  chart: {
    title: `In which industry or sector(s) does your employer operate?`,
    categories: [
      `Agriculture`,
      `Advertising`,
      `Arts & Entertainment`,
      `Consulting`,
      `Education`,
      `Financial Services`,
      `Government`,
      `Health Care`,
      `Insurance`,
      `Manufacturing`,
      `Real Estate`,
      `Retailers (Including Online)`,
      `Technology`,
      `Utilities (Telecom/Energy)`,
      `Transportation`,
      `Hospitality`,
      `Other`,
    ],
  },
  rawData: [
    {
      color: color2022,
      label: '2022',
      values: [
        1.89, 3.78, 4.98, 9.79, 5.84, 15.46, 3.95, 8.76, 2.92, 5.84, 2.23, 5.67,
        54.98, 3.26, 2.92, 2.41, 9.45,
      ],
    },
  ],
});
const S03_Q11_MS__WORK_COMPANY_APPS_EMBER_VERSIONS_USED = new VerticalBarChart({
  chart: {
    title: `What version(s) of Ember do you regularly work with at your job?`,
    categories: [
      `1.x`,
      `2.x`,
      `3.0 - 3.3`,
      `3.4 LTS`,
      `3.5 - 3.7`,
      `3.8 LTS`,
      `3.9 - 3.11`,
      `3.12 LTS`,
      `3.13 - 3.15`,
      `3.16 LTS`,
      `3.17 - 3.19`,
      `3.20 LTS`,
      `3.21 - 3.23`,
      `3.24 LTS`,
      `3.25 - 3.27`,
      `3.28 LTS`,
      `4.x`,
      `I don't know`,
    ],
  },
  rawData: [
    {
      color: color2022,
      label: '2022',
      values: [
        1.21, 4.83, 1.9, 3.1, 0.52, 4.14, 0.69, 5.52, 1.9, 13.45, 2.93, 11.38,
        3.1, 25.34, 18.79, 53.28, 23.62, 3.28,
      ],
    },
  ],
});
//TODO: Review `Other` responses for potential future named option
/*
  Other:
    Total: 22
    Cypress: 10

*/
const S03_Q15_SS__WORK_TEST_FW = new VerticalBarChart({
  chart: {
    title: `What testing framework do you use most frequently in your Ember apps at work?`,
    categories: [
      `Mocha (via ember-mocha or ember-cli-mocha)`,
      `QUnit (via ember-quinit or ember-cli-qunit)`,
      `I don't write tests`,
      `Other`,
    ],
  },
  rawData: [
    { color: color2022, label: '2022', values: [6.18, 80.39, 9.19, 4.24] },
  ],
});
//TODO: Review `Other` responses for potential future named option
const S03_Q17_SS__SERVER_SIDE_FRAMEWORK_WORK = new VerticalBarChart({
  chart: {
    title: `Which of these server-side frameworks do you primarily use in your Ember apps at work?`,
    categories: [
      `.NET`,
      `Custom Internal Framework`,
      `Django`,
      `Elixir`,
      `Express`,
      `PHP-based framework (e.g., Laravel)`,
      `Rails`,
      `Spring / Java`,
      `I don't know`,
      `None`,
      `Other`,
    ],
  },
  rawData: [
    {
      color: color2022,
      label: '2022',
      values: [
        4.59, 8.3, 4.24, 2.47, 6.54, 7.6, 29.86, 14.31, 5.48, 5.3, 11.31,
      ],
    },
  ],
});
//TODO: Review `Other` responses for potential future named option
/*
  Other:
    Total:
    Google Cloud:
    Linode:
    OVH:

*/
const S03_Q18_SS__DEPLOY_WORK = new VerticalBarChart({
  chart: {
    title: `Where do you primarily deploy your Ember apps at work?`,
    categories: [
      `Amazon Web Services (AWS)`,
      `Azure`,
      `Digital Ocean`,
      `GitHub Pages`,
      `Heroku`,
      `Netlify`,
      `Self-hosted`,
      `Vercel`,
      `Other`,
    ],
  },
  rawData: [
    {
      color: color2022,
      label: '2022',
      values: [43.01, 4.78, 2.65, 0.18, 9.73, 2.3, 24.07, 1.24, 12.04],
    },
  ],
});
const S05_Q01_MS__FB_OCTANE = new VerticalBarChart({
  chart: {
    title: `Have you integrated any of these Octane features into any of your Ember apps?`,
    categories: [
      `...attributes`,
      `Angle Bracket Component Invocation Syntax`,
      `Co-Located Components`,
      `Glimmer Components`,
      `Modifiers`,
      `Native Class Syntax`,
      `Tracked Properties`,
    ],
  },
  rawData: [
    {
      color: color2022,
      label: '2022',
      values: [89.03, 94.6, 67.99, 94.24, 86.51, 91.91, 94.96],
    },
  ],
});
const S05_Q02_MS__FB_NEW_FEAT = new VerticalBarChart({
  chart: {
    title: `Have you integrated any of the features released since Octane into your applications?`,
    categories: [
      `The in-element helper (v3.20)`,
      `The --lang flag for new apps (v3.21)`,
      `@ember/destroyable API (v3.22)`,
      `The helper manager (v3.23)`,
      `invokeHelper from JS Helper Invocation API (v3.23)`,
      `\`page-title\` by default in templates (v.3.24)`,
      `Named blocks (v.3.25)`,
      `Template strict mode (v.3.25)`,
      `The --embroider flag for new apps (ember-cli v3.27)`,
      `Contextual helpers and/or modifiers (v3.27)`,
      `Ability run ember serve from outside of a project's root directory (ember-cli v3.28)`,
      `Ability to define a custom model class (ember-data v3.28)`,
      `The @cached decorator for memoizing the result of a getter based on autotracking (v4.1)`,
      `Method for refreshing all currently active routes (v4.1)`,
      `@service export (replacing inject) (v4.1)`,
    ],
  },
  rawData: [
    {
      color: color2022,
      label: '2022',
      values: [
        56.33, 12.01, 21.62, 16.81, 11.14, 53.93, 72.27, 20.96, 18.34, 34.28,
        5.02, 5.46, 32.75, 7.64, 34.5,
      ],
    },
  ],
});
const S05_Q04_MS__FFEAT = new VerticalBarChart({
  chart: {
    title: `Which of these proposed new Ember features do you think will have a positive impact on your development experience?`,
    categories: [
      `Spreadable Arguments (RFC #593)`,
      `RFC Stages (RFC #617)`,
      `Enable Embroider (RFC #746)`,
      `Logging and Debugging Context API (RFC #753)`,
      `Default Modifier Manager (RFC #757)`,
      `Asset Import Spec (RFC #763)`,
      `First-Class Component Templates (RFC #779)`,
      `Add Ember Cookbook (RFC #786)`,
      `TypeScript Adoption Plan (RFC #800)`,
    ],
  },
  rawData: [
    {
      color: color2022,
      label: '2022',
      values: [46.75, 8.39, 58.49, 19.92, 14.68, 12.58, 46.33, 23.9, 59.96],
    },
  ],
});
const S06_Q03_MS__DEV_SURVEY_ADD = new PieChart({
  chart: {
    title: `If you participated in any additional developer surveys in the past year, which ones did you take?`,
    categories: [
      `GitHub State of the Octoverse Survey`,
      `GitLab Global Developer Survey`,
      `JetBrains State of Developer Ecosystem Survey`,
      `Node.js User Survey`,
      `npm JavaScript Ecosystem Survey`,
      `The Software House State of Frontend Survey`,
      `StackOverflow Developer Survey`,
      `The State of CSS Survey`,
      `State of JavaScript Survey`,
      `Other`,
    ],
  },
  rawData: [
    {
      color: color2022,
      label: '2022',
      values: [13.87, 4.84, 7.42, 7.1, 8.06, 3.55, 42.58, 26.77, 74.52, 2.26],
    },
  ],
});

const S06_QM01_SS__MERGED_GLOBAL_LOC = new PieChart({
  chart: {
    title: `Where in the world do we live? (7 Continent Model)`,
  },
  rawData: [
    { color: emberColors.blue, label: `Europe`, value: 100 * (206 / 418) },
    { color: emberColors.lightBlue, label: `Africa`, value: 100 * (3 / 418) },
    { color: emberColors.gray, label: `Asia`, value: 100 * (25 / 418) },
    { color: emberColors.faintGray, label: `Oceania`, value: 100 * (16 / 418) },
    {
      color: emberColors.burntEmber,
      label: `South America`,
      value: 100 * (13 / 418),
    },
    {
      color: emberColors.ember,
      label: `North America`,
      value: 100 * (155 / 418),
    },
  ],
});

//=============================================================================
export default class Survey2022Controller extends Controller {
  S01_Q02_MS__OTHER_FRAMEWORKS = S01_Q02_MS__OTHER_FRAMEWORKS;
  S01_Q03_MS__OTHER_UI_LIBS = S01_Q03_MS__OTHER_UI_LIBS;
  S01_Q04_MS__OTHER_SSG = S01_Q04_MS__OTHER_SSG;
  S01_Q05_SS__KNOW_HTML = S01_Q05_SS__KNOW_HTML;
  S01_Q06_SS__KNOW_ARIA = S01_Q06_SS__KNOW_ARIA;
  S01_Q07_SS__KNOW_CSS = S01_Q07_SS__KNOW_CSS;
  S01_Q08_SS__KNOW_JS = S01_Q08_SS__KNOW_JS;
  S01_QM01_SS__WEB_SKILLS_MERGED = S01_QM01_SS__WEB_SKILLS_MERGED;
  S02_Q01_SS__OS_PREF = S02_Q01_SS__OS_PREF;
  S02_Q02_SS__OS_WORK = S02_Q02_SS__OS_WORK;
  S02_Q03_SS__OS_HOME = S02_Q03_SS__OS_HOME;
  S02_Q04_SS__IDE_PREF = S02_Q04_SS__IDE_PREF;
  S03_Q02_MS__WORK_SECTOR = S03_Q02_MS__WORK_SECTOR;
  S03_Q11_MS__WORK_COMPANY_APPS_EMBER_VERSIONS_USED =
    S03_Q11_MS__WORK_COMPANY_APPS_EMBER_VERSIONS_USED;
  S03_Q15_SS__WORK_TEST_FW = S03_Q15_SS__WORK_TEST_FW;
  S03_Q17_SS__SERVER_SIDE_FRAMEWORK_WORK =
    S03_Q17_SS__SERVER_SIDE_FRAMEWORK_WORK;
  S03_Q18_SS__DEPLOY_WORK = S03_Q18_SS__DEPLOY_WORK;
  S05_Q01_MS__FB_OCTANE = S05_Q01_MS__FB_OCTANE;
  S05_Q02_MS__FB_NEW_FEAT = S05_Q02_MS__FB_NEW_FEAT;
  S05_Q04_MS__FFEAT = S05_Q04_MS__FFEAT;
  S06_Q03_MS__DEV_SURVEY_ADD = S06_Q03_MS__DEV_SURVEY_ADD;
  S06_QM01_SS__MERGED_GLOBAL_LOC = S06_QM01_SS__MERGED_GLOBAL_LOC;
  //=============================================================================
}
