import Calendar from '../calendar/Calendar';
import Input from '../input/Input';

class FormPairDate {
  constructor($root) {
    this.$root = $root;
    this.init();
    this.bindEventListeners();
  }

  init() {
    const $element = this.$root.find('.js-form-pair-date');
    const $calendarElement = $element.find('.js-form-pair-date__calendar');
    this.calendar = new Calendar($calendarElement);
    this.calendar.observer.subscribe({ key: 'change', observer: this.changeDate.bind(this) });
    this.calendar.observer.subscribe({ key: 'close', observer: this.closeCalendar.bind(this) });
    const $inputElement = $element.find('.js-form-pair-date__input');
    this.input = new Input($inputElement);
    this.input.observer.subscribe({ key: 'click', observer: this.openDrop.bind(this) });
    this.isOpen = this.calendar.isOpen();
  }

  changeDate(res) {
    const date1 = this.calendar.formatDate(res.date[0], 'dd MMM');
    const date2 = this.calendar.formatDate(res.date[1], 'dd MMM');
    const str = `${date1} - ${date2}`;
    this.input.setValue(str.toLowerCase());
  }

  bindEventListeners() {
    $(document).on('click', this.handleDropClassActiveRemove.bind(this));
  }

  handleDropClassActiveRemove(event) {
    console.log(this.isOpen, this.$root.find(event.target).length === 0)
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

export default FormPairDate;
