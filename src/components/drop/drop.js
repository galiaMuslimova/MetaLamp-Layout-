$(() => {
  $('.js-drop').each(function () {
    const drop = this;
    const form = drop.closest('form');

    $(document).on('click', (event) => {
      if ($(form).find(event.target).length == 0) {
        $(drop).removeClass('drop_active');
      }
    });
  });
});
