import makeCalendar from '@c/calendar/calendar.js'; 

$(() => {
  const $entryCardCalendarPlace = '.calendar__dp_entry';
  const entryCardCalendar = makeCalendar($entryCardCalendarPlace);
  
  const $entryCardButton = $('.js-entry-card').find('.js-entry-card__button');
  $entryCardButton.on('click', () => {
    $(location).attr('href', './catalog.html');
  });
});
