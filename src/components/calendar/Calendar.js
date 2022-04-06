import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import DropButtons from '../drop-buttons/DropButtons';

class Calendar {
  constructor($root, id, changeDate, closeCalendar) {
    this.$root = $root;
    this.anchor = `.js-calendar__dp_for-${this.id}`;
    this.$element = this.$root.find('.js-calendar');
    this.id = id;
    this.changeDate = changeDate;
    this.closeCalendar = closeCalendar;
    this.dropButtons = new DropButtons(
      this.$element,
      this.resetCalendar.bind(this),
      this.submitCalendar.bind(this),
    );
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
        el.changeDate(res);
      },
    });
  }

  resetCalendar() {
    this.dp.clear();
    this.changeDate({
      date: [undefined, undefined],
      formattedDate: [undefined, undefined],
    });
  }

  submitCalendar() {
    this.closeCalendar();
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
