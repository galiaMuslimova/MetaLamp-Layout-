import Calendar from '@c/calendar/Calendar.js';

class Cards {
  constructor(element, anchor) {
    this.element = element;
    this.cardsCalendarAnchor = anchor;
    this.makeCalendar();
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

export default Cards;
