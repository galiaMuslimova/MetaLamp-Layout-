import Header from '@c/header/Header';
import Links from '@c/links/Links';

class Insertions {
  constructor($element) {
    this.$element = $element;
    this.firstHeader = new Header(this.$element);
    this.firstHeader = new Header(this.$element);
    this.firstLinks = new Links(this.$element);
    this.changeStyle();
  }

  changeStyle() {
    this.firstHeader.checkLink(0);
  }
}

export default Insertions;
