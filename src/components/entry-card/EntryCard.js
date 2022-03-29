import Form from '../form/Form';

class EntryCard {
  constructor(root) {
    this.root = root;
    this.element = this.root.find('.js-entry-card');
    this.$entryCardButton = this.element.find('.js-entry-card__button');
    this.dateForm = new Form({ root: this.element, type: 'calendar', place: 'entry-card' });
    this.guestsForm = new Form({ root: this.element, type: 'selector', place: 'entry-card' });
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
