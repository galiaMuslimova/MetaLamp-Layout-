import EntryCard from '@c/entry-card/EntryCard.js';
import RoomCard from '@c/room-card/RoomCard.js';
import LogInCard from '@c/log-in-card/LogInCard.js';
import Calendar from '@c/calendar/Calendar.js';

class Cards {
  constructor($element) {
    this.$element = $element;
    this.entryCard = new EntryCard(this.$element);
    this.roomCard = new RoomCard(this.$element);
    this.logInCard = new LogInCard(this.$element);
    this.calendar = new Calendar('cards');
    this.initCalendar();
  }

  initCalendar() {
    const newDate = ['2019-08-19', '2019-08-23'];
    const cardFocusDate = new Date(2019, 7, 8);
    this.dateForm.setDate(newDate);
    this.dateForm.setFocusDate(cardFocusDate);
  }
}

export default Cards;
