import CatalogList from '@c/catalog-list/CatalogList.js';
import Pagination from '@c/pagination/Pagination.js';

class Catalog {
  constructor(element) {
    this.$element = element;
    this.$filterOpenButton = this.element.find('.js-catalog__button');
    this.catalogList = new CatalogList(this.$element);
    this.$paginationItems = this.element.find('.js-catalog-item');
    this.makePagination();
    this.bindEventHandlers();
  }

  makePagination() {
    let pagination;
    if (window.innerWidth < 600) {
      pagination = new Pagination(this.$element, this.$paginationItems, 4);
    } else if (window.innerWidth < 900) {
      pagination = new Pagination(this.$element, this.$paginationItems, 8);
    } else {
      pagination = new Pagination(this.$element, this.$paginationItems, 12);
    }
    pagination.init();
  }

  bindEventHandlers() {
    this.$filterOpenButton.on('click', this.handleFilterClassToggle.bind(this));
  }

  handleFilterClassToggle() {
    const $filter = this.$filterOpenButton.siblings('.js-catalog__filter');
    $filter.toggleClass('catalog__filter_active');
  }
}

export default Catalog;
