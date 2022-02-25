import EntryCard from './EntryCard.js';

$('.js-entry-card').each(function () {
  const calendarAnchor = '.js-calendar__dp_for-entry-card';
  const entryCard = new EntryCard($(this), calendarAnchor);
});
