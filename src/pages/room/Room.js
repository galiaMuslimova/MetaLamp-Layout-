import Review from '@c/review/Review';
import RoomCard from '@c/room-card/RoomCard';
import RoomChart from '@c/room-chart/RoomChart';

const chartData = require('@/pages/room/room.json');

class Room {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-room');
    this.init();
  }

  init() {
    if (this.$element[0]) {
      this.review = new Review(this.$element);
      this.roomCard = new RoomCard(this.$element);
      this.chart = new RoomChart(this.$element, chartData);
    }
  }
}

export default Room;
