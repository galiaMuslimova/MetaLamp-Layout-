import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import Observer from '../../observer/Observer';
import DropButtons from '../drop-buttons/DropButtons';

class Calendar {
  constructor($root, id) {
    this.$root = $root;
    this.id = id;
    this.anchor = `.js-calendar__dp_for-${this.id}`;
    this.$element = this.$root.find('.js-calendar');
    this.observer = new Observer();
    this.dropButtons = new DropButtons(this.$element);
    this.dropButtons.observer.subscribe({ key: 'clickReset', observer: this.reset.bind(this) });
    this.dropButtons.observer.subscribe({ key: 'clickSubmit', observer: this.submit.bind(this) });
    this.dropButtons.addActiveClass();
    this.dp = {};
    this.init();
  }

  init() {
    if ($(this.anchor)[0]) {
      this.createDatePicker();
    }
  }

  createDatePicker() {
    const el = this;
    this.dp = new AirDatepicker(this.anchor, {
      navTitles: {
        days: 'MMMM <i class="calendar__year">yyyy</i>',
      },
      startDate: new Date(2019, 7, 19),
      multipleDates: true,
      range: true,
      dynamicRange: true,
      prevHtml: '<div class="calendar__arrow"><span class="icon-arrow_back"></span></div>',
      nextHtml: '<div class="calendar__arrow"><span class="icon-arrow"></span></div>',
      onSelect(res) {
        el.observer.notify('change', res);
      },
    });
  }

  reset() {
    this.dp.clear();
    this.observer.notify('change', {
      date: [undefined, undefined],
      formattedDate: [undefined, undefined],
    });
  }

  submit() {
    this.observer.notify('close');
  }

  setOptions(options) {
    this.dp.update(options);
  }

  setDate(newDate) {
    this.dp.selectDate(newDate);
  }

  setFocusDate(newDate) {
    this.dp.setFocusDate(newDate);
  }

  removeActiveClass() {
    this.$element.removeClass('calendar_active');
  }

  toggleActiveClass() {
    this.$element.toggleClass('calendar_active');
  }
}

export default Calendar;
