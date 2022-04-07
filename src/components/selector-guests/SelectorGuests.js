import Observer from '../../observer/Observer';
import Selector from '../selector/Selector';

class SelectorGuests extends Selector {
  constructor($root) {
    super();
    this.$root = $root;
    this.$element = this.$root.find('.js-selector-guests');
  }

  changeInputText() {
    super.changeInputText();
    const str = this.createGuestsText();
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
}

export default SelectorGuests;
