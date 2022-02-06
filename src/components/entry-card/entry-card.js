import Calendar from '@c/calendar/calendar.js'; 

$(() => {
  const $entryCardCalendarPlace = '.calendar__dp_for-entry-card';
  const entryCardCalendar = new Calendar($entryCardCalendarPlace);
  
  const $entryCardButton = $('.js-entry-card').find('.js-entry-card__button');
  $entryCardButton.on('click', () => {
    $(location).attr('href', './catalog.html');
  });
});
