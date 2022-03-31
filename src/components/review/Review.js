import Like from '../like/Like';

class Review {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-review');
    this.init();
  }

  init() {
    this.$element.each(function () {
      const like = new Like($(this));
    });
  }
}

export default Review;
