import CatalogItem from '@c/catalog-item/CatalogItem';

class CatalogList {
  constructor($root) {
    this.$root = $root;
    this.init();
  }

  init() {
    this.$element = this.$root.find('.js-catalog-list');
    const $catalogListItems = this.$element.find('.js-catalog-list__item');
    $catalogListItems.each(function () {
      const catalogItem = new CatalogItem($(this));
    });
  }
}

export default CatalogList;
