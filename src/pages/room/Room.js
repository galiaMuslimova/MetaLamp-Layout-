import Review from '@c/review/Review';
import RoomCard from '@c/room-card/RoomCard';
import RoomChart from '@c/room-chart/RoomChart';

const chartData = require('@/pages/room/room.json');

class Room {
  constructor($element) {
    this.$element = $element;
    this.root.find('.js-review').each(function () {
      const review = new Review($(this));
    });
    this.roomCard = new RoomCard(this.$element);
    this.chart = new RoomChart(this.$element, chartData);
  }
}

export default Room;
