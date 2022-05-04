import Header from '@c/header/Header';

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
      this.changeStyle(0);
    }
  }

  changeStyle(index) {
    this.firstHeader.changeStyle(index);
  }
}

export default Insertions;
