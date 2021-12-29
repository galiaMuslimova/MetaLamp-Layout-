import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

function createSlider(el) {
  const sliderPlace = el.find('.js-slider__body');

  const slider = noUiSlider.create(sliderPlace[0], {
    start: [5000, 10000],
    behaviour: 'drag',
    connect: true,
    range: {
      min: 0,
      max: 15000,
    },
  });
  function showResult(values) {
    el.find('.js-slider__result').text(`${(parseInt(values[0], 10)).toLocaleString()}₽ - ${(parseInt(values[1], 10)).toLocaleString()}₽`);
  }

  slider.on('slide', (values) => {
    showResult(values);
  });

  const result = slider.get();
  showResult(result);

  return slider;
}

$(() => {
  createSlider($('.slider_filter'));
});

export default createSlider;
