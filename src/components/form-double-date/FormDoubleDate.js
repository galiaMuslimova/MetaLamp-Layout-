import InputOpen from '../input-open/InputOpen';
import Calendar from '../calendar/Calendar';

class FormDoubleDate {
  constructor($root, id) {
    this.$root = $root;
    this.id = id;
    this.$element = this.$root.find('.js-form-double-date');
    this.calendar = new Calendar(this.$element, this.id);
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

  openDrop() {
    this.calendar.toggleActiveClass();
    this.firstInput.toggleActiveClass();
    this.secondInput.toggleActiveClass();
  }

  closeCalendar() {
    this.calendar.removeActiveClass();
    this.firstInput.removeActiveClass();
    this.secondInput.removeActiveClass();
  }

  setDate(date) {
    this.calendar.setDate(date);
  }

  setFocusDate(date) {
    this.calendar.setFocusDate(date);
  }
}

export default FormDoubleDate;
