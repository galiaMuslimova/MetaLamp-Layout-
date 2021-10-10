//import { Chart } from 'chart.js';
import 'chartjs-plugin-doughnutlabel';
let ctx = $('#myChart');

var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: {
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: 'The title',
            font: {
              size: '60'
            }
          },
          {
            text: getTotal,
            font: {
              size: '50'
            },
            color: 'grey'
          },
          {
            text: '$100.000',
            font: {
              size: '30'
            },
            color: 'red'
          },
          {
            text: '95%',
            font: {
              size: '45'
            },
            color: 'green'
          }
        ]
      }
    }
  }
});

var getTotal = function (myDoughnutChart) {
  var sum = myDoughnutChart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
  return `Total: ${sum}`;
}
