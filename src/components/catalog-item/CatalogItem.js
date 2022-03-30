import Rate from '../rate/Rate';
import Carousel from '../carousel/Carousel';

class CatalogItem {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-catalog-item');
    this.rate = new Rate(this.$element);
    this.carousel = new Carousel(this.$element);
  }
}

export default CatalogItem;
