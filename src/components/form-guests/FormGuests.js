import FormSelector from '../form-selector/FormSelector';
import SelectorGuests from '../selector-guests/SelectorGuests';
import InputOpen from '../input-open/InputOpen';

class FormGuests {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-form-guests');
    this.input = new InputOpen(this.$element.find('.js-form-guests__input'));
    this.input.observer.subscribe({ key: 'click', observer: this.openSelector.bind(this) });
    this.selector = new SelectorGuests(this.$element.find('.js-form-guests__drop'));
    this.selector.observer.subscribe({ key: 'close', observer: this.closeSelector.bind(this) });
    this.selector.observer.subscribe({ key: 'setValue', observer: this.setValue.bind(this) });
    this.isOpen = this.selector.isOpen();
    this.bindEventListeners();
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

  setValue(value) {
    this.input.setValue(value);
  }

  handleDropClassActiveRemove(event) {
    if (this.isOpen && this.$root.find(event.target).length === 0) {
      this.closeSelector();
    }
  }
}

export default FormGuests;
