import Calendar from '../calendar/Calendar';
import InputOpen from '../input-open/InputOpen';

class FormPairDate {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-form-pair-date');
    this.calendar = new Calendar(this.$element, this.id, this.changeDate, this.closeCalendar);
    this.input = new InputOpen(
      this.$element.find('.js-form-pair-date__input'),
      this.toggleDropOpen.bind(this),
    );
    this.bindEventListeners();
  }

  changeDate(res) {
    const date1 = this.dp.formatDate(res.date[0], 'dd MMM');
    const date2 = this.dp.formatDate(res.date[1], 'dd MMM');
    const str = `${date1} - ${date2}`;
    this.input.setDate(str.toLowerCase());
  }

  toggleDropOpen() {
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
}

export default FormPairDate;
