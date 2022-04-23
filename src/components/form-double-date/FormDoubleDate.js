import Input from '../input/Input';
import Calendar from '../calendar/Calendar';
import FormPairDate from '../form-pair-date/FormPairDate';

class FormDoubleDate extends FormPairDate {
  init() {
    const $element = this.$root.find('.js-form-double-date');
    this.calendar = new Calendar($element);
    this.calendar.observer.subscribe({ key: 'change', observer: this.changeDate.bind(this) });
    this.calendar.observer.subscribe({ key: 'close', observer: this.closeCalendar.bind(this) });
    const $firstInputElement = $element.find('.js-form-double-date__item_is-first');
    this.firstInput = new Input($firstInputElement);
    this.firstInput.observer.subscribe({ key: 'click', observer: this.openDrop.bind(this) });
    const $secondInputElement = $element.find('.js-form-double-date__item_is-second');
    this.secondInput = new Input($secondInputElement);
    this.secondInput.observer.subscribe({ key: 'click', observer: this.openDrop.bind(this) });
  }

  changeDate(res) {
    this.firstInput.setValue(res.formattedDate[0]);
    this.secondInput.setValue(res.formattedDate[1]);
  }
}

export default FormDoubleDate;
