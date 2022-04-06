import EntryCard from '@c/entry-card/EntryCard.js';
import RoomCard from '@c/room-card/RoomCard.js';
import LogInCard from '@c/log-in-card/LogInCard.js';
import Calendar from '@c/calendar/Calendar.js';

class Cards {
  constructor($root) {
    this.$root = $root;
    this.$element = $root.find('.js-cards');
    this.entryCard = undefined;
    this.roomCard = undefined;
    this.logInCard = undefined;
    this.dateForm = undefined;
    this.init();
  }

  init() {
    if (this.$element[0]) {
      this.entryCard = new EntryCard(this.$element.find('.js-cards__entry-card'));
      this.roomCard = new RoomCard(this.$element.find('.js-cards__room-card'));
      this.logInCard = new LogInCard(this.$element.find('.js-cards__log-in-card'));
      this.calendar = new Calendar({ $root: this.$element.find('.js-cards__date'), id: 'cards' });
      this.initCalendar();
    }
  }

  initCalendar() {
    const newDate = ['2019-08-19', '2019-08-23'];
    const cardFocusDate = new Date(2019, 7, 8);
    this.calendar.setDate(newDate);
    this.calendar.setFocusDate(cardFocusDate);
  }
}

export default Cards;
