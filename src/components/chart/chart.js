import Chart from 'chart.js/auto';

$(() => {
  const ctx = $('.js-chart__content')[0].getContext('2d');
  const chartData = (require('@/pages/room/room.json')).voices;

  const orangeGradient = ctx.createLinearGradient(0, 0, 120, 120);
  orangeGradient.addColorStop(0, 'rgba(255, 227, 156, 1)');
  orangeGradient.addColorStop(1, 'rgba(255, 186, 156, 1)');

  const greenGradient = ctx.createLinearGradient(0, 0, 120, 120);
  greenGradient.addColorStop(0, 'rgba(111, 207, 151, 1)');
  greenGradient.addColorStop(1, 'rgba(102, 210, 234, 1)');

  const blueGradient = ctx.createLinearGradient(0, 0, 120, 120);
  blueGradient.addColorStop(0, 'rgba(188, 156, 255, 1)');
  blueGradient.addColorStop(1, 'rgba(139, 164, 249, 1)');

  const blackGradient = ctx.createLinearGradient(0, 0, 120, 120);
  blackGradient.addColorStop(0, 'rgba(144, 144, 144, 1)');
  blackGradient.addColorStop(1, 'rgba(61, 73, 117, 1)');

  const data = {
    labels: [
      'Разочарован',
      'Удовлетворительно',
      'Хорошо',
      'Великолепно',
    ],
    datasets: [{
      data: [chartData.Disappointed, chartData.Satisfactory, chartData.Good, chartData.Excellent],
      backgroundColor: [blackGradient, blueGradient, greenGradient, orangeGradient],
    }],
  };

  const config = {
    type: 'doughnut',
    data,
    plugins: [{
      id: 'text1',
      beforeDraw(chart) {
        const { width } = chart.chartArea;
        const { height } = chart.chartArea;
        const { ctx } = chart;

        ctx.restore();
        ctx.font = "bold 24px 'Montserrat','Arial',sans-serif";
        ctx.fillStyle = '#BC9CFF';
        ctx.textBaseline = 'middle';

        const text = chartData.total;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2 - 10;

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
    {
      id: 'text2',
      beforeDraw(chart) {
        const { width } = chart.chartArea;
        const { height } = chart.chartArea;
        const { ctx } = chart;

        ctx.restore();
        ctx.font = "bold 12px 'Montserrat','Arial',sans-serif";
        ctx.fillStyle = '#BC9CFF';
        ctx.textBaseline = 'middle';

        const text = ('голосов').toUpperCase();
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2 + 10;

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    }],
    options: {
      maintainAspectRatio: false,
      cutout: '90%',
      plugins: {
        legend: {
          position: 'right',
          align: 'end',
          maxWidth: 175,
          labels: {
            font: {
              family: "'Montserrat', 'Arial', sans-serif",
              size: 14,
            },
            boxHeight: 10,
            boxWidth: 10,
            usePointStyle: true,
            pointStyle: 'circle',
          },
          reverse: true,
        },
      },
    },
  };

  const myChart = new Chart(ctx, config);
});
