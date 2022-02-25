import MyChart from './MyChart.js';

const chartData = require('@/pages/room/room.json');

$('.js-chart__content').each(function () {
  const chart = new MyChart($(this), chartData);
});
