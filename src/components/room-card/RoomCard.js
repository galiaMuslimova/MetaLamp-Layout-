import FormDoubleDate from '../form-double-date/FormDoubleDate';
import FormGuests from '../form-guests/FormGuests';

class RoomCard {
  constructor($root) {
    this.$root = $root;
    this.init();
    this.initCalendar();
  }

  init() {
    this.$element = this.$root.find('.js-room-card');
    this.$date = this.$element.find('.js-room-card__date');
    this.dateForm = new FormDoubleDate(this.$date);
    this.$guests = this.$element.find('.js-room-card__guests');
    this.guestsForm = new FormGuests(this.$guests);
  }

  initCalendar() {
    const newDate = ['2019-08-19', '2019-08-23'];
    this.dateForm.setDate(newDate);
  }
}

export default RoomCard;
