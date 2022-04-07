import Observer from '../../observer/Observer';
import Counter from '../counter/Counter.js';
import DropButtons from '../drop-buttons/DropButtons.js';

class Selector {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-selector');
    this.observer = new Observer();
    this.dropButtons = new DropButtons(this.$element);
    this.dropButtons.observer.subscribe({ key: 'clickReset', observer: this.reset.bind(this) });
    this.dropButtons.observer.subscribe({ key: 'clickSubmit', observer: this.submit.bind(this) });
    this.counters = this.makeCounters();
    this.valuesArray = this.takeNumbersArray();
    this.changeCount();
  }

  makeCounters() {
    const counters = [];
    const element = this;
    const $counters = this.$element.find('.js-selector__counter');
    $counters.each(function () {
      const counter = new Counter($(this));
      counter.observer.subscribe({ key: 'change', observer: element.changeCount.bind(element) });
      counter.init();
      counters.push(counter);
    });
    return counters;
  }

  changeCount() {
    this.valuesArray = this.takeNumbersArray();
    const result = this.valuesArray.reduce((sum, elem) => sum + elem, 0);
    this.changeInputText();
    const isResetButtonActive = this.dropButtons.hasActiveClass();
    if (result > 0 && !isResetButtonActive) {
      this.dropButtons.addActiveClass();
    } else if (result < 1 && isResetButtonActive) {
      this.dropButtons.removeActiveClass();
    }
  }

  reset() {
    this.counters.forEach((counter) => {
      counter.resetForm();
    });
    this.changeInputText();
    this.valuesArray = this.takeNumbersArray();
    this.dropButtons.removeActiveClass();
  }

  submit() {
    this.observer.notify('close');
  }

  changeInputText() {
    const str = '';
    this.observer.notify('setValue', str);
  }

  removeActiveClass() {
    this.$element.removeClass('selector_active');
  }

  toggleActiveClass() {
    this.$element.toggleClass('selector_active');
  }

  isOpen() {
    return this.$element.hasClass('selector_active');
  }

  takeNumbersArray() {
    return this.counters.map((counter) => counter.numButtonValue);
  }

  static declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    const isTwo = number % 100 > 4 && number % 100 < 20;
    return titles[isTwo ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }
}

export default Selector;
