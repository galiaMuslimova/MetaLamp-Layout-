import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export function createSlider(el) {
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
  function showResult(values) {
    el.find(".slider__result").text((parseInt(values[0])).toLocaleString() + '₽ - ' + (parseInt(values[1])).toLocaleString() + '₽');
  }

  slider.on("slide", function (values) {
    showResult(values);
  })

  let result = slider.get();
  showResult(result);

  return slider;
};


$(function () {
  let sliderFilter = createSlider($(".slider_filter"));
});
  