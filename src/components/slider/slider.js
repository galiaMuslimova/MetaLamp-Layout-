import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export default class Slider {
  constructor(element) {
    this.element = element;
    this.$sliderPlace = this.element.find('.js-slider__anchor');
    this.$resultPlace = this.element.find('.js-slider__result');
    this.values = [];
  }

  init() {
    const el = this;
    const slider = noUiSlider.create(el.$sliderPlace[0], {
      start: [5000, 10000],
      behaviour: 'drag',
      connect: true,
      range: {
        min: 0,
        max: 15000,
      },
    });

    this.values = slider.get();
    this.showResult();

    slider.on('slide', (values) => {
      el.values = values;
      el.showResult();
    });
  }

  showResult() {
    const value1 = (parseInt(this.values[0], 10)).toLocaleString();
    const value2 = (parseInt(this.values[1], 10)).toLocaleString();
    this.$resultPlace.text(`${value1}₽ - ${value2}₽`);
  }
}
