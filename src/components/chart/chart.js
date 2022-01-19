import Chart from 'chart.js/auto';

$(() => {
  const $chart = $('.js-chart__content');

  if ($chart.length > 0) {
    const ctx = $chart[0].getContext('2d');
    const chartData = (require('@/pages/room/room.json')).voices;

    /* COLORS */

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


    /* PLUGINS */

    //this plugin right number in chart
    const numberInChart = {
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
    }

    //this plugin add text to number inside
    const textInChart = {
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
    }

    //this plugin correct legend position
    const legendPosition = {
      id: 'position',
      beforeInit(chart) {        
        const originalFit = chart.legend.fit
        chart.legend.fit = function fit() {
          originalFit.bind(chart.legend)();
          this.width += 35;
        }
      },
      beforeDraw(chart) {
        chart.legend.left = 142;
        chart.legend.bottom = 130;
      }
    }

    /* DATA */

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
    

     /* CONFIG */

    const config = {
      type: 'doughnut',
      data: data,
      options: {
        plugins: {
          legend: {
            position: 'right',
            align: 'end',
            labels: {
              font: {
                family: "'Montserrat', 'Arial', sans-serif",
                size: 14,
              },
              boxHeight: 8,
              boxWidth: 8,
              padding: 10,
              usePointStyle: true,
              pointStyle: 'circle',
            },
            reverse: true,
          },
        },
        maintainAspectRatio: false,
        cutout: '90%',
      },
      plugins: [numberInChart, textInChart, legendPosition]
    };


    /* CHART */

    const myChart = new Chart(ctx, config);

  }
});
