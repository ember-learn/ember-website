import Controller from '@ember/controller';
import theme from '../highchart-themes/survey';

var emberOrange = '#f23818',
    darkGrayColor = '#4b4b4b',
    lightGrayColor = '#c0c0c0',
    lighterGrayColor = '#dedede',
    lightGreenColor = '#489a6e';
var color2015 = lighterGrayColor;
var color2016 = lightGrayColor;
var color2017 = darkGrayColor;
var color2018 = emberOrange;
var colorFutureYear = lightGreenColor;

const overallAdoption = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Breakdown of Ember use by Version' },
    subtitle: { text: '' },
    yAxis: { title: { text: 'Percent' } },
    xAxis: {
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
        '2.12',
        '2.13',
        '2.14',
        '2.15',
        '2.16',
        '2.17',
        '2.18',
        '3.0',
      ]
    },
  },
  data: [{
    name: '2016',
    color: color2016,
    data: [
      4 + 2 + 3 + 4 + 3 + 4 + 6 + 6,
      36,
      8,
      6,
      12,
      27,
      47,
      3,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]
  }, {
    name: '2017',
    color: color2017,
    data: [
      9.46,
      14.45,
      2.97,
      2.1,
      2.02,
      4.48,
      11.29,
      4.35,
      4.48,
      5.8,
      21.2,
      10.09,
      21.6,
      40.88,
      19.31,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]
  }, {
    name: '2018',
    color: color2018,
    data: [
      5,
      7.8,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1.4,
      7,
      2,
      2.7,
      2.7,
      11.4, // 2.12
      7,
      8,
      6.6,
      23.5, // 2.16
      9.3,
      43.2,
      27.8, // 3.0
    ]
  }]
}

const communityParticipation = {
  options: {
    chart: { type: 'bar' },
    title: { text: 'How do you stay up to date with Ember?' },
    subtitle: { text: 'Movers and Shakers from Last Year' },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          format: '{y}%'
        }
      }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: true
    },
    tooltip: {
      enabled: true,
      valueSuffix: '%'
    },
    yAxis: { min: 0, title: { text: null } },
    xAxis: {
      categories: [
        'Writing RFCs', 'Commenting on RFCs', 'Reading RFCs',
        'Opening PRs', 'Stack Overflow', 'emberjs.com blog'
      ],
      title: { text: null }
    },
  },
  data: [{
    name: '2017',
    color: color2017,
    data: [ 1.9, 5.2, 33.3, 16.4, 41.6, 49.8 ]
  }, {
    name: '2018',
    color: color2018,
    data: [ 3.0, 9.8, 52.2, 23.8, 34.2, 57.8 ]
  }]
}

const longLivedCodebases = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Do you maintain an app started between March 2014 and March 2015?' },
    subtitle: { text:
      'Percent of Survey Participants Currently Maintaining an Ember App Created in 2014' },
    xAxis: { },
    tooltip: { enabled: false },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [{
    color: color2015,
    name: '2015',
    data: [ 79.5 ]
  }, {
    color: color2016,
    name: '2016',
    data: [ 38.6, ]
  }, {
    color: color2017,
    name: '2017',
    data: [ 34.3, ]
  }, {
    color: color2018,
    name: '2018',
    data: [ 31.3, ]
  }]
}

const serverSide = {
  options: {
    chart: { type: 'column' },
    title: { text: 'What is the primary language of your server-side stack?' },
    subtitle: { text: '' },
    xAxis: { type: 'category' },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [{
    name: '2016',
    color: color2016,
    data: [
      { y: 41, name: 'Ruby' },
      { y: 17, name: 'Java' },
      { y: 24, name: 'JavaScript' },
      { y: 12, name: 'Python' },
      { y: 8, name: '.NET' },
      { y: 13, name: 'PHP' },
      { y: 6, name: 'Elixir / Erlang' },
      { y: 5, name: 'Go' },
      { y: 2, name: 'Scala' },
      { y: 0, name: 'TypeScript' }
    ]
  }, {
    name: '2017',
    color: color2017,
    data: [
      {name: 'Ruby', y:	36.97},
      {name: 'Java', y:	20.57},
      {name: 'JavaScript', y:	24.54},
      {name: 'Python', y:	13.5},
      {name: '.NET', y:	8.71},
      {name: 'PHP', y:	12.43},
      {name: 'Elixir / Erlang', y:	7.95},
      {name: 'Go', y:	6.44},
      {name: 'Scala', y:	2.65},
      {name: 'TypeScript', y:	1.58}
    ]
  }, {
    name: '2018',
    color: color2018,
    data: [
      {name: 'Ruby', y:	33.7},
      {name: 'Java', y:	26.4},
      {name: 'JavaScript', y:	22.1},
      {name: 'Python', y:	11.9},
      {name: '.NET', y:	10.5},
      {name: 'PHP', y:	10.3},
      {name: 'Elixir / Erlang', y: 9.2},
      {name: 'Go', y:	6.5},
      {name: 'Scala', y: 2.6},
      {name: 'TypeScript', y:	2.6}
    ]
  }]
}

const serverSideFrameworks = {
  options: {
    chart: { type: 'column' },
    title: { text: 'Which server-side framework(s) do you use?' },
    subtitle: { text: 'Top 8' },
    xAxis: {
      categories: [
        'Rails (Ruby)',
        'Express (JavaScript)',
        'Phoenix (Elixir)',
        'Spring / Spring Boot (Java)',
        'Django (Python)',
        'MVC (.NET)',
        'None*',
        'Flask (Python)'
      ]
    },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [{
    name: '2016',
    color: color2016,
    data: [ 46.1, 25.8, 10.6, 11.0, 9, 7.6, 0, 5.7 ]
  }, {
    name: '2017',
    color: color2017,
    data: [ 37.9, 20.4, 10.1, 8.8, 10.0, 6.2, 0, 5.8 ]
  }, {
    name: '2018',
    color: color2018,
    data: [ 35.0, 21.6, 12.5, 20.5, 8.2, 7.7, 7.6, 5.7 ]
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
    color: color2016,
    data: [ 93.6, 49.0, 39.6, 27.7, ]
  }, {
    name: '2017',
    color: color2017,
    data: [ 94.26, 44.2, 38.5, 19.2 ],
  }, {
    name: '2018',
    color: color2018,
    data: [ 96.5, 52, 45.8, 10.1 ]
  }, {
    name: 'Expected for 2019',
    color: colorFutureYear,
    data: [ 97.7, 57.3, 29.7, 3.7 ]
  }]
}

const recommendingEmber = {
  options: {
    chart: { type: 'spline' },
    title: { text: 'How Likely Are You To Recommend Ember?' },
    subtitle: { text: '' },
    xAxis: { type: 'category', },
    yAxis: { title: { text: 'Responses' }
    },
  },
  data: [{
    name: '2018',
    color: color2018,
    data: [
        [1, 25],
        [2, 14],
        [3, 22],
        [4, 17],
        [5, 42],
        [6, 58],
        [7, 144],
        [8, 307],
        [9, 195],
        [10, 445]
    ]
  }]
}

const editorTool = {
  options: {
    chart: { type: 'column' },
    title: { text: 'What is your preferred text editor?' },
    subtitle: { text: '' },
    xAxis: {
      // TODO: reorganize these to be in decreasing order of 2018 popularity?
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
    yAxis: { title: { text: 'Percent' } },
  },
  data: [{
    name: '2016',
    color: color2016,
    data: [ 39, 39.2, 29.24, 20.6, 6, 3.9, 5, 3.2 ]
  }, {
    name: '2017',
    color: color2017,
    data: [ 38.11, 26.56, 26.37, 21.08, 19.31, 4.04, 3.97, 2.27 ]
  }, {
    name: '2018',
    color: color2018,
    data: [ 28.2, 20.3, 20.5, 19, 37.9, 3.5, 0, 1.9 ]
  }]
}

const productionApps = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'Which of these best describes your use of Ember in production applications?'
    },
    subtitle: { text: '2018 Results Only' },
    xAxis: {
      categories: [
        'Prototypes only',
        'Tens of users',
        'Hundreds of users',
        'Thousands of users',
        '10s of Thousands of users',
        '100s of Thousands of users',
        'Millions of users'
      ]
    },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [{
    name: '2018',
    color: color2018,
    data: [ 9.1, 23.3, 34.5, 30.7, 17.7, 11.1, 9.8 ]
  }]
}

const emberenoEmployment = {
  options: {
    chart: { type: 'bar' },
    title: { text: 'What Best Describes Your Employment Situation?' },
    subtitle: { text: 'Top 4 Responses, Year by Year' },
    xAxis: {
      categories: [
        'Working on product(s)',
        'In a firm doing consulting/client work',
        'Working on internal Ember tooling/products',
        'Independent Product Developer'
      ]
    },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [{
    name: '2016',
    color: color2016,
    data: [ 59.3, 15.1, 23.4, 16.3 ],
  }, {
    name: '2017',
    color: color2017,
    data: [ 74.8, 14.1, 12.8, 13.7 ],
  }, {
    name: '2018',
    color: color2018,
    data: [ 80.2, 12.7, 11.8, 10.6 ]
  }]
}

const applicationUsers = {
  options: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Who uses your applications?'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        'B2B',
        'B2C',
        'Internal users'
      ]
    },
    yAxis: {
      title: {
        text: 'Percent'
      }
    },
    colors: [color2016, color2017, color2018, lightGreenColor],
    credits: {
      enabled: false
    }
  },
  data: [{
    name: '2016',
    data: [ 62.6, 48.6, 43.8 ]
  }, {
    name: '2017',
    data: [ 65.6, 49, 39 ]
  }, {
    name: '2018',
    data: [ 69.5, 49.4, 39.9 ]
  }],
}

const teamSize = {
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
    color: color2015,
    data: [ 15.5, 78, 3.7, 1.7, 0.8, 0.3 ]
  }, {
    name: '2016',
    color: color2016,
    data: [ 12, 74, 6, 4, 2, 1 ]
  }, {
    name: '2017',
    color: color2017,
    data: [ 8.7, 69.8, 6.8, 4.8, 2.5, 2 ]
  }, {
    name: '2018',
    color: color2018,
    data: [ 7.2, 62.5, 9.4, 5.3, 3.9, 6.4 ]
  }]
}

const employerUsingEmber = {
  options: {
    chart: { type: 'column' },
    title: { text: 'When starting your most recent job...' },
    subtitle: { text: '' },
    xAxis: { type: 'category', },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [{
    name: '2017',
    color: color2017,
    data: [
      {name: 'My employer was not using Ember', y: 53.63},
      {name: 'My employer was already using Ember', y: 38.74},
      {name: 'Does not apply (e.g. I am a student)', y: 6.56}
    ]
  }, {
    name: '2018',
    color: color2018,
    data: [
      {name: 'My employer was not using Ember', y: 43.1},
      {name: 'My employer was already using Ember', y: 52.3},
      {name: 'Does not apply (e.g. I am a student)', y: 4.5}
    ]
  }]
}

const gettingHired = {
  options: {
    chart: { type: 'column' },
    title: {
      text: 'When getting hired to your most recent job, your pre-existing knowledge of Ember was...'
    },
    subtitle: { text: '' },
    xAxis: { type: 'category', },
    yAxis: { title: { text: 'Percent' } },
  },
  data: [{
    name: '2017',
    color: color2017,
    data: [
      {name: 'I did not know Ember', y: 47.13},
      {name: 'Unimportant', y: 25.49},
      {name: 'Very important', y: 12.87},
      {name: 'Important', y: 12.87}
    ]
  }, {
    name: '2018',
    color: color2018,
    data: [
      {name: 'I did not know Ember', y: 40.9},
      {name: 'Unimportant', y: 27.2},
      {name: 'Very important', y: 18.1},
      {name: 'Important', y: 13.8}
    ]
  }]
}

const demographicsRegion = {
  options: {
    chart: { type: 'column' },
    title: { text: 'In which region do you live?' },
    subtitle: { text: '' },
    xAxis: { type: 'category', },
    yAxis: { title: { text: 'Percent' } },
    /*
    TODO get the data for this, add "drilldown" keys above
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
    */
  },
  data: [{
    name: '2018',
    color: color2018,
    data: [
      {name: 'North America	', y: 53.7 },
      {name: 'Europe	', y: 32.7},
      {name: 'Asia	', y: 7.8},
      {name: 'Oceania	', y: 3.4},
      {name: 'South America	', y: 3.2},
      {name: 'Africa	', y: 0.5},
      {name: 'Central America	', y: 0.5},
      {name: 'Other', y: 0.4}
    ]
  }]
}
function makeVersionChart(versionData, title) {
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

  return {
    options: {
      title: { text: title },
      subtitle: { text: '' },
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
      plotOptions: { series: { marker: { enabled: false } } },
      yAxis: {
        title: { text: 'Percent' }
      },
      xAxis: {
        categories: [ '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', ],
        title: {
          text: 'Releases Prior to Survey'
        }
      },
    },
    data: seriesData
  };
}

var emberVersionData = [{year: '2015',
  color: color2015,
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
  ]}, {year: '2016',
  color: color2016,
  data: [
  {value: 1.8, label: '1.6'},
  {value: 2.7, label: '1.7'},
  {value: 3.5, label: '1.8'},
  {value: 2.6, label: '1.9'},
  {value: 3.9, label: '1.10'},
  {value: 6, label: '1.11'},
  {value: 5.8, label: '1.12'},
  {value: 36, label: '1.13 LTS'},
  {value: 8.2, label: '2.0'},
  {value: 6.3, label: '2.1'},
  {value: 11.5, label: '2.2'},
  {value: 27, label: '2.3'},
  {value: 47, label: '2.4 LTS'},
  null,
   ]}, {year: '2017',
   color: color2017,
   data: [
  {value: 14.5, label: '1.13 LTS'},
  {value: 3, label: '2.0'},
  {value: 2.1, label: '2.1'},
  {value: 2, label: '2.2'},
  {value: 4.5, label: '2.3'},
  {value: 11.3, label: '2.4 LTS'},
  {value: 4.4, label: '2.5'},
  {value: 4.5, label: '2.6'},
  {value: 5.8, label: '2.7'},
  {value: 21.2, label: '2.8 LTS'},
  {value: 10, label: '2.9'},
  {value: 22, label: '2.10'},
  {value: 41, label: '2.11'},
  {value: 19.3, label: '2.12 LTS'}
]}, {year: '2018',
  color: color2018,
  data: [
  {value: 8.6, label: '2.0-2.6' },
  {value: 1.5, label: '2.7'},
  {value: 7.1, label: '2.8 LTS'},
  {value: 2.1, label: '2.9'},
  {value: 2.8, label: '2.10'},
  {value: 2.7, label: '2.11'},
  {value: 11.6, label: '2.12 LTS'},
  {value: 7.1, label: '2.13'},
  {value: 8.1, label: '2.14'},
  {value: 6.7, label: '2.15'},
  {value: 23.8, label: '2.16 LTS'},
  {value: 9.4, label: '2.17'},
  {value: 43.8, label: '2.18 LTS'},
  {value: 28.2, label: '3.0'}
]}];

const newReleaseAdoption = makeVersionChart(emberVersionData, 'Which version(s) of Ember are used in your apps?');

var emberDataVersionData = [{year:
  '2016',
  color: color2016,
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
]}, {year: '2017', color: color2017, data: [
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
]}, {year: '2018', color: color2018, data: [
  {value: 5.9, label: '2.0-2.6'},
  {value: 1, label: '2.7'},
  {value: 5.2, label: '2.8'},
  {value: 2, label: '2.9'},
  {value: 2.3, label: '2.10'},
  {value: 2.5, label: '2.11'},
  {value: 12.5, label: '2.12'},
  {value: 6.2, label: '2.13'},
  {value: 6.2, label: '2.14'},
  {value: 0, label: '2.15'},
  {value: 17.2, label: '2.16'},
  {value: 6.8, label: '2.17'},
  {value: 35.8, label: '2.18'},
  {value: 21.5, label: '3.0'},
]}];

const emberDataAdoption = makeVersionChart(emberDataVersionData, 'Which versions of Ember Data are used in your apps?');

export default Controller.extend({
  theme,
  newReleaseAdoption,
  overallAdoption,
  emberDataAdoption,
  recommendingEmber,
  employerUsingEmber,
  gettingHired,
  productionApps,
  emberenoEmployment,
  applicationUsers,
  teamSize,
  longLivedCodebases,
  communityParticipation,
  serverSide,
  serverSideFrameworks,
  editorTool,
  browserRequirements,
  demographicsRegion,
});
