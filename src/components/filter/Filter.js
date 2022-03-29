import Form from '../form/Form.js';
import Slider from '../slider/Slider.js';
import ExpandableList from '../expandableList/ExpandableList.js';

class Filter {
  constructor(element) {
    this.element = element;
    this.dateForm = new Form({ root: this.element, type: 'calendar', place: 'filter' });
    this.guestsForm = new Form({ root: this.element, type: 'selector', place: 'filter' });
    this.slider = new Slider(this.element);
    this.placementForm = new Form({ root: this.element, type: 'selector', place: 'filter' });
    this.expandableList = new ExpandableList(this.element);
    this.initCalendar();
  }

  initCalendar() {
    const filterDate = ['2019-08-19', '2019-08-23'];
    this.dateForm.setDate(filterDate);
  }
}

export default Filter;
