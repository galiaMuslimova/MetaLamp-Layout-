import Catalog from './Catalog.js';

$('.js-catalog').each(function () {
  const catalog = new Catalog($(this));
});
