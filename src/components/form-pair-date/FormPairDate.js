import Calendar from '../calendar/Calendar';
import FormCalendar from '../form-calendar/FormCalendar';
import Input from '../input/Input';

class FormPairDate extends FormCalendar {
  constructor($root) {
    super($root);
    this.$root = $root;
    this.$element = this.$root.find('.js-form-pair-date');
    this.calendar = new Calendar(this.$element.find('.js-form-pair-date__calendar'));
    this.calendar.createDatePicker();
    this.calendar.observer.subscribe({ key: 'change', observer: this.changeDate.bind(this) });
    this.calendar.observer.subscribe({ key: 'close', observer: this.closeCalendar.bind(this) });
    this.input = new Input(this.$element.find('.js-form-pair-date__input'));
    this.input.observer.subscribe({ key: 'click', observer: this.openDrop.bind(this) });
  }

  changeDate(res) {
    const date1 = this.calendar.formatDate(res.date[0], 'dd MMM');
    const date2 = this.calendar.formatDate(res.date[1], 'dd MMM');
    const str = `${date1} - ${date2}`;
    this.input.setValue(str.toLowerCase());
  }
}

export default FormPairDate;
