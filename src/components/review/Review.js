import Like from '../like/Like';

class Review {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-review');
    this.like = new Like(this.$element);
  }
}

export default Review;
