import Review from '@c/review/Review';
import RoomCard from '@c/room-card/RoomCard';
import RoomChart from '@c/room-chart/RoomChart';

const chartData = require('@/pages/room/room.json');

class Room {
  constructor($root) {
    this.$root = $root;
    this.init();
  }

  init() {
    this.$element = this.$root.find('.js-room');
    if (this.$element[0]) {
      this.review = new Review(this.$element);
      this.roomCard = new RoomCard(this.$element);
      this.chart = new RoomChart(this.$element, chartData);
    }
  }
}

export default Room;
