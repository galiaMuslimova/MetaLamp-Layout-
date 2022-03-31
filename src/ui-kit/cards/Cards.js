import EntryCard from '@c/entry-card/EntryCard.js';
import RoomCard from '@c/room-card/RoomCard.js';
import LogInCard from '@c/log-in-card/LogInCard.js';
import Form from '@c/form/Form.js';

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
      this.entryCard = new EntryCard(this.$element);
      this.roomCard = new RoomCard(this.$element);
      this.logInCard = new LogInCard(this.$element);
      this.dateForm = new Form({
        root: this.$element.find('.js-cards__date '),
        type: 'calendar',
        place: 'cards',
      });
      this.initCalendar();
    }
  }

  initCalendar() {
    const newDate = ['2019-08-19', '2019-08-23'];
    const cardFocusDate = new Date(2019, 7, 8);
    this.dateForm.setDate(newDate);
    this.dateForm.setFocusDate(cardFocusDate);
  }
}

export default Cards;
