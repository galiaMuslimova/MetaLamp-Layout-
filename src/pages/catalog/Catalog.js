import CatalogList from '@c/catalog-list/CatalogList';
import Pagination from '@c/pagination/Pagination';
import Filter from '@c/filter/Filter';

class Catalog {
  constructor($root) {
    this.$root = $root;
    this.init();
    this.bindEventListeners();
  }

  init() {
    this.$element = this.$root.find('.js-catalog');
    this.$filterOpenButton = this.$element.find('.js-catalog__button');
    if (this.$element[0]) {
      this.filter = new Filter(this.$element);
      this.catalogList = new CatalogList(this.$element);
    }
  }

  bindEventListeners() {
    this.$filterOpenButton.on('click', this.handleFilterClassToggle.bind(this));
  }

  handleFilterClassToggle() {
    const $filter = this.$filterOpenButton.siblings('.js-catalog__filter');
    $filter.toggleClass('catalog__filter_active');
    this.$filterOpenButton.toggleClass('catalog__button_active');
  }
}

export default Catalog;
