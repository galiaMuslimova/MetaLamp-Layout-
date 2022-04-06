import Selector from '../selector/Selector';
import InputOpen from '../input-open/InputOpen';

class FormSelector {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-select-form');
    this.selector = new Selector(
      this.$element.find('.js-form-selector__input'),
      this.closeSelector.bind(this),
    );
    this.input = new InputOpen(
      this.$element.find('.js-form-selector__drop'),
      this.toggleSelectorOpen.bind(this),
    );
    this.bindEventListeners();
  }

  bindEventListeners() {
    $(document).on('click', this.handleDropClassActiveRemove.bind(this));
  }

  toggleSelectorOpen() {
    this.selector.toggleActiveClass();
    this.input.toggleActiveClass();
  }

  closeSelector() {
    this.selector.removeActiveClass();
    this.input.removeActiveClass();
  }

  handleDropClassActiveRemove(event) {
    if (this.$root.find(event.target).length === 0) {
      this.closeSelector();
    }
  }
}

export default FormSelector;
