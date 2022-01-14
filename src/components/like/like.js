$(() => {
  $('.js-like').on('change', function () {
    const isCheck = $(this).find('.js-like__input').is(':checked');
    const $likeInput = $(this).find('.js-like__count');
    let likeCount = Number($likeInput.val());
    if (isCheck) {
      $likeInput.val(likeCount += 1);
    } else {
      $likeInput.val(likeCount -= 1);
    }
  });
});
