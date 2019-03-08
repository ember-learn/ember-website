import Controller from '@ember/controller';
import theme from '../highchart-themes/survey';

const emberOrange = '#f23818';
const darkGrayColor = '#4b4b4b';
const lightGrayColor = '#cccccc';

theme.colors = [lightGrayColor, darkGrayColor, emberOrange];

const makeChartData = (data) => data.map((datum) => ({
    name: datum.year,
    data: datum.data.map(item => ({
      y: item && item.value,
      label: item && item.label,
      color: item && item.color,
    })),
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
        let s = `<b>${(+this.x)} Release${(Number(this.x) !== 1 ? 's' : '')} Prior to Survey</b>`;

        this.points.forEach((point) => {
          s += `<br/><span style="color: ${point.color}">●</span>${point.series.name}: ${point.point.label} Release (${point.y}%)`;
        });

        return s;
      }
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false
        }
      }
    },
    xAxis: {
      categories: [ '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0'],
      title: {
        text: 'Releases Prior to Survey'
      }
    },
  },
  data: makeChartData([{
    year: '2015',
    data:[
      null,
      null,
      null,
      {value: 3, label: '1.0'},
      {value: 1, label: '1.1'},
      {value: 0.7, label: '1.2'},
      {value: 2, label: '1.3'},
      {value: 2.6, label: '1.4'},
      {value: 3.9, label: '1.5'},
      {value: 6.8, label: '1.6'},
      {value: 15, label: '1.7'},
      {value: 31.7, label: '1.8'},
      {value: 39.5, label: '1.9'},
      {value: 35, label: '1.10'},
    ],
  }, {
    year: '2016',
    data: [
      {value: 1.8, label: '1.6'},
      {value: 2.7, label: '1.7'},
      {value: 3.5, label: '1.8'},
      {value: 2.6, label: '1.9'},
      {value: 3.9, label: '1.10'},
      {value: 6, label: '1.11'},
      {value: 5.8, label: '1.12'},
      {value: 36, label: '1.13'},
      {value: 8.2, label: '2.0'},
      {value: 6.3, label: '2.1'},
      {value: 11.5, label: '2.2'},
      {value: 27, label: '2.3'},
      {value: 47, label: '2.4'},
    ]
  }, {
    year: '2017',
    data: [
      {
        value: 14.5,
        label: '1.13'
      },
      {value: 3, label: '2.0'},
      {value: 2.1, label: '2.1'},
      {value: 2, label: '2.2'},
      {value: 4.5, label: '2.3'},
      {value: 11.3, label: '2.4'},
      {value: 4.4, label: '2.5'},
      {value: 4.5, label: '2.6'},
      {value: 5.8, label: '2.7'},
      {value: 21.2, label: '2.8'},
      {value: 10, label: '2.9'},
      {value: 22, label: '2.10'},
      {value: 41, label: '2.11'},
      {value: 19.3, label: 'stable (2.12)'}
    ]
  }])
};

const chartSnapshotEmberDevelopers = {
  options: {
    title: {
      text: 'How long have you been working with Ember?'
    },
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
    name: '2015',
    data: [ 12.5, 10.8, 20.9, 13, 10.5, 13.1, 14.6 ],
  }, {
    name: '2016',
    data: [ 27, 16, 16, 9, 9, 10, 10 ],
  }, {
    name: '2017',
    data: [ 44, 15, 14, 7, 7, 6.4, 6.3 ],
  }],
};

const chartBreakdownByVersion = {
  options: {
    title: {
      text: 'Breakdown of Ember use by Version'
    },
    xAxis: {
      categories: [ 'Pre 1.13', '1.13', '2.0', '2.1', '2.2', '2.3', '2.4 LTS', '2.5', '2.6', '2.7', '2.8 LTS', '2.9', '2.10', '2.11', '2.12' ],
    },
  },
  data: [{
    name: '2016',
    color: darkGrayColor,
    data: [ 4 + 2 + 3 + 4 + 3 + 4 + 6 + 6, 36, 8, 6, 12, 27, 47, 3, 0, 0, 0, 0, 0, 0, 0 ]
  }, {
    name: '2017',
    color: emberOrange,
    data: [ 9.46, 14.45, 2.97, 2.1, 2.02, 4.48, 11.29, 4.35, 4.48, 5.8, 21.2, 10.09, 21.6, 40.88, 19.31 ],
  }],
};

const employmentSituation = {
  options: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'What best describes your employment situation?'
    },
    subtitle: {
      text: ''
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
    yAxis: {
      title: {
        text: 'Percent'
      }
    },
  },
  data: [{
    name: '2015',
    data: [
      67.3,
      22.8,
      24.4,
      13.4,
      0
    ]
  }, {
    name: '2016',
    data: [
      59,
      15,
      16,
      11,
      23
    ]
  }, {
    name: '2017',
    data: [
      74.2,
      13.9,
      13.6,
      10.4,
      12.7
    ]
  }]
}

const emberDevelopers = {
  options: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'How many developers at your company work with Ember?'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        'None',
        '1–10',
        '11–20',
        '21–50',
        '51–100',
        'More than 100'
      ]
    },
    yAxis: {
      title: {
        text: 'Percent'
      }
    },
  },
  data: [{
    name: '2015',
    data: [
      15.5,
      78,
      3.7,
      1.7,
      0.8,
      0.3
    ]
  }, {
    name: '2016',
    data: [
      12,
      74,
      6,
      4,
      2,
      1
    ]
  }, {
    name: '2017',
    data: [
      8.7,
      69.8,
      6.8,
      4.8,
      2.5,
      2
    ]
  }]
}

const longLived = {
  options: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'How old are your Ember applications?'
    },
    subtitle: {
      text: ''
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
    yAxis: {
      title: {
        text: 'Percent'
      }
    },
  },
  data: [{
    name: '2015',
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
    name: '2016',
    data: [
      15, // '> 24 Months',
      16, // '18–24 Months',
      23, // '12–18 Months',
      21, // '9–12 Months',
      18, // '6–9 Months',
      20, // '3–6 Months',
      27 // '< 3 Months',
    ]
  }, {
    name: '2017',
    data: [
      33.7, // '> 24 Months',
      22, // '18–24 Months',
      15.8, // '12–18 Months',
      13.7, // '9–12 Months',
      13, // '6–9 Months',
      15.8, // '3–6 Months',
      19.8 // '< 3 Months',
    ]
  }]
}

const serverLanguage = {
  options: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'What is the primary language of your server-side stack?'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Percent'
      }
    },
  },
  data: [{
    name: '2016',
    color: darkGrayColor,
    data: [
      { y: 41, name: 'Ruby' },
      { y: 24, name: 'JavaScript' },
      { y: 17, name: 'Java' },
      { y: 13, name: 'PHP' },
      { y: 12, name: 'Python' },
      { y: 8, name: '.NET' },
      { y: 6, name: 'Elixir / Erlang' },
      { y: 5, name: 'Go' },
      { y: 2, name: 'Scala' },
      { y: 0, name: 'TypeScript' },
      { y: 0, name: 'C++' },
      { y: 1, name: 'Rust' },
      { y: 3, name: 'Other' }
    ]
  }, {
    name: '2017',
    color: emberOrange,
    data: [
      {name: 'Ruby', y:	36.97},
      {name: 'JavaScript', y:	24.54},
      {name: 'Java', y:	20.57},
      {name: 'Python', y:	13.5},
      {name: 'PHP', y:	12.43},
      {name: '.NET', y:	8.71},
      {name: 'Elixir / Erlang', y:	7.95},
      {name: 'Go', y:	6.44},
      {name: 'Scala', y:	2.65},
      {name: 'TypeScript', y:	1.58},
      {name: 'C++', y:	1.2},
      {name: 'Other', y:	2.97}
    ]
  }]
}

const browserRequirements = {
  options: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Which browser versions do your applications target?'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        'Modern browsers',
        'Mobile browsers',
        'IE 11',
        'IE 10',
        'Legacy Chrome, Firefox, Safari, etc.',
        'IE 9',
        'IE 8'
      ]
    },
    yAxis: {
      title: {
        text: 'Percent'
      }
    },
  },
  data: [{
    name: '2016',
    data: [
      94,
      49,
      40,
      28,
      13,
      12,
      3,
    ]
  }, {
    name: '2017',
    data: [
      94.26,
      43.22,
      37.67,
      18.8,
      9.15,
      6.37,
      1.39
    ]
  }, {
    name: 'What is expected next year?',
    data: [
      93.69,
      51.36,
      28.26,
      9.84,
      7.82,
      2.9,
      0.76
    ]
  }]
}

const recommendingEmber = {
  options: {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'How Likely Are You To Recommend Ember?'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      labels: {
        format: '{value}',
      },
      title: {
        text: 'Responses'
      }
    },
  },
  data: [{
    name: '2017',
    color: emberOrange,
    data: [
        [1, 19],
        [2, 12],
        [3, 23],
        [4, 26],
        [5, 32],
        [6, 79],
        [7, 177],
        [8, 350],
        [9, 265],
        [10, 578]
    ]
  }]
}

const textEditor = {
  options: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'What is your preferred text editor?'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        'Atom',
        'Sublime Text',
        'Vim',
        'WebStorm / IntelliJ',
        'VS Code',
        'Emacs',
        'Visual Studio',
        'Notepad++'
      ]
    },
    yAxis: {
      title: {
        text: 'Percent'
      }
    },
  },
  data: [{
    name: '2016',
    color: darkGrayColor,
    data: [
      39,
      39.2,
      29.24,
      20.6,
      6,
      3.9,
      5,
      3.2
    ]
  }, {
    name: '2017',
    color: emberOrange,
    data: [
      38.11,
      26.56,
      26.37,
      21.08,
      19.31,
      4.04,
      3.97,
      2.27
    ]
  }]
}

const productionUsers = {
  options: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Which of these best describes your use of Ember in production applications?'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        'Prototypes only',
        'Tens of users',
        'Hundreds of users',
        'Thousands of users',
        'Millions of users'
      ]
    },
    yAxis: {
      title: {
        text: 'Percent'
      }
    },
  },
  data: [{
    name: '2016',
    color: darkGrayColor,
    data: [
      15.11,
      26.2,
      34.2,
      39.6,
      8.2
    ]
  }, {
    name: '2017',
    color: emberOrange,
    data: [
      12.24,
      24.42,
      36.85,
      42.4,
      9.27
    ]
  }]
}

const howCanWeApprove = {
  options: {
    chart: {
      type: 'columnrange',
      inverted: true
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        'Mobile Support',
        'Routable Components',
        'Tree Shaking',
        'Performance',
        'Documentation, Guides, Examples',
      ]
    },
    yAxis: {
      gridLineWidth: 0,
      labels: {
        enabled: false,
      },
      title: {
        text: 'Experience with Ember'
      }
    },
    plotOptions: {
      columnrange: {
        dataLabels: {
          useHTML: true,
          enabled: true,
          formatter: function () {
            switch (this.y) {
              case 0:
                return '> 2 years';
              case 1:
                return '2 years';
              case 2:
                return '1 year';
              case 3:
                return '< 1 year'
            }
          }
        }
      }
    },
  },
  data: [{
    name: '2017',
    color: emberOrange,
    data: [
      [0, 1],
      [0, 2],
      [0, 2],
      [0, 3],
      [1, 3]
    ]
  }],
}

const whenStarting = {
  options: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'When starting your most recent job...'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Percent'
      }
    },
  },
  data: [{
    name: '2017',
    color: emberOrange,
    data: [
      {name: 'My employer was not using Ember', y: 53.63},
      {name: 'My employer was already using Ember', y: 38.74},
      {name: 'Does not apply (e.g. I am a student)', y: 6.56}
    ]
  }]
}

const preExistingKnowledge = {
  options: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'When getting hired to your most recent job, your pre-existing knowledge of Ember was...'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Percent'
      }
    },
  },
  data: [{
    name: '2017',
    color: emberOrange,
    data: [
      {name: 'I did not know Ember', y: 47.13},
      {name: 'Unimportant', y: 25.49},
      {name: 'Very important', y: 12.87},
      {name: 'Important', y: 12.87}
    ]
  }]
};

const demographics = {
  options: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'In which region do you live?'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Percent'
      }
    },
    drilldown: {
      series: [{
        name: 'North America',
        id: 'North America',
        data: [
          {name: 'White', y: 80},
          {name: 'Asian', y: 7.2},
          {name: 'Prefer not to answer', y: 6.2},
          {name: 'Hispanic, Latino, or Spanish origin', y: 6.1},
          {name: 'Black or African American', y: 2.2},
          {name: 'Middle Eastern or North African', y: 1.1}
        ]
      },{
        name: 'Europe',
        id: 'Europe',
        data: [
          {name: 'White', y: 81},
          {name: 'Prefer not to answer', y: 10.1},
          {name: 'Hispanic, Latino, or Spanish origin', y: 5.4},
          {name: 'American Indian or Alaskan Native', y: 6.1},
          {name: 'Middle Eastern or North African', y: 1.9},
          {name: 'Asian', y: 1},
          {name: 'Black or African American', y: 0.8}
        ]
      },{
        name: 'Asia',
        id: 'Asia',
        data: [
          {name: 'Asian', y: 67},
          {name: 'White', y: 12},
          {name: 'Prefer not to answer', y: 8.9}
        ]
      }]
    }
  },
  data: [{
    name: '2017',
    color: emberOrange,
    data: [
      {name: 'North America	', y: 49, drilldown: 'North America'},
      {name: 'Europe	', y: 33.6, drilldown: 'Europe'},
      {name: 'Asia	', y: 7.8, drilldown:'Asia'},
      {name: 'Oceania	', y: 3.7},
      {name: 'South America	', y: 3.5},
      {name: 'Africa	', y: 0.8},
      {name: 'Central America	', y: 0.4}
    ]
  }]
}

const versionData = [
  {
    year: '2016',
    color: darkGrayColor,
    data:[
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      {value: 27, label: '1.13'},
      {value: 6, label: '2.0'},
      {value: 4, label: '2.1'},
      {value: 8, label: '2.2'},
      {value: 21, label: '2.3'},
      {value: 42, label: '2.4'},
      null,
    ]
  }, {
    year: '2017',
    color: emberOrange,
    data: [
      {value: 9, label: '1.13'},
      {value: 2.15, label: '2.0'},
      {value: 2.1, label: '2.1'},
      {value: 1.5, label: '2.2'},
      {value: 2.8, label: '2.3'},
      {value: 7, label: '2.4'},
      {value: 3, label: '2.5'},
      {value: 4, label: '2.6'},
      {value: 4, label: '2.7'},
      {value: 13.8, label: '2.8'},
      {value: 7, label: '2.9'},
      {value: 21.6, label: '2.10'},
      {value: 34.9, label: '2.11'},
      {value: 17, label: 'stable (2.12)'}
    ]
  }
]

const priorVersionsData = {
  options: {
    title: {
      text: 'Which versions of Ember Data are used in your apps?'
    },
    subtitle: {
      text: ''
    },
    tooltip: {
      shared: true,
      crosshairs: true,
      formatter: function () {
        var releasesPrior = (+this.x);
        var s = '<b>' + (+this.x) + ' Release' + (releasesPrior !== 1 ? 's' : '') + ' Prior to Survey</b>';
        for (var i = 0; i < this.points.length; ++i) {
          var point = this.points[i],
            seriesName = point.series.name;
          s += '<br/><span style="color:' + point.color + '">●</span>' + seriesName + ': ';
          var labels;
          for(var j = 0; j < versionData.length; ++j){
              if (versionData[j].year === seriesName){
                  labels = versionData[j].data;
              }
          }
          var label = labels[labels.length - 1 - releasesPrior].label;
          s += label + ' Release (' + point.y + '%)';
        }
        return s;
      }
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false
        }
      }
    },
    yAxis: {
      title: {
        text: 'Percent'
      }
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
        text: 'Releases Prior to Survey'
      }
    },
  },
  data: makeVersionChartData(versionData)
}

function makeVersionChartData(versionData) {
  var seriesData = [];

  for (var i = 0; i < versionData.length; ++i){
      var _series = {
        name: versionData[i].year,
        type: 'spline',
        data: versionData[i].data.map(function (d) {
          return d && d.value;
        })
      };
      if (versionData[i].color){
          _series.color = versionData[i].color;
      }
      seriesData.push(_series);
  }

  return seriesData;
}


export default Controller.extend({
  theme,
  chartHowlong,
  chartSnapshotEmberDevelopers,
  chartBreakdownByVersion,
  priorVersionsData,
  recommendingEmber,
  howCanWeApprove,
  whenStarting,
  preExistingKnowledge,
  employmentSituation,
  emberDevelopers,
  productionUsers,
  longLived,
  serverLanguage,
  textEditor,
  browserRequirements,
  demographics,
});
