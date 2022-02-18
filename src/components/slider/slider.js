import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const options = {
  start: [5000, 10000],
  behaviour: 'drag',
  connect: true,
  range: {
    min: 0,
    max: 15000,
  },
};

export default class Slider {
  constructor(element) {
    this.element = element;
    this.$sliderPlace = this.element.find('.js-slider__anchor');
    this.$resultPlace = this.element.find('.js-slider__result');
    this.values = [];
    this.slider = noUiSlider.create(this.$sliderPlace[0], options);
  }

  init() {
    this.values = this.slider.get();
    this.showResult();
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.slider.on('slide', this.handleSliderSlide.bind(this));
  }

  handleSliderSlide() {
    this.values = this.slider.get();
    this.showResult();
  }

  showResult() {
    const value1 = (parseInt(this.values[0], 10)).toLocaleString();
    const value2 = (parseInt(this.values[1], 10)).toLocaleString();
    this.$resultPlace.text(`${value1}₽ - ${value2}₽`);
  }
}
