import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

$(function () {
  function createSlider(el) {    
    let sliderPlace = el.find(".slider__body");
    let slider = noUiSlider.create(sliderPlace[0], {
      start: [5000, 10000],
      behaviour: 'drag',
      connect: true,
      range: {
        'min': 0,
        'max': 15000
      }
    });

    slider.on("slide", function (values) {
      el.find(".slider__result").text(parseInt(values[0]) + '₽ - ' + parseInt(values[1]) + '₽');
    })
    let result = slider.get();
    el.find(".slider__result").text(parseInt(result[0]) + '₽ - ' + parseInt(result[1]) + '₽');

    return slider;
  };   

  let sliderFilter = createSlider($(".slider_filter"));
  let sliderForms = createSlider($(".slider_forms"));
});
  