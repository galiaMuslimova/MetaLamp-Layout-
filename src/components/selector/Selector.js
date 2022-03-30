import Counter from '../counter/Counter.js';

class Selector {
  constructor(form, drop, input) {
    this.form = form;
    this.drop = drop;
    this.$element = this.form.$element.find('.js-selector');
    this.$input = input.$inputField;
    this.$resetButton = this.$element.find('.js-selector__reset-button');
    this.$submitButton = this.$element.find('.js-selector__submit-button');
    this.counters = this.makeCounters();
    this.valuesArray = this.takeNumbersArray();
    this.init();
  }

  init() {
    this.changeCount();
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$resetButton.on('click', this.resetForm.bind(this));
    this.$submitButton.on('click', this.handleDropClassActiveRemove.bind(this));
  }

  makeCounters() {
    const counters = [];
    const element = this;
    const $counters = this.$element.find('.js-selector__counter');
    $counters.each(function () {
      const counter = new Counter($(this), element.changeCount.bind(element));
      counter.init();
      counters.push(counter);
    });
    return counters;
  }

  changeCount() {
    this.valuesArray = this.takeNumbersArray();
    this.changeInputText();
    const result = this.valuesArray.reduce((sum, elem) => sum + elem, 0);
    const isResetButtonActive = this.$resetButton.hasClass('selector__reset-button_active');
    if (result > 0 && !isResetButtonActive) {
      this.$resetButton.addClass('selector__reset-button_active');
    } else if (result < 1 && isResetButtonActive) {
      this.$resetButton.removeClass('selector__reset-button_active');
    }
  }

  resetForm() {
    this.counters.forEach((counter) => {
      counter.resetForm();
    });
    this.valuesArray = this.takeNumbersArray();
    this.changeInputText();
  }

  handleDropClassActiveRemove() {
    this.drop.removeActiveClass();
  }

  changeInputText() {
    let str;
    if (this.drop.hasGuestsClass()) {
      str = this.createGuestsText();
    }
    if (this.drop.hasPlacementClass()) {
      str = this.createPlacementText();
    }
    this.$input.val(str);
  }

  takeNumbersArray() {
    return this.counters.map((counter) => counter.numButtonValue);
  }

  static declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    const isTwo = number % 100 > 4 && number % 100 < 20;
    return titles[isTwo ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  createGuestsText() {
    const adultsNum = this.valuesArray[0] + this.valuesArray[1];
    const adultsText = this.constructor.declOfNum(adultsNum, ['гость', 'гостя', 'гостей']);
    const adults = `${adultsNum} ${adultsText}`;

    const babiesNum = this.valuesArray[2];
    const babiesText = this.constructor.declOfNum(babiesNum, ['младенец', 'младенца', 'младенцев']);
    const babies = `${babiesNum} ${babiesText}`;

    let str;
    if (adultsNum === 0) {
      str = 'Сколько гостей';
    } else
    if (babiesNum === 0) {
      str = adults;
    } else {
      str = `${adults}, ${babies}`;
    }
    return str;
  }

  createPlacementText() {
    const bedroomsNum = this.valuesArray[0];
    const bedroomsText = this.constructor.declOfNum(bedroomsNum, ['спальня', 'спальни', 'спален']);
    const bedrooms = `${bedroomsNum} ${bedroomsText}`;

    const bedsNum = this.valuesArray[1];
    const bedsText = this.constructor.declOfNum(bedsNum, ['кровать', 'кровати', 'кроватей']);
    const beds = `${bedsNum} ${bedsText}`;

    let str;
    if (bedroomsNum === 0) {
      str = 'Сколько спален';
    } else {
      str = `${bedrooms}, ${beds}...`;
    }
    return str;
  }
}

export default Selector;
