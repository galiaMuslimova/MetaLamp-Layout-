class Logo {
  constructor(element) {
    this.element = element;
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
