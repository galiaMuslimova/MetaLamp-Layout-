import FormDoubleDate from '../form-double-date/FormDoubleDate';
import FormGuests from '../form-guests/FormGuests';

class EntryCard {
  constructor($root) {
    this.$root = $root;
    this.init();
  }

  init() {
    this.$element = this.$root.find('.js-entry-card');
    this.$date = this.$element.find('.js-entry-card__date');
    this.dateForm = new FormDoubleDate(this.$date);
    this.$guests = this.$element.find('.js-entry-card__guests');
    this.guestsForm = new FormGuests(this.$guests);
  }
}

export default EntryCard;
