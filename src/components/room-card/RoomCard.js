import Form from '../form/Form';

class RoomCard {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-room-card');
    this.dateForm = new Form({ root: this.$element, type: 'calendar', place: 'room-card' });
    this.guestsForm = new Form({ root: this.$element, type: 'selector', place: 'room-card' });
    this.initCalendar();
  }

  initCalendar() {
    const newDate = ['2019-08-19', '2019-08-23'];
    this.dateForm.setDate(newDate);
  }
}

export default RoomCard;
