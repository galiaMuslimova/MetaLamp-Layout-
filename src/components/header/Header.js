class Header {
  constructor(element) {
    this.element = element;
    this.$logInButton = this.element.find('.js-header__log-in-button');
    this.$signInButton = this.element.find('.js-header__sign-in-button');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$logInButton.on('click', Header.handleHeaderAddLinkAttr.bind(this, 'log-in'));
    this.$signInButton.on('click', Header.handleHeaderAddLinkAttr.bind(this, 'sign-in'));
  }

  static handleHeaderAddLinkAttr(name) {
    $(location).attr('href', `./${name}.html`);
  }
}

export default Header;
