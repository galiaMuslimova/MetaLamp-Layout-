import Header from '@c/header/Header';
import Links from '@c/links/Links';

class Insertions {
  constructor($root) {
    this.$root = $root;
    this.$element = $root.find('.js-insertions');
    this.init();
  }

  init() {
    if (this.$element[0]) {
      const $firstHeaderElement = this.$element.find('.js-insertions__header_is-first');
      this.firstHeader = new Header($firstHeaderElement);
      const $secondHeaderElement = this.$element.find('.js-insertions__header_is-second');
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
