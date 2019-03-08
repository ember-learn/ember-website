import Controller from '@ember/controller';
import theme from '../highchart-themes/survey';

const chartHowlong = {
  options: {
    xAxis: {
      categories: [
        '> 24 months',
        '18–24 months',
        '12–18 months',
        '9–12 monts',
        '6–9 months',
        '3–6 months',
        'Less than 3 months'
      ]
    },
  },

  data: [{
    name: '2015 Survey',
    color: '#cccccc',
    data: [ 12.5, 10.8, 20.9, 13, 10.5, 13.1, 14.6 ],
  }, {
    name: '2016 Survey',
    color: '#f23818',
    data: [ 27, 16, 16, 9, 9, 10, 10]
  }]
};

const chartEmberAtTheOffice = [{
  options: {
    title: {
      text: 'What best describes your employment situation:'
    },
    xAxis: {
      categories: [
        'Working on product',
        'Doing consultant/client work',
        'Independent product developer',
        'Independent consultant',
        'Internal ember products',
      ]
    },
  },
  data: [{
    name: '2015 Survey',
    color: '#cccccc',
    data: [ 67.3, 22.8, 24.4, 13.4, 0 ]
  }, {
    name: '2016 Survey',
    color: '#f23818',
    data: [ 59, 15, 16, 11, 23 ]
  }],
}, {
  options: {
    title: {
      text: 'How many developers at your company work with Ember?'
    },
    xAxis: {
      categories: [
        'None',
        '1–10',
        '10–20',
        '20–50',
        '50–100',
        'More than 100'
      ]
    },
  },
  data: [{
    name: '2015 Survey',
    color: '#cccccc',
    data: [ 15.5, 78, 3.7, 1.7, 0.8, 0.3 ]
  }, {
    name: '2016 Survey',
    color: '#f23818',
    data: [ 12, 74, 6, 4, 2, 1 ]
  }]
}];

const chartNewReleaseAdoptionEmber = {
  options: {
    title: {
      text: 'Which version(s) of Ember are used in your apps?'
    },
    xAxis: {
      categories: [
        'Pre 1.6',
        '1.6',
        '1.7',
        '1.8',
        '1.9',
        '1.10',
        '1.11',
        '1.12',
        '1.13',
        '2.0',
        '2.1',
        '2.2',
        '2.3',
        '2.4',
        '2.5 Beta',
        'Canary (master)',
        'Custom Fork',
        'I don\'t know',
      ]
    },
  },
  data: [{
    name: '2016 Ember Community Survey',
    color: '#f23818',
    data: [
      4,  // 'Pre 1.6',
      2,  // '1.6',
      3,  // '1.7',
      4,  // '1.8',
      3,  // '1.9',
      4,  // '1.10',
      6,  // '1.11',
      6,  // '1.12',
      36, // '1.13',
      8,  // '2.0',
      6,  // '2.1',
      12, // '2.2',
      27, // '2.3',
      47, // '2.4',
      3,  // '2.5 Beta',
      2,  // 'Canary (master)',
      1,  // 'Custom Fork',
      3,  // 'I don\'t know',
    ]
  }]
};

const chartNewReleaseAdoptionEmberData = {
  options: {
    title: {
      text: 'Ember Data'
    },
    xAxis: {
      categories: [
        'Pre 1.13',
        '1.13',
        '2.0',
        '2.1',
        '2.2',
        '2.3',
        '2.4',
        '2.5 Beta',
        'Canary (master)',
        'Custom Fork',
        'I don\'t know',
      ]
    },
  },
  data: [{
    name: '2016 Ember Community Survey',
    color: '#f23818',
    data: [
      11, // 'Pre 1.13',
      27, // '1.13',
      6,  // '2.0',
      4,  // '2.1',
      8,  // '2.2',
      21, // '2.3',
      42, // '2.4',
      3,  // '2.5 Beta',
      2,  // 'Canary (master)',
      0,  // 'Custom Fork',
      5,  // 'I don\'t know',
    ]
  }],
};

const chartLongLivedCodebases = {
  options: {
    title: {
      text: 'How old are your Ember applications?'
    },
    xAxis: {
      categories: [
        '> 24 Months',
        '18–24 Months',
        '12–18 Months',
        '9–12 Months',
        '6–9 Months',
        '3–6 Months',
        '< 3 Months'
      ]
    },
  },
  data: [{
    name: '2015 Survey',
    color: '#cccccc',
    data: [
      1.9, // '> 24 Months',
      9.2, // '18–24 Months',
      18.4, // '12–18 Months',
      20, // '9–12 Months',
      20, // '6–9 Months',
      25.8, // '3–6 Months',
      38.8 // '< 3 Months',
    ]
  }, {
    name: '2016 Survey',
    color: '#f23818',
    data: [
      15, // '> 24 Months',
      16, // '18–24 Months',
      23, // '12–18 Months',
      21, // '9–12 Months',
      18, // '6–9 Months',
      20, // '3–6 Months',
      27 // '< 3 Months',
    ]
  }]
};

const chartServerSide = [{
  options: {
    title: {
      text: 'What is the primary language of your server-side stack?'
    },
    xAxis: {
      categories: [
        'Ruby',
        'Javascript',
        'Java',
        'PHP',
        'Python',
        '.NET',
        'Elixir/Erlang',
        'Go',
        'Scala',
        'Rust',
        'Other',
      ]
    },
  },
  data: [{
    name: '2016 Ember Community Survey',
    color: '#f23818',
    data: [
      41, // 'Ruby',
      24, // 'Javascript',
      17, // 'Java',
      13, // 'PHP',
      12, // 'Python',
      8,  // '.NET',
      6,  // 'Elixir/Erlang',
      5,  // 'Go',
      2,  // 'Scala',
      1,  // 'Rust',
      3,  // 'Other',
    ]
  }],
}, {
  options: {
    title: {
      text: 'What are your preferred server-side languages'
    },
    xAxis: {
      categories: [
        'Ruby',
        'Javascript',
        'Java',
        'PHP',
        'Python',
        '.NET',
        'Elixir/Erlang',
        'Go',
        'Scala',
        'Rust',
        'Other',
      ]
    },
  },
  data: [{
    name: '2016 Ember Community Survey',
    color: '#f23818',
    data: [
      49, // 'Ruby',
      47, // 'Javascript',
      16, // 'Java',
      17, // 'PHP',
      17, // 'Python',
      9,  // '.NET',
      15, // 'Elixir/Erlang',
      9,  // 'Go',
      3,  // 'Scala',
      4,  // 'Rust',
      3,  // 'Other',
    ]
  }],
}];

const chartBrowserSuppor = [{
  options: {
    title: {
      text: 'What browsers do Ember apps support?'
    },
    xAxis: {
      categories: [
        'Modern browsers (last two versions)',
        'Mobile browsers',
        'IE 11',
        'IE 10',
        'Legacy Chrome, Firefox, Safari',
        'IE 9',
        'IE 8',
      ]
    },
  },
  data: [{
    name: '2016 Ember Community Survey',
    color: '#f23818',
    data: [
      94, // 'Modern browsers (last two versions)',
      49, // 'Mobile browsers',
      40, // 'IE 11',
      28, // 'IE 10',
      13, // 'Legacy Chrome, Firefox, Safari',
      12, // 'IE 9',
      3, // 'IE 8',
    ]
  }],
}, {
  options: {
    title: {
      text: 'What will they support next year?'
    },
    xAxis: {
      categories: [
        'Modern browsers (last two versions)',
        'Mobile browsers',
        'IE 11',
        'IE 10',
        'Legacy Chrome, Firefox, Safari',
        'IE 9',
        'IE 8',
      ]
    },
  },
  data: [{
    name: '2016 Ember Community Survey',
    color: '#f23818',
    data: [
      94, // 'Modern browsers (last two versions)',
      57, // 'Mobile browsers',
      35, // 'IE 11',
      15, // 'IE 10',
      11, // 'Legacy Chrome, Firefox, Safari',
      4, // 'IE 9',
      1, // 'IE 8',
    ]
  }],
}];

const chartEmberEcosystem = [{
  options: {
    title: {
      text: 'Number of addons written per participant'
    },
    xAxis: {
      categories: [
        '0',
        '1–3',
        '4–6',
        '> 6',
      ]
    },
  },
  data: [{
    name: '2016 Ember Community Survey',
    color: '#f23818',
    data: [
      48, // '0',
      36, // '1–3',
      8, // '4–6',
      8, // '> 6',
    ]
  }],
}, {
  options: {
    title: {
      text: 'Are your addons unit tested?'
    },
    xAxis: {
      categories: [
        'All',
        'Some',
        'None',
        'Unknown'
      ]
    },
  },
  data: [{
    name: '2015 Survey',
    color: '#cccccc',
    data: [
      15.6, // 'All',
      22.1, // 'Some',
      48, // 'None',
      14.3, // 'I\'m not sure how to do this',
    ]
  }, {
    name: '2016 Survey',
    color: '#f23818',
    data: [
      23, // 'All',
      27, // 'Some',
      36, // 'None',
      14, // 'I\'m not sure how to do this',
    ]
  }],
}];

const chartSEO = {
  options: {
    title: {
      text: 'What method do you rely on for search engine indexing?'
    },
    xAxis: {
      categories: [
        'App is private, behind authentication flow, or this question generally does not apply',
        'Google\'s Javascript Execution',
        'Our app is indexable, but I don\'t know how',
        'phantomjs or other pre-rendering (including Prerender.io)',
        'FastBoot or other use of the "visit" API',
        'noscript tags',
      ]
    },
  },
  data: [{
    name: '2016 Ember Community Survey',
    color: '#f23818',
    data: [
      73, // 'App is private,...',
      16, // 'Google\'s Javascript Execution',
      12, // 'Our app is indexable, but I don\'t know how',
      7,  // 'phantomjs or other pre-rendering (including Prerender.io)',
      5,  // 'FastBoot or other use of the "visit" API',
      3,  // 'noscript tags',
    ]
  }],
};

export default Controller.extend({
  theme,
  chartHowlong,
  chartEmberAtTheOffice,
  chartNewReleaseAdoptionEmber,
  chartNewReleaseAdoptionEmberData,
  chartServerSide,
  chartLongLivedCodebases,
  chartBrowserSuppor,
  chartEmberEcosystem,
  chartSEO,
});
