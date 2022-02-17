import Calendar from '@c/calendar/Calendar.js';

class Cards {
  constructor() {
    this.cardsCalendarAnchor = '.calendar__dp_for-cards';
    this.init();
  }

  init() {
    if ($('.js-calendar__dp_for-cards').length > 0) {
      this.makeCalendar();
    }
  }

  makeCalendar() {
    const cardsCalendar = new Calendar(this.cardsCalendarAnchor);
    cardsCalendar.init();
    const cardDate = ['2019-08-19', '2019-08-23'];
    const cardFocusDate = new Date(2019, 7, 8);
    cardsCalendar.dp.selectDate(cardDate);
    cardsCalendar.dp.setFocusDate(cardFocusDate);
  }
}

const cards = new Cards();
