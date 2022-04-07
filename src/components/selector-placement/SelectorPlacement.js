import Observer from '../../observer/Observer';
import Selector from '../selector/Selector';

class SelectorPlacement extends Selector {
  constructor($root) {
    super();
    this.$root = $root;
    this.$element = this.$root.find('.js-selector-placement');
  }

  changeInputText() {
    super.changeInputText();
    const str = this.createPlacementText();
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

export default SelectorPlacement;
