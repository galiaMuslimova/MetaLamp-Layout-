class Logo {
  constructor(root) {
    this.root = root;
    this.element = this.root.find('.js-logo');
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.element.on('click', Logo.handleLogoAddLinkAttr);
  }

  static handleLogoAddLinkAttr() {
    $(location).attr('href', './main.html');
  }
}

export default Logo;
