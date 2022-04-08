import Chart from 'chart.js/auto';

class RoomChart {
  constructor($root, chartData) {
    this.$root = $root;
    this.$element = this.$root.find('.js-room-chart__content');
    this.chartData = chartData;
    this.ctxContext = this.$element[0].getContext('2d');
    console.log(this.$element[0]);
    this.voices = this.chartData.voices;
    this.colors = this.createColors();
    this.data = this.createData();
    this.config = this.createConfig();
    this.myChart = new Chart(this.ctxContext, this.config);
  }

  createColors() {
    const colors = {};

    const orange = this.ctxContext.createLinearGradient(0, 0, 120, 120);
    orange.addColorStop(0, 'rgba(255, 227, 156, 1)');
    orange.addColorStop(1, 'rgba(255, 186, 156, 1)');
    colors.orange = orange;

    const green = this.ctxContext.createLinearGradient(0, 0, 120, 120);
    green.addColorStop(0, 'rgba(111, 207, 151, 1)');
    green.addColorStop(1, 'rgba(102, 210, 234, 1)');
    colors.green = green;

    const blue = this.ctxContext.createLinearGradient(0, 0, 120, 120);
    blue.addColorStop(0, 'rgba(188, 156, 255, 1)');
    blue.addColorStop(1, 'rgba(139, 164, 249, 1)');
    colors.blue = blue;

    const black = this.ctxContext.createLinearGradient(0, 0, 120, 120);
    black.addColorStop(0, 'rgba(144, 144, 144, 1)');
    black.addColorStop(1, 'rgba(61, 73, 117, 1)');
    colors.black = black;

    return colors;
  }

  createData() {
    const { voices } = this;
    const { colors } = this;
    const data = {
      labels: [
        'Разочарован',
        'Удовлетворительно',
        'Хорошо',
        'Великолепно',
      ],
      datasets: [{
        data: [voices.Disappointed, voices.Satisfactory, voices.Good, voices.Excellent],
        backgroundColor: [colors.black, colors.blue, colors.green, colors.orange],
      }],
    };

    return data;
  }

  createConfig() {
    const numberInChart = RoomChart.createNumberInChart(this.voices);
    const textInChart = RoomChart.createTextInChart();
    const legendPosition = RoomChart.createLegendPosition();

    const config = {
      type: 'doughnut',
      data: this.data,
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
      plugins: [numberInChart, textInChart, legendPosition],
    };

    return config;
  }

  static createNumberInChart(voices) {
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

        const text = voices.total;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2 - 10;

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    };

    return numberInChart;
  }

  static createTextInChart() {
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
    };
    return textInChart;
  }

  static createLegendPosition() {
    const legendPosition = {
      id: 'position',
      beforeInit(chart) {
        const chart$element = chart;
        const originalFit = chart.legend.fit;
        chart$element.legend.fit = function fit() {
          originalFit.bind(chart.legend)();
          this.width += 35;
        };
      },
      beforeDraw(chart) {
        const chart$element = chart;
        chart$element.legend.left = 142;
        chart$element.legend.bottom = 130;
      },
    };

    return legendPosition;
  }
}

export default RoomChart;
