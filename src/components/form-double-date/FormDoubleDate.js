import InputOpen from '../input-open/InputOpen';
import Calendar from '../calendar/Calendar';

class FormDoubleDate {
  constructor($root, id) {
    this.$root = $root;
    this.id = id;
    this.$element = this.$root.find('.js-double-date-form');
    this.calendar = new Calendar(this.$element, this.id, this.changeDate, this.closeCalendar);
    this.firstInput = new InputOpen(
      this.$element.find('.js-form-double-date__item_is-first'),
      this.openDrop.bind(this),
    );
    this.secondInput = new InputOpen(
      this.$element.find('.js-form-double-date__item_is-second'),
      this.openDrop.bind(this),
    );
    this.bindEventListeners();
  }

  changeDate(res) {
    this.firstInput.setDate(res.formattedDate[0]);
    this.secondInput.setDate(res.formattedDate[1]);
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
