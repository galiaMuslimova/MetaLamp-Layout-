import CatalogItem from './CatalogItem';

$('.js-catalog-item__content').each(function () {
  const catalogItem = new CatalogItem($(this));
});
