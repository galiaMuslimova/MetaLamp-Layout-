import createPagination from '@c/pagination/pagination.js'; 

$(() => {
  $('.js-catalog__button').on('click', function () {
    const $filter = $(this).siblings('.js-catalog__filter');
    $filter.toggleClass('active');
  });

  const baseElement = $('.js-pagination__anchor_catalog');
  const paginationItems = $('.js-catalog-list .js-catalog-item')

  createPagination(baseElement, paginationItems)
});
