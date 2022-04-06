import FormDoubleDate from '../form-double-date/FormDoubleDate';
import FormSelector from '../form-selector/FormSelector';

class RoomCard {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-room-card');
    this.dateForm = new FormDoubleDate(this.$element.find('.js-room-card__guests'), 'room-card');
    this.guestsForm = new FormSelector(this.$element.find('.js-room-card__guests'));
    this.initCalendar();
  }

  initCalendar() {
    const newDate = ['2019-08-19', '2019-08-23'];
    this.dateForm.setDate(newDate);
  }
}

export default RoomCard;
