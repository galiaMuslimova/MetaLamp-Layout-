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

class Slider {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-slider');
    this.$sliderPlace = this.$element.find('.js-slider__anchor');
    this.$resultPlace = this.$element.find('.js-slider__result');
    this.values = [];
    this.slider = undefined;
    this.init();
  }

  init() {
    if (this.$sliderPlace[0]) {
      this.slider = noUiSlider.create(this.$sliderPlace[0], options);
      this.values = this.slider.get();
      this.showResult();
      this.bindEventListeners();
    }
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

export default Slider;
