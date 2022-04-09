import InputOpen from '../input-open/InputOpen';
import Calendar from '../calendar/Calendar';
import FormCalendar from '../form-calendar/FormCalendar';

class FormDoubleDate extends FormCalendar {
  constructor($root) {
    super($root);
    this.$root = $root;
    this.$element = this.$root.find('.js-form-double-date');
    this.calendar = new Calendar(this.$element);
    this.calendar.createDatePicker();
    this.calendar.observer.subscribe({ key: 'change', observer: this.changeDate.bind(this) });
    this.calendar.observer.subscribe({ key: 'close', observer: this.closeCalendar.bind(this) });
    this.firstInput = new InputOpen(this.$element.find('.js-form-double-date__item_is-first'));
    this.firstInput.observer.subscribe({ key: 'click', observer: this.openDrop.bind(this) });
    this.secondInput = new InputOpen(this.$element.find('.js-form-double-date__item_is-second'));
    this.secondInput.observer.subscribe({ key: 'click', observer: this.openDrop.bind(this) });
  }

  changeDate(res) {
    this.firstInput.setValue(res.formattedDate[0]);
    this.secondInput.setValue(res.formattedDate[1]);
  }
}

export default FormDoubleDate;
