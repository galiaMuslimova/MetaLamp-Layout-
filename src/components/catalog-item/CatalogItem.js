class CatalogItem {
  constructor() {
    this.$catalogItem = $('.js-catalog-item__content');
  }

  bindEventListeners() {
    this.$catalogItem.on('click', CatalogItem.handleCatalogItemAddLinkAttr);
  }

  static handleCatalogItemAddLinkAttr(name) {
    $(location).attr('href', './room.html');
  }
}

const catalogItem = new CatalogItem();
