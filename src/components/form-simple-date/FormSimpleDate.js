import Calendar from '../calendar/Calendar';
import InputDate from '../input-date/InputDate';

class FormPairDate {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-form-pair-date');
    this.calendar = new Calendar(this.$element, this.id, this.changeDate, this.closeCalendar);
    this.input = new InputDate(this.$element, this.openDrop.bind(this), this.setDate.bind(this));
    this.setOptions({
      multipleDates: false,
      range: false,
      dynamicRange: false,
    });
  }

  changeDate(res) {
    this.input.setDate(res.formattedDate);
  }

  openDrop() {
    this.calendar.toggleActiveClass();
    this.input.toggleActiveClass();
  }

  closeCalendar() {
    this.calendar.removeActiveClass();
    this.input.removeActiveClass();
  }

  setDate(date) {
    this.calendar.setDate(date);
  }

  setOptions(options) {
    this.calendar.setOptions(options);
  }
}

export default FormPairDate;
