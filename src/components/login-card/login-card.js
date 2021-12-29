import makeCalendar from '@c/calendar/calendar.js';

$(() => {
  const $inputRow = $('.js-datepicker_login').closest('form').find('.js-input-row');
  $inputRow.on('click', function () {
    const $drop = $(this).siblings('.js-drop');
    $drop.toggleClass('active');
  });
  makeCalendar('.js-datepicker_login');
});
