import FormSimpleDate from '../form-simple-date/FormSimpleDate';

class RegisterCard {
  constructor($root) {
    this.$root = $root;
    this.init();
  }

  init() {
    this.$element = this.$root.find('.js-register-card');
    this.$date = this.$element.find('.js-register-card__date');
    this.dateForm = new FormSimpleDate(this.$date);
  }
}

export default RegisterCard;
