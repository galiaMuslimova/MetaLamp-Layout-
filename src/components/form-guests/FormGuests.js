import Selector from '../selector/Selector';
import Input from '../input/Input';

class FormGuests {
  constructor($root) {
    this.$root = $root;
    this.input = null;
    this.selector = null;
    this.init();
    this.bindEventListeners();
  }

  init() {
    const $element = this.$root.find('.js-form-guests');
    const $inputElement = $element.find('.js-form-guests__input');
    this.input = new Input($inputElement);
    this.input.observer.subscribe({ key: 'click', observer: this.openSelector.bind(this) });
    const $selectorElement = $element.find('.js-form-guests__drop');
    this.selector = new Selector($selectorElement);
    this.selector.observer.subscribe({ key: 'change', observer: this.setValue.bind(this) });
    this.selector.observer.subscribe({ key: 'close', observer: this.closeSelector.bind(this) });
    this.isOpen = this.selector.isOpen();
    this.selector.changeCount();
  }

  bindEventListeners() {
    $(document).on('click', this.handleDropClassActiveRemove.bind(this));
  }

  openSelector() {
    this.input.toggleActiveClass();
    this.selector.toggleActiveClass();
    this.isOpen = !this.isOpen;
  }

  closeSelector() {
    this.input.removeActiveClass();
    this.selector.removeActiveClass();
    this.isOpen = false;
  }

  handleDropClassActiveRemove(event) {
    if (this.isOpen && this.$root.find(event.target).length === 0) {
      this.closeSelector();
    }
  }

  static declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    const isTwo = number % 100 > 4 && number % 100 < 20;
    return titles[isTwo ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  setValue(array) {
    const str = this.createGuestsText(array);
    this.input.setValue(str);
  }

  createGuestsText(array) {
    const adultsNum = array[0] + array[1];
    const adultsText = this.constructor.declOfNum(adultsNum, ['гость', 'гостя', 'гостей']);
    const adults = `${adultsNum} ${adultsText}`;

    const babiesNum = array[2];
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
}

export default FormGuests;
