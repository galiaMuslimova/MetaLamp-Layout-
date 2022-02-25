class Header {
  constructor(element) {
    this.element = element;
    this.$loginBtn = this.element.find('.js-header__login-btn');
    this.signinBtn = this.element.find('.js-header__signin-btn');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$loginBtn.on('click', Header.handleHeaderAddLinkAttr.bind(this, 'login'));
    this.signinBtn.on('click', Header.handleHeaderAddLinkAttr.bind(this, 'signin'));
  }

  static handleHeaderAddLinkAttr(name) {
    $(location).attr('href', `./${name}.html`);
  }
}

export default Header;
