import Pagination from '@c/pagination/Pagination.js';

class Catalog {
  constructor() {
    this.$filterOpenBtn = $('.js-catalog__button');
    this.baseElement = $('.js-pagination__anchor_for-catalog');
    this.paginationItems = $('.js-catalog-list .js-catalog-item');
    this.makePagination();
    this.bindEventHandlers();
  }

  makePagination() {
    let pagination;
    if (window.innerWidth < 600) {
      pagination = new Pagination(this.baseElement, this.paginationItems, 4);
    } else if (window.innerWidth < 900) {
      pagination = new Pagination(this.baseElement, this.paginationItems, 8);
    } else {
      pagination = new Pagination(this.baseElement, this.paginationItems);
    }
    pagination.init();
  }

  bindEventHandlers() {
    this.$filterOpenBtn.on('click', this.handleFilterClassToggle.bind(this));
  }

  handleFilterClassToggle() {
    const $filter = this.$filterOpenBtn.siblings('.js-catalog__filter');
    $filter.toggleClass('catalog__filter_active');
  }
}

const catalog = new Catalog();
