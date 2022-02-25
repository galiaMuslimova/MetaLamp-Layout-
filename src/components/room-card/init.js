import RoomCard from './RoomCard.js';

$('.js-room-card').each(function () {
  const calendarAnchor = '.js-calendar__dp_for-room-card';
  const roomCard = new RoomCard($(this), calendarAnchor);
});
