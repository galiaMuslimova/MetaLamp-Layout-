import Burger from '../burger/Burger';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';

class Header {
  constructor($root) {
    this.$root = $root;
    this.$element = this.$root.find('.js-header');
    this.$logInButton = this.$element.find('.js-header__log-in-button');
    this.$signInButton = this.$element.find('.js-header__sign-in-button');
    this.registration = this.$element.find('.js-header__registration');
    this.logo = new Logo(this.$element);
    this.nav = new Nav(this.$element);
    this.burger = new Burger(this.$element, this.openMenu.bind(this));
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$logInButton.on('click', Header.handleHeaderAddLinkAttr.bind(this, 'log-in'));
    this.$signInButton.on('click', Header.handleHeaderAddLinkAttr.bind(this, 'sign-in'));
  }

  toggleRegistrationClass(className) {
    this.registration.toggleClass(className);
  }

  openMenu() {
    this.nav.toggleMobileClass();
    this.toggleRegistrationClass('header__registration_for-mobile');
  }

  static handleHeaderAddLinkAttr(name) {
    $(location).attr('href', `./${name}.html`);
  }

  changeStyle(index) {
    this.nav.changeStyle(index);
  }
}

export default Header;
