import Header from '@c/header/Header';
import Main from '@/pages/main/Main.js';
import Catalog from '@/pages/catalog/Catalog.js';
import Room from '@/pages/room/Room.js';
import Register from '@/pages/register/Register';

class Base {
  constructor($element) {
    this.$element = $element;
    this.init();
  }

  init() {
    const header = new Header(this.$element);
    const main = new Main(this.$element);
    const catalog = new Catalog(this.$element);
    const room = new Room(this.$element);
    const register = new Register(this.$element);
  }
}

export default Base;
