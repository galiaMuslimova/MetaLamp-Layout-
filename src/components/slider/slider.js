import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import "@c/slider/slider.scss"

$(window).on('load', function () {

  function createSlider(id) {
    let slider = document.getElementById(id + "-slider-round");

    noUiSlider.create(slider, {
      start: [5000, 10000],
      behaviour: 'drag',
      connect: true,
      range: {
        'min': 0,
        'max': 15000
      }
    });

    slider.noUiSlider.on("slide", function (values) {
      $("#" + id + "-slider-result").text(parseInt(values[0]) + '₽ - ' + parseInt(values[1]) + '₽');
    })

    let result = slider.noUiSlider.get();
    $("#" + id + "-slider-result").text(parseInt(result[0]) + '₽ - ' + parseInt(result[1]) + '₽');
  }

  createSlider("forms")
  /*let slider = document.getElementById('slider-round');

  noUiSlider.create(slider, {
    start: [5000, 10000],
    behaviour: 'drag',
    connect: true,
    range: {
      'min': 0,
      'max': 15000
    }
  });  

  slider.noUiSlider.on('slide', function (values) {
    $('#slider-result').text(parseInt(values[0]) + '₽ - ' + parseInt(values[1]) + '₽');
  })

  let result = slider.noUiSlider.get();
  $('#slider-result').text(parseInt(result[0]) + '₽ - ' + parseInt(result[1]) + '₽');*/
})