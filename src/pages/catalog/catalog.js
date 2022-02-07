import Pagination from '@c/pagination/pagination.js'; 

$(() => {
  $('.js-catalog__button').on('click', function () {
    const $filter = $(this).siblings('.js-catalog__filter');
    $filter.toggleClass('catalog__filter_active');
  });

  const baseElement = $('.js-pagination__anchor_for-catalog');
  const paginationItems = $('.js-catalog-list .js-catalog-item');

  const pagination = new Pagination(baseElement, paginationItems);
  pagination.init();
});
