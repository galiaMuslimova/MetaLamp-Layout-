class Logo {
  constructor($root) {
    this.$root = $root;
    this.init();
    this.bindEventListeners();
  }

  init() {
    this.$element = this.$root.find('.js-logo');
  }

  bindEventListeners() {
    this.$element.on('click', Logo.handleLogoAddLinkAttr);
  }

  static handleLogoAddLinkAttr() {
    $(location).attr('href', './main.html');
  }
}

export default Logo;
