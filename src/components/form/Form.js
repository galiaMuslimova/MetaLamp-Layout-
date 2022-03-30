import Drop from '../drop/Drop';
import Input from '../input/Input';
import Calendar from '../calendar/Calendar';
import Selector from '../selector/Selector';

class Form {
  constructor({ root, type, place }) {
    this.$root = root;
    this.type = type;
    this.place = place;
    this.$element = this.$root.find('.js-form');
    this.drop = new Drop(this.$element);
    this.input = new Input(this.$element, this.drop, this.openDropFunction);
    this.calendar = undefined;
    this.init();
  }

  init() {
    if (this.type === 'calendar') {
      this.calendar = new Calendar(this.place, this, this.drop, this.input);
    } else if (this.type === 'selector') {
      const selector = new Selector(this, this.drop, this.input);
    }
  }

  openDropFunction() {
    this.drop.toggleActiveClass();
  }

  setDate(date) {
    this.calendar.dp.selectDate(date);
  }

  setFocusDate(date) {
    this.calendar.dp.setFocusDate(date);
  }

  updateCalendar(options) {
    this.calendar.dp.update(options);
  }
}

export default Form;
