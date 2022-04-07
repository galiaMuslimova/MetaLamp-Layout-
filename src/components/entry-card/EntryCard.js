import FormDoubleDate from '../form-double-date/FormDoubleDate';
import FormGuests from '../form-guests/FormGuests';

class EntryCard {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-entry-card');
    this.$entryCardButton = this.$element.find('.js-entry-card__button');
    this.dateForm = new FormDoubleDate(this.$element.find('.js-entry-card__date'), 'entry-card');
    this.guestsForm = new FormGuests(this.$element.find('.js-entry-card__guests'));
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$entryCardButton.on('click', EntryCard.handleEntryCardAddLinkAttr);
  }

  static handleEntryCardAddLinkAttr() {
    $(location).attr('href', './catalog.html');
  }
}

export default EntryCard;
