class Logo {
  constructor() {
    this.$logo = $('.js-header').find('.js-logo');
  }

  bindEventListeners() {
    this.$logo.on('click', Logo.handleLogoAddLinkAttr);
  }

  static handleLogoAddLinkAttr() {
    $(location).attr('href', './main.html');
  }
}

const logo = new Logo();
