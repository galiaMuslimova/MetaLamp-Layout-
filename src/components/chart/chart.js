import Chart from 'chart.js/auto';

$(function(){
  const ctx = $(".chart__content")[0].getContext('2d');
  const chartData = (require("@/pages/room/room.json")).voices;

  const orange_gradient = ctx.createLinearGradient(0, 0, 120, 120);
  orange_gradient.addColorStop(0, 'rgba(255, 227, 156, 1)');
  orange_gradient.addColorStop(1, 'rgba(255, 186, 156, 1)'); 

  const green_gradient = ctx.createLinearGradient(0, 0, 120, 120);
  green_gradient.addColorStop(0, 'rgba(111, 207, 151, 1)');
  green_gradient.addColorStop(1, 'rgba(102, 210, 234, 1)');

  const blue_gradient = ctx.createLinearGradient(0, 0, 120, 120);
  blue_gradient.addColorStop(0, 'rgba(188, 156, 255, 1)');
  blue_gradient.addColorStop(1, 'rgba(139, 164, 249, 1)'); 

  const black_gradient = ctx.createLinearGradient(0, 0, 120, 120);
  black_gradient.addColorStop(0, 'rgba(144, 144, 144, 1)');
  black_gradient.addColorStop(1, 'rgba(61, 73, 117, 1)'); 
  
  
  const data = {
    labels: [
      "Разочарован",
      "Удовлетворительно",
      "Хорошо",
      "Великолепно"
    ],
    datasets: [{
      data: [chartData.Disappointed, chartData.Satisfactory, chartData.Good, chartData.Excellent],
      backgroundColor: [black_gradient, blue_gradient, green_gradient, orange_gradient]
    }]
  };

  const config = {
    type: 'doughnut',
    left: 0,
    data: data,
    plugins: [{
      id: 'text1',
      beforeDraw: function (chart) {
        var width = chart.chartArea.width,
          height = chart.chartArea.height,
          ctx = chart.ctx;

        ctx.restore();
        ctx.font = "bold 24px 'Montserrat','Arial',sans-serif";
        ctx.fillStyle = "#BC9CFF";
        ctx.textBaseline = "middle";        

        var text = chartData.total,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2 - 10;

        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    },
      {
        id: 'text2',
        beforeDraw: function (chart) {
          var width = chart.chartArea.width,
            height = chart.chartArea.height,
            ctx = chart.ctx;

          ctx.restore();
          ctx.font = "bold 12px 'Montserrat','Arial',sans-serif";
          ctx.fillStyle = "#BC9CFF";
          ctx.textBaseline = "middle";

          var text = ("голосов").toUpperCase(),
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2 + 10;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }],
    options: {
      plugins: {
        legend: {
          position: "right",
          labels: {
            font: {
              family: "'Montserrat', 'Arial', sans-serif"
            },
            boxHeight: 10,
            boxWidth: 10,
            usePointStyle: true,
            pointStyle: "circle"
          },
          reverse: true
        },         
      },
      cutout: "90%",
      responsive: false,      
    }
  }   

  let myChart = new Chart(ctx, config); 
  
  
  
})