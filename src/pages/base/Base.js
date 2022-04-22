import Header from '@c/header/Header';
import Links from '@c/links/Links';
import Main from '@/pages/main/Main.js';
import Catalog from '@/pages/catalog/Catalog.js';
import Room from '@/pages/room/Room.js';
import LogIn from '@/pages/log-in/LogIn';

class Base {
  constructor($element) {
    this.$element = $element;
    this.init();
  }

  init() {
    const header = new Header(this.$element);
    const linksClass = new Links(this.$element);
    const main = new Main(this.$element);
    const catalog = new Catalog(this.$element);
    const room = new Room(this.$element);
    const logIn = new LogIn(this.$element);
  }
}

export default Base;
