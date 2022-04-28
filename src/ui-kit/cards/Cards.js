import EntryCard from '@c/entry-card/EntryCard.js';
import RoomCard from '@c/room-card/RoomCard.js';
import RegisterCard from '@c/register-card/RegisterCard.js';
import Calendar from '@c/calendar/Calendar.js';
import CatalogItem from '@c/catalog-item/CatalogItem.js';

class Cards {
  constructor($root) {
    this.$root = $root;
    this.init();
  }

  init() {
    this.$element = this.$root.find('.js-cards');
    if (this.$element[0]) {
      const $entryCardElement = this.$element.find('.js-cards__entry-card');
      const entryCard = new EntryCard($entryCardElement);
      const $roomCardElement = this.$element.find('.js-cards__room-card');
      const roomCard = new RoomCard($roomCardElement);
      const $registerCardElement = this.$element.find('.js-cards__register-card');
      const registerCard = new RegisterCard($registerCardElement);
      const $calendarElement = this.$element.find('.js-cards__date');
      this.calendar = new Calendar($calendarElement);
      const $catalogItemElement = this.$element.find('.js-cards__catalog-card_focused');
      const catalogItem = new CatalogItem($catalogItemElement);
      catalogItem.setFocus();
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
