import Form from '../form/Form.js';
import Slider from '../slider/Slider.js';
import ExpandableList from '../expandable-list/ExpandableList.js';

class Filter {
  constructor($root) {
    this.$root = $root;
    this.$element = $root.find('.js-filter');
    this.dateForm = new Form({ root: this.$element.find('.js-filter__date'), type: 'calendar', place: 'filter' });
    this.guestsForm = new Form({ root: this.$element.find('.js-filter__guests'), type: 'selector', place: 'filter' });
    this.slider = new Slider(this.$element);
    this.placementForm = new Form({ root: this.$element.find('.js-filter__placement'), type: 'selector', place: 'filter' });
    this.expandableList = new ExpandableList(this.$element.find('.js-filter__expandable-list'));
    this.initCalendar();
  }

  initCalendar() {
    const filterDate = ['2019-08-19', '2019-08-23'];
    this.dateForm.setDate(filterDate);
  }
}

export default Filter;
