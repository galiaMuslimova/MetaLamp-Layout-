import FormSimpleDate from '../form-simple-date/FormSimpleDate';

class LogInCard {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-log-in-card');
    this.dateForm = new FormSimpleDate(this.$element.find('.js-log-in-card__date'));
  }
}

export default LogInCard;
