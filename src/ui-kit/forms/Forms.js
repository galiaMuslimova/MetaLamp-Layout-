import Slider from '../../components/slider/Slider.js';
import Pagination from '../../components/pagination/Pagination';
import Form from '../../components/form/Form';
import ExpandableList from '../../components/expandable-list/ExpandableList';

class Forms {
  constructor($root) {
    this.$root = $root;
    this.$element = $root.find('.js-forms');
    this.pagination = undefined;
    this.slider = undefined;
    this.firstPlacement = undefined;
    this.secondPlacement = undefined;
    this.firstGuests = undefined;
    this.secondGuests = undefined;
    this.firstExpandableList = undefined;
    this.secondExpandableList = undefined;
    this.init();
  }

  init() {
    if (this.$element[0]) {
      this.pagination = new Pagination(this.$element);
      this.pagination.createPaginationSample();
      this.slider = new Slider(this.$element);
      this.firstPlacement = new Form({ root: this.$element, type: 'selector', place: 'filter' });
      this.secondPlacement = new Form({ root: this.$element, type: 'selector', place: 'filter' });
      this.firstGuests = new Form({ root: this.$element, type: 'selector', place: 'filter' });
      this.secondGuests = new Form({ root: this.$element, type: 'selector', place: 'filter' });
      this.firstExpandableList = new ExpandableList(this.$element);
      this.secondExpandableList = new ExpandableList(this.$element);
    }
  }
}

export default Forms;
