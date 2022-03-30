import CatalogItem from '@c/catalog-item/CatalogItem';

class CatalogList {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-catalog-list');
    this.init();
  }

  init() {
    this.$element.find('.js-catalog-list__item').each(function () {
      const catalogItem = new CatalogItem($(this));
    });
  }
}

export default CatalogList;
