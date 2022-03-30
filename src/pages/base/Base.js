import Header from '@c/header/Header';
import Links from '@c/links/Links';

class Base {
  constructor($element) {
    this.$element = $element;
    this.header = new Header(this.$element);
    this.linksClass = new Links(this.$element);
  }
}

export default Base;
