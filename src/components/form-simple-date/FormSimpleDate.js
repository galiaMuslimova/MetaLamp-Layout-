import Calendar from '../calendar/Calendar';
import FormCalendar from '../form-calendar/FormCalendar';
import Input from '../input/Input';

class FormSimpleDate extends FormCalendar {
  constructor($root) {
    super($root);
    this.$root = $root;
    this.$element = this.$root.find('.js-form-simple-date');
    this.calendar = new Calendar(this.$element.find('.js-form-simple-date__calendar'));
    this.calendar.createDatePicker();
    this.calendar.observer.subscribe({ key: 'change', observer: this.changeDate.bind(this) });
    this.calendar.observer.subscribe({ key: 'close', observer: this.closeCalendar.bind(this) });
    this.$input = this.$element.find('.js-form-simple-date__input');
    console.log(this.$input)
    this.init();
    this.bindEventListeners();
  }

  init() {
    const options = {
      multipleDates: false,
      range: false,
      dynamicRange: false,
    };
    this.setOptions(options);
  }

  bindEventListeners() {
    this.$input.on('click', this.handleCalendarClose.bind(this));
    this.$input.on('keyup', this.handleInputKeyup.bind(this));
  }

  changeDate(res) {
    this.$input.val(res.formattedDate);
  }

  changeInput(value) {
    const valuesArray = value.split('.');
    const date = new Date(valuesArray[2], valuesArray[1], valuesArray[0]);
    this.calendar.setDate(date);
  }

  handleCalendarClose() {
    console.log('close')
    this.closeCalendar();
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

    const inputValue = this.$inputField.val();
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

    this.$element.val(this.value);
  }
}

export default FormSimpleDate;
