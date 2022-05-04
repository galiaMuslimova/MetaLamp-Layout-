import CatalogItem from '@c/catalog-item/CatalogItem';
import Pagination from '@c/pagination/Pagination';

class CatalogList {
  constructor($root) {
    this.$root = $root;
    this.init();
  }

  init() {
    this.$element = this.$root.find('.js-catalog-list');
    this.$catalogListItems = this.$element.find('.js-catalog-list__item');
    this.$catalogListItems.each(function () {
      const catalogItem = new CatalogItem($(this));
    });
    this.makePagination();
  }

  makePagination() {
    let pagination;
    if (window.innerWidth < 600) {
      pagination = new Pagination(this.$element, this.$catalogListItems, 4);
    } else if (window.innerWidth < 900) {
      pagination = new Pagination(this.$element, this.$catalogListItems, 8);
    } else {
      pagination = new Pagination(this.$element, this.$catalogListItems, 12);
    }
    pagination.activatePagination();
  }
}

export default CatalogList;
