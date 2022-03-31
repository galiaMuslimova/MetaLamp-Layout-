import Header from '@c/header/Header';
import Links from '@c/links/Links';
import Main from '@/pages/main/Main.js';
import Catalog from '@/pages/catalog/Catalog.js';
import Room from '@/pages/room/Room.js';
import LogIn from '@/pages/log-in/LogIn';

class Base {
  constructor($element) {
    this.$element = $element;
    this.header = new Header(this.$element);
    this.linksClass = new Links(this.$element);
    this.main = new Main(this.$element);
    this.catalog = new Catalog(this.$element);
    this.room = new Room(this.$element);
    this.logIn = new LogIn(this.$element);
  }
}

export default Base;
