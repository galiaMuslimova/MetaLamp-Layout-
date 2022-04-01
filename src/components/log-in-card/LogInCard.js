import Form from '../form/Form';

class LogInCard {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-log-in-card');
    this.dateForm = new Form({
      root: this.$element.find('.js-log-in-card__date'),
      type: 'calendar',
      dateType: 'single',
      id: 'log-in-card',
    });
  }
}

export default LogInCard;
