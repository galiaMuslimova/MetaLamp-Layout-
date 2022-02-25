import LoginCard from './LoginCard.js';

$('.js-login-card').each(function () {
  const calendarAnchor = '.js-calendar__dp_for-login-card';
  const loginCard = new LoginCard($(this), calendarAnchor);
});
