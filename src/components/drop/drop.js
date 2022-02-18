class Drop {
  constructor(element) {
    this.element = element;    
    this.bindEventListeners();
  }

  bindEventListeners() {
    $(document).on('click', this.handleDropClassActiveRemove);
  }

  handleDropClassActiveRemove(event) {
    const $dropArr = $('.js-drop');    
    $dropArr.each(function () {
      this.$form = $(this).closest('form');
      if (this.$form.find(event.target).length === 0) {
        $(this).removeClass('drop_active');
      }
    });
  }
}

$('.js-drop').each(function () {
  const drop = new Drop($(this));
});
