class Header {
  constructor(element) {
    this.element = element;
    this.$logInBtn = this.element.find('.js-header__log-in-btn');
    this.$signInBtn = this.element.find('.js-header__sign-in-btn');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$logInBtn.on('click', Header.handleHeaderAddLinkAttr.bind(this, 'log-in'));
    this.$signInBtn.on('click', Header.handleHeaderAddLinkAttr.bind(this, 'sign-in'));
  }

  static handleHeaderAddLinkAttr(name) {
    $(location).attr('href', `./${name}.html`);
  }
}

export default Header;
