import Calendar from '@c/calendar/Calendar.js';
import Slider from '@c/slider/Slider.js';

class Filter {
  constructor() {
    this.$filterCalendarPlace = '.js-calendar__dp_for-filter';
    this.$filterSlider = $('.js-slider_for-filter');
    this.$iconOpen = $('.js-filter__icon');
    this.makeCalendar();
    this.makeSlider();
    this.bindEventListeners();
  }

  makeCalendar() {
    if ($(this.$filterCalendarPlace).length > 0) {
      const filterCalendar = new Calendar(this.$filterCalendarPlace);
      filterCalendar.init();
      const filterDate = ['2019-08-19', '2019-08-23'];
      filterCalendar.dp.selectDate(filterDate);
    }
  }

  makeSlider() {
    if (this.$filterSlider.length > 0) {
      const slider = new Slider(this.$filterSlider);
      slider.init();
    }
  }

  bindEventListeners() {
    this.$iconOpen.on('click', this.handleIconOpenClick);
  }

  handleIconOpenClick() {
    $(this).toggleClass('filter__icon_expanded');
    const $drop = $(this).closest('.filter__expandable-list').find('.js-drop');
    $drop.toggleClass('drop_active');
  }
}

const filter = new Filter();
