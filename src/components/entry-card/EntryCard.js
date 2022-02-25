import Calendar from '@c/calendar/Calendar.js';

class EntryCard {
  constructor(element, anchor) {
    this.element = element;
    this.entryCardCalendarPlace = anchor;
    this.$entryCardButton = this.element.find('.js-entry-card__button');
    this.makeCalendar();
    this.bindEventListeners();
  }

  makeCalendar() {
    const entryCardCalendar = new Calendar(this.entryCardCalendarPlace);
    entryCardCalendar.init();
  }

  bindEventListeners() {
    this.$entryCardButton.on('click', EntryCard.handleEntryCardAddLinkAttr);
  }

  static handleEntryCardAddLinkAttr() {
    $(location).attr('href', './catalog.html');
  }
}

export default EntryCard;
