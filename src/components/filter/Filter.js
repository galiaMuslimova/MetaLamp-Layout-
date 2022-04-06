import FormPairDate from '../form-pair-date/FormPairDate.js';
import FormSelector from '../form-selector/FormSelector.js';
import Slider from '../slider/Slider.js';
import ExpandableList from '../expandable-list/ExpandableList.js';

class Filter {
  constructor($root) {
    this.$root = $root;
    this.$element = $root.find('.js-filter');
    this.dateForm = new FormPairDate(this.$element.find('.js-filter__date'));
    this.guestsForm = new FormSelector(this.$element.find('.js-filter__guests'));
    this.slider = new Slider(this.$element);
    this.placementForm = new FormSelector(this.$element.find('.js-filter__placement'));
    this.expandableList = new ExpandableList(this.$element.find('.js-filter__expandable-list'));
    this.initCalendar();
  }

  initCalendar() {
    const filterDate = ['2019-08-19', '2019-08-23'];
    this.dateForm.setDate(filterDate);
  }
}

export default Filter;
