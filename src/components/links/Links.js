import Logo from '../logo/Logo';

class Links {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-links');
    this.logo = new Logo(this.$element);
  }
}

export default Links;
