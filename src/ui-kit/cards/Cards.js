import EntryCard from '@c/entry-card/EntryCard.js';
import RoomCard from '@c/room-card/RoomCard.js';
import LogInCard from '@c/log-in-card/LogInCard.js';
import Calendar from '@c/calendar/Calendar.js';
import CatalogItem from '@c/catalog-item/CatalogItem.js';

class Cards {
  constructor($root) {
    this.$root = $root;
    this.$element = $root.find('.js-cards');
    this.init();
  }

  init() {
    if (this.$element[0]) {
      const $entryCardElement = this.$element.find('.js-cards__entry-card');
      this.entryCard = new EntryCard($entryCardElement);
      const $roomCardElement = this.$element.find('.js-cards__room-card');
      this.roomCard = new RoomCard($roomCardElement);
      const $logInCardElement = this.$element.find('.js-cards__log-in-card');
      this.logInCard = new LogInCard($logInCardElement);
      const $calendarElement = this.$element.find('.js-cards__date');
      this.calendar = new Calendar($calendarElement);
      const $catalogItemElement = this.$element.find('.js-cards__catalog-card_focused');
      this.catalogItem = new CatalogItem($catalogItemElement);
      this.catalogItem.setFocus();
      this.initCalendar();
    }
  }

  initCalendar() {
    this.calendar.toggleActiveClass();
    const newDate = ['2019-08-19', '2019-08-23'];
    const cardFocusDate = new Date(2019, 7, 8);
    this.calendar.setDate(newDate);
    this.calendar.setFocusDate(cardFocusDate);
  }
}

export default Cards;
