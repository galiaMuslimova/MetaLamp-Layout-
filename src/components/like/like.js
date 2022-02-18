class Like {
  constructor(element) {
    this.element = element;    
    this.$likeInput = this.element.find('.js-like__count');
    this.likeCount = Number(this.$likeInput.val());
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.element.on('change', this.handleLikeChange.bind(this));
  }

  handleLikeChange() {
    const isCheck = this.element.find('.js-like__input').is(':checked');
    if (isCheck) {
      this.$likeInput.val(this.likeCount += 1);
    } else {
      this.$likeInput.val(this.likeCount -= 1);
    }
  }
}

$('.js-like').each(function () {
  const like = new Like($(this));
});
