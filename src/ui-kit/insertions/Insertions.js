import Header from '@c/header/Header';
import Links from '@c/links/Links';

class Insertions {
  constructor($root) {
    this.$root = $root;
    this.$element = $root.find('.js-insertions');
    this.firstHeader = undefined;
    this.secondHeader = undefined;
    this.firstLinks = undefined;
    this.init();
  }

  init() {
    if (this.$element[0]) {
      this.firstHeader = new Header(this.$element.find('.js-insertions__header_is-first'));
      this.secondHeader = new Header(this.$element.find('.js-insertions__header_is-second'));
      this.firstLinks = new Links(this.$element.find('.js-insertions__links'));
      this.changeStyle(0);
    }
  }

  changeStyle(num) {
    this.firstHeader.changeStyle(num);
  }
}

export default Insertions;
