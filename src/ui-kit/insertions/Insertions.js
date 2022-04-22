import Header from '@c/header/Header';
import Links from '@c/links/Links';

class Insertions {
  constructor($root) {
    this.$root = $root;
    this.init();
  }

  init() {
    this.$element = this.$root.find('.js-insertions');
    if (this.$element[0]) {
      const $firstHeaderElement = this.$element.find('[data-header-type="first"]');
      this.firstHeader = new Header($firstHeaderElement);
      const $secondHeaderElement = this.$element.find('[data-header-type="second"]');
      this.secondHeader = new Header($secondHeaderElement);
      const $linksElement = this.$element.find('.js-insertions__links');
      this.firstLinks = new Links($linksElement);
      this.changeStyle(0);
    }
  }

  changeStyle(num) {
    this.firstHeader.changeStyle(num);
  }
}

export default Insertions;
