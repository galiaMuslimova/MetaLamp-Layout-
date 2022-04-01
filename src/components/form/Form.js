import Drop from '../drop/Drop';
import Input from '../input/Input';
import Calendar from '../calendar/Calendar';
import Selector from '../selector/Selector';

class Form {
  constructor({
    root, type, dateType, id,
  }) {
    this.$root = root;
    this.type = type;
    this.dateType = dateType;
    this.id = id;
    this.$element = this.$root.find('.js-form');
    this.drop = new Drop(this.$element, this.toggleDropOpen.bind(this));
    this.input = new Input(
      this.$element,
      this.drop,
      this.toggleDropOpen.bind(this),
      this.changeDate.bind(this),
    );
    this.calendar = undefined;
    this.selector = undefined;
    this.$resetButton = this.$element.find('.js-drop__button_for-reset');
    this.$submitButton = this.$element.find('.js-drop__button_for-submit');
    this.init();
  }

  init() {
    if (this.dateType === 'empty') {
      this.input = undefined;
    }
    if (this.type === 'calendar') {
      this.calendar = new Calendar(this.dateType, this.id, this.input);
    } else if (this.type === 'selector') {
      this.selector = new Selector(this, this.drop, this.input, this.$resetButton);
    }
    this.bindEventListeners();
  }

  bindEventListeners() {
    $(document).on('click', this.handleDropClassActiveRemove.bind(this));
    this.$resetButton.on('click', this.handleResetButtonClick.bind(this));
    this.$submitButton.on('click', this.handleSubmitButtonClick.bind(this));
  }

  handleResetButtonClick() {
    if (this.type === 'calendar') {
      this.calendar.resetCalendar();
      this.$resetButton.addClass('drop__button_active');
    } else if (this.type === 'selector') {
      this.selector.resetForm();
    }
  }

  handleSubmitButtonClick() {
    this.closeDrop();
  }

  handleDropClassActiveRemove(event) {
    if (this.$root.find(event.target).length === 0) {
      this.closeDrop();
    }
  }

  toggleDropOpen() {
    this.drop.toggleActiveClass();
    this.input.toggleActiveClass();
  }

  closeDrop() {
    this.drop.removeActiveClass();
    this.input.removeActiveClass();
  }

  changeDate(date) {
    const splitDate = date.split('.');
    const newDate = new Date(Number(splitDate[2]), Number(splitDate[1] - 1), Number(splitDate[0]));
    this.calendar.dp.selectDate(newDate);
  }

  setDate(date) {
    this.calendar.dp.selectDate(date);
  }

  setFocusDate(date) {
    this.calendar.dp.setFocusDate(date);
  }
}

export default Form;
