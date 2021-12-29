$(() => {
  $('.js-catalog__button').on('click', function () {
    const $filter = $(this).siblings('.js-catalog__filter');
    $filter.toggleClass('active');
  });
  $('.js-pagination_catalog').pagination();
});
