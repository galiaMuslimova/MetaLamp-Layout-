class Drop {
  constructor(element) {
    this.element = element;
    const form = this.element.closest('form');
  }

  bindEventListeners() {
    const el = this;
    $(document).on('click', this.handleDropClassActiveRemove.bind(this, event));
  }

  handleDropClassActiveRemove(event) {
    if (this.element.find(event.target).length === 0) {
      this.element.removeClass('drop_active');
    }
  }
}

$('.js-drop').each(function () {
  const drop = new Drop($(this));
});
