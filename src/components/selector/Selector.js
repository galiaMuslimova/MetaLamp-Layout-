import Observer from '../../observer/Observer';
import Counter from '../counter/Counter.js';
import DropButtons from '../drop-buttons/DropButtons.js';

class Selector {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-selector');
    this.observer = new Observer();
    this.dropButtons = undefined;
    this.addDropButtons();
    this.counters = this.makeCounters();
    this.valuesArray = this.takeNumbersArray();
  }

  addDropButtons() {
    const hasButton = this.$element.find('.js-selector__buttons').length > 0;
    if (hasButton) {
      this.dropButtons = new DropButtons(this.$element);
      this.dropButtons.observer.subscribe({ key: 'clickReset', observer: this.reset.bind(this) });
      this.dropButtons.observer.subscribe({ key: 'clickSubmit', observer: this.submit.bind(this) });
    }
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
    this.observer.notify('change', this.valuesArray);
    if (this.dropButtons !== undefined) {
      this.changeButtonsClass();
    }
  }

  changeButtonsClass() {
    const isResetButtonActive = this.dropButtons.hasActiveClass();
    const result = this.valuesArray.reduce((sum, elem) => sum + elem, 0);
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
    this.valuesArray = this.takeNumbersArray();
    this.observer.notify('change', this.valuesArray);
    if (this.dropButtons !== undefined) {
      this.dropButtons.removeActiveClass();
    }
  }

  submit() {
    this.observer.notify('close');
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
}

export default Selector;
