import Pagination from '@c/pagination/pagination.js';

$(() => {
  $('.js-catalog__button').on('click', function () {
    const $filter = $(this).siblings('.js-catalog__filter');
    $filter.toggleClass('catalog__filter_active');
  });

  const baseElement = $('.js-pagination__anchor_for-catalog');
  const paginationItems = $('.js-catalog-list .js-catalog-item');

  if (window.innerWidth < 600) {
    const pagination = new Pagination(baseElement, paginationItems, 4);
    pagination.init();
  } else if (window.innerWidth < 900) {
    const pagination = new Pagination(baseElement, paginationItems, 8);
    pagination.init();
  } else {
    const pagination = new Pagination(baseElement, paginationItems);
    pagination.init();
  }
});
