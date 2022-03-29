import CatalogItem from '@c/catalog-item/CatalogItem';

class CatalogList {
  constructor(root) {
    this.$root = root;
    this.$element = this.$root.find('.js-catalog-list');
    this.items = [];
  }

  init() {
    const { $element } = this;
    this.$element.find('.catalog-list__item').each(() => {
      const catalogItem = new CatalogItem($element);
      $element.items.push(catalogItem);
    });
  }
}

export default CatalogList;
