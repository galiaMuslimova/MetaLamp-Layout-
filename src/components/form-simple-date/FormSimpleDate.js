import Calendar from '../calendar/Calendar';
import FormCalendar from '../form-calendar/FormCalendar';
import InputDate from '../input-date/InputDate';

class FormSimpleDate extends FormCalendar {
  constructor($root) {
    super($root);
    this.$root = $root;
    this.$element = this.$root.find('.js-form-simple-date');
    this.calendar = new Calendar(this.$element.find('.js-form-simple-date__calendar'));
    this.calendar.createDatePicker();
    this.calendar.observer.subscribe({ key: 'change', observer: this.changeDate.bind(this) });
    this.calendar.observer.subscribe({ key: 'close', observer: this.closeCalendar.bind(this) });
    this.input = new InputDate(this.$element.find('.js-form-simple-date__input'));
    this.input.observer.subscribe({ key: 'click', observer: this.openDrop.bind(this) });
    this.input.observer.subscribe({ key: 'change', observer: this.changeInput.bind(this) });
    this.init();
  }

  init() {
    const options = {
      multipleDates: false,
      range: false,
      dynamicRange: false,
    };
    this.setOptions(options);
  }

  changeDate(res) {
    this.input.setDate(res.formattedDate);
  }

  changeInput(value) {
    const valuesArray = value.split('.');
    const date = new Date(valuesArray[2], valuesArray[1], valuesArray[0]);
    this.calendar.setDate(date);
  }
}

export default FormSimpleDate;
