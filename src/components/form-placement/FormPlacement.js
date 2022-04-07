import FormSelector from '../form-selector/FormSelector';
import SelectorPlacement from '../selector-placement/SelectorPlacement';
import InputOpen from '../input-open/InputOpen';

class FormPlacement extends FormSelector {
  constructor($root) {
    super();
    this.$root = $root;
    this.$element = this.$root.find('.js-form-placement');
    this.input = new InputOpen(this.$element.find('.js-form-placement__input'));
    this.selector = new SelectorPlacement(this.$element.find('.js-form-placement__drop'));
  }
}

export default FormPlacement;
