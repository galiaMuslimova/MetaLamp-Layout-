import FormGuests from '../form-guests/FormGuests';
import Selector from '../selector/Selector';
import Input from '../input/Input';

class FormPlacement extends FormGuests {
  init() {
    const $element = this.$root.find('.js-form-placement');
    const $inputElement = $element.find('.js-form-placement__input');
    this.input = new Input($inputElement);
    this.input.observer.subscribe({ key: 'click', observer: this.openSelector.bind(this) });
    const $selectorElement = $element.find('.js-form-placement__drop');
    this.selector = new Selector($selectorElement);
    this.selector.observer.subscribe({ key: 'change', observer: this.setValue.bind(this) });
    this.selector.observer.subscribe({ key: 'close', observer: this.closeSelector.bind(this) });
    this.selector.changeCount();
  }

  setValue(array) {
    const str = this.createPlacementText(array);
    this.input.setValue(str);
  }

  createPlacementText(array) {
    const bedroomNum = array[0];
    const bedroomText = this.constructor.declOfNum(bedroomNum, ['спальня', 'спальни', 'спален']);
    const bedrooms = `${bedroomNum} ${bedroomText}`;

    const bedNum = array[1];
    const bedText = this.constructor.declOfNum(bedNum, ['кровать', 'кровати', 'кроватей']);
    const beds = `${bedNum} ${bedText}`;

    const bathNum = array[2];
    const bathText = this.constructor.declOfNum(bathNum, ['ванная комната', 'ванные комнаты', 'ванных комнат']);
    const baths = `${bathNum} ${bathText}`;

    let str;
    if (bedroomNum === 0) {
      str = 'Сколько спален';
    } else {
      str = `${`${bedrooms}`}${bedNum ? `, ${beds}` : ''}${(!bedNum && bathNum) ? `, ${baths}` : ''}${(bedNum && bathNum) ? '...' : ''}`;
    }
    return str;
  }
}

export default FormPlacement;
