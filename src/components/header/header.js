class Header {
  constructor() {
    this.$loginBtn = $('.js-header__login-btn');
    this.signinBtn = $('.js-header__signin-btn');
  }

  bindEventListeners() {
    this.$loginBtn.on('click', this.handleHeaderAddLinkAttr.bind(this, 'login'));
    this.signinBtn.on('click', Header.handleHeaderAddLinkAttr.bind(this, 'signin'));
  }

  static handleHeaderAddLinkAttr(name) {
    $(location).attr('href', `./${name}.html`);
  }
}

const header = new Header();
