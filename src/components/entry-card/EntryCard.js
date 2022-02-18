import Calendar from '@c/calendar/Calendar.js';

class EntryCard {
  constructor() {
    this.entryCardCalendarPlace = '.calendar__dp_for-entry-card';
    this.$entryCardButton = $('.js-entry-card').find('.js-entry-card__button');
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

const entryCard = new EntryCard();
