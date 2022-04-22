import FormDoubleDate from '../form-double-date/FormDoubleDate';
import FormGuests from '../form-guests/FormGuests';

class EntryCard {
  constructor($root) {
    this.$root = $root;
    this.init();
    this.bindEventListeners();
  }

  init() {
    this.$element = this.$root.find('.js-entry-card');
    this.$entryCardButton = this.$element.find('.js-entry-card__button');
    this.$date = this.$element.find('.js-entry-card__date');
    this.dateForm = new FormDoubleDate(this.$date);
    this.$guests = this.$element.find('.js-entry-card__guests');
    this.guestsForm = new FormGuests(this.$guests);
  }

  bindEventListeners() {
    this.$entryCardButton.on('click', EntryCard.handleEntryCardAddLinkAttr);
  }

  static handleEntryCardAddLinkAttr() {
    $(location).attr('href', './catalog.html');
  }
}

export default EntryCard;
