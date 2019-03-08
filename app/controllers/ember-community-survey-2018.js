import Controller from '@ember/controller';

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

var theme = {
  colors: [color2016, color2017, color2018, lightGreenColor],
  credits: {
    enabled: false
  }
};
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
export default Controller.extend({
  newReleaseAdoption,
});
