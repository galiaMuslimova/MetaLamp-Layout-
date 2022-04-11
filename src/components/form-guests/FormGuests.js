import FormSelector from '../form-selector/FormSelector';
import Selector from '../selector/Selector';
import Input from '../input/Input';

class FormGuests extends FormSelector {
  constructor($root) {
    super($root);
    this.$root = $root;
    this.$element = this.$root.find('.js-form-guests');
    this.input = new Input(this.$element.find('.js-form-guests__input'));
    this.input.observer.subscribe({ key: 'click', observer: this.openSelector.bind(this) });
    this.selector = new Selector(this.$element.find('.js-form-guests__drop'));
    this.selector.observer.subscribe({ key: 'change', observer: this.setValue.bind(this) });
    this.selector.observer.subscribe({ key: 'close', observer: this.closeSelector.bind(this) });
    this.selector.changeCount();
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
