import Calendar from '../calendar/Calendar';

class FormSimpleDate {
  constructor($root) {
    this.$root = $root;
    this.init();
    this.bindEventListeners();
  }

  init() {
    this.$element = this.$root.find('.js-form-simple-date');
    this.$calendarElement = this.$element.find('.js-form-simple-date__calendar');
    this.calendar = new Calendar(this.$calendarElement);
    this.calendar.observer.subscribe({ key: 'change', observer: this.changeDate.bind(this) });
    this.calendar.observer.subscribe({ key: 'close', observer: this.closeCalendar.bind(this) });
    this.$input = this.$element.find('.js-form-simple-date__input');
    this.value = this.$input.val();
    const options = {
      multipleDates: false,
      range: false,
      dynamicRange: false,
    };
    this.calendar.setOptions(options);
  }

  bindEventListeners() {
    $(document).on('click', this.handleDropClassActiveRemove.bind(this));
    this.$input.on('click', this.handleCalendarOpen.bind(this));
    this.$input.on('keyup', this.handleInputKeyup.bind(this));
  }

  handleDropClassActiveRemove(event) {
    if (this.isOpen && this.$root.find(event.target).length === 0) {
      this.calendar.removeActiveClass();
      this.isOpen = false;
    }
  }

  changeDate(res) {
    this.$input.val(res.formattedDate);
  }

  changeInput(value) {
    const valuesArray = value.split('.');
    const date = new Date(valuesArray[2], valuesArray[1], valuesArray[0]);
    this.calendar.setDate(date);
  }

  handleCalendarOpen() {
    this.calendar.toggleActiveClass();
    this.isOpen = !this.isOpen;
  }

  closeCalendar() {
    this.calendar.removeActiveClass();
    this.isOpen = false;
  }

  handleInputKeyup() {
    const oneDigitDay = '^[0-3]$';
    const TwoDigitDay = '^(0[1-9]|[12]\\d|3[01])$';
    const DayAndDot = '^(0[1-9]|[12]\\d|3[01])\\.$';
    const DayDotOneDigitMonth = '^(0[1-9]|[12]\\d|3[01])\\.[0|1]$';
    const DayDotMonth = '^(0[1-9]|[12]\\d|3[01])\\.(0[1-9]|1[012])$';
    const DayDotMonthDot = '^(0[1-9]|[12]\\d|3[01])\\.(0[1-9]|1[012])\\.$';
    const DayMonthOneDigitYear = '^(0[1-9]|[12]\\d|3[01])\\.(0[1-9]|1[012])\\.(1|2)$';
    const DayMonthTwoDigitYear = '^(0[1-9]|[12]\\d|3[01])\\.(0[1-9]|1[012])\\.(19|20)$';
    const allDate = '^(0[1-9]|[12]\\d|3[01])\\.(0[1-9]|1[012])\\.(19|20)\\d{1,2}$';
    const regExpStr = `${oneDigitDay}|${TwoDigitDay}|${DayAndDot}|${DayDotOneDigitMonth}|${DayDotMonth}|${DayDotMonthDot}|${DayMonthOneDigitYear}|${DayMonthTwoDigitYear}|${allDate}`;
    const decimalsRegExp = new RegExp(regExpStr);

    const inputValue = this.$input.val();
    const isCorrectExp = decimalsRegExp.test(inputValue);

    if (isCorrectExp || inputValue.length === 0) {
      this.value = inputValue;
    }

    if (this.value.length === 2 || this.value.length === 5) {
      this.value = `${this.value}.`;
    }

    if (this.value.length === 10) {
      this.changeInput(this.value);
    }

    this.$input.val(this.value);
  }
}

export default FormSimpleDate;
