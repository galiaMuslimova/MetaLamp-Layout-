import Burger from '../burger/Burger';
import Nav from '../nav/Nav';

class Header {
  constructor($root) {
    this.$root = $root;
    this.init();
  }

  init() {
    this.$element = this.$root.find('.js-header');
    this.$registerButton = this.$element.find('.js-header__register-button');
    this.$signInButton = this.$element.find('.js-header__sign-in-button');
    this.$registration = this.$element.find('.js-header__registration');
    this.nav = new Nav(this.$element);
    this.burger = new Burger(this.$element, this.openMenu.bind(this));
  }

  toggleRegistrationClass(className) {
    this.$registration.toggleClass(className);
  }

  openMenu() {
    this.nav.toggleMobileClass();
    this.toggleRegistrationClass('header__registration_for-mobile');
  }

  changeStyle(index) {
    this.nav.changeStyle(index);
  }
}

export default Header;
