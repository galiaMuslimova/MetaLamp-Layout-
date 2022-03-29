import LogInCard from './LogInCard.js';

$('.js-log-in-card').each(function () {
  const calendarAnchor = '.js-calendar__dp_for-log-in-card';
  const logInCard = new LogInCard($(this), calendarAnchor);
});
