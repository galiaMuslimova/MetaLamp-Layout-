import Form from '../form/Form';

class LogInCard {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-log-in-card');
    this.dateForm = new Form({
      root: this.$element.find('.js-log-in-card__date'),
      type: 'calendar',
      place: 'log-in-card',
    });
    this.initCalendar();
  }

  initCalendar() {
    const options = {
      multipleDates: false,
      range: false,
      dynamicRange: false,
    };
    this.dateForm.updateCalendar(options);
  }
}

export default LogInCard;
