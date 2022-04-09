import Calendar from '../calendar/Calendar';
import InputOpen from '../input-open/InputOpen';

class FormCalendar {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root;
    this.calendar = new Calendar(this.$root);
    this.input = new InputOpen(this.$root);
    this.isOpen = this.calendar.isOpen();
    this.bindEventListeners();
  }

  bindEventListeners() {
    $(document).on('click', this.handleDropClassActiveRemove.bind(this));
  }

  handleDropClassActiveRemove(event) {
    if (this.isOpen && this.$root.find(event.target).length === 0) {
      this.closeCalendar();
    }
  }

  openDrop() {
    this.calendar.toggleActiveClass();
    this.isOpen = !this.isOpen;
  }

  closeCalendar() {
    this.calendar.removeActiveClass();
    this.isOpen = false;
  }

  setDate(date) {
    this.calendar.setDate(date);
  }

  setFocusDate(date) {
    this.calendar.setFocusDate(date);
  }

  setOptions(options) {
    this.calendar.setOptions(options);
  }
}

export default FormCalendar;
