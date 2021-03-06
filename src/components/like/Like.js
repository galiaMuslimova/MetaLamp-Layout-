class Like {
  constructor($root) {
    this.$root = $root;
    this.init();
    this.bindEventListeners();
  }

  init() {
    this.$element = this.$root.find('.js-like');
    this.$likeCount = this.$element.find('.js-like__count');
    this.$likeIcon = this.$element.find('.js-like__icon');
  }

  bindEventListeners() {
    this.$element.on('click', this.handleLikeChange.bind(this));
  }

  handleLikeChange() {
    this.$likeIcon.toggleClass('like__icon_active');
    this.$likeCount.toggleClass('like__count_active');
    const likeNum = Number(this.$likeCount.text());
    const isActive = this.$likeIcon.hasClass('like__icon_active');
    if (isActive) {
      this.$likeCount.html(likeNum + 1);
    } else {
      this.$likeCount.html(likeNum - 1);
    }
  }
}

export default Like;
