class Like {
  constructor(element) {
    this.element = element;
    this.isCheck = this.element.find('.js-like__input').is(':checked');
    this.$likeInput = this.element.find('.js-like__count');
    this.likeCount = Number(this.$likeInput.val());
  }

  bindEventListeners() {
    this.element.on('change', this.handleLikeChange);
  }

  handleLikeChange() {
    if (this.isCheck) {
      this.$likeInput.val(this.likeCount += 1);
    } else {
      this.$likeInput.val(this.likeCount -= 1);
    }
  }
}

$('.js-like').each(function () {
  const like = new Like($(this));
});
