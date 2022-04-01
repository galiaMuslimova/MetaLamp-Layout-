class Like {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-like');
    this.$likeCount = this.$element.find('.js-like__count');
    this.$likeInput = this.$element.find('.js-like__input');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$element.on('click', this.handleLikeChange.bind(this));
  }

  handleLikeChange(event) {
    const likeNum = Number(this.$likeCount.text());
    const isChecked = this.$likeInput.prop('checked');
    if (isChecked) {
      this.$likeCount.html(likeNum + 1);
    } else {
      this.$likeCount.html(likeNum - 1);
    }
  }
}

export default Like;
