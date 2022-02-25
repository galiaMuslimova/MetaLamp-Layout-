class CatalogItem {
  constructor(element) {
    this.element = element;
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.element.on('click', CatalogItem.handleCatalogItemAddLinkAttr);
  }

  static handleCatalogItemAddLinkAttr(name) {
    $(location).attr('href', './room.html');
  }
}

export default CatalogItem;
