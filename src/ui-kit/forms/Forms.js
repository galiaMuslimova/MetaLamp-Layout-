import Form from '../../components/form/Form';
import Like from '../../components/like/Like';
import Rate from '../../components/rate/Rate';
import Slider from '../../components/slider/Slider.js';
import Pagination from '../../components/pagination/Pagination';
import ExpandableList from '../../components/expandable-list/ExpandableList';
import Review from '../../components/review/Review';

class Forms {
  constructor($root) {
    this.$root = $root;
    this.$element = $root.find('.js-forms');
    this.firstGuests = undefined;
    this.firstDate = undefined;
    this.secondDate = undefined;
    this.thirdDate = undefined;
    this.firstLike = undefined;
    this.secondLike = undefined;
    this.firstRate = undefined;
    this.secondRate = undefined;
    this.pagination = undefined;
    this.slider = undefined;
    this.firstPlacement = undefined;
    this.secondPlacement = undefined;
    this.secondGuests = undefined;
    this.firstExpandable = undefined;
    this.secondExpandable = undefined;
    this.review = undefined;
    this.init();
  }

  init() {
    if (this.$element[0]) {
      this.firstGuests = new Form({
        root: this.$element.find('.js-forms__guests_is-first'),
        type: 'selector',
      });
      this.firstDate = new Form({
        root: this.$element.find('.js-forms__date_is-first'),
        type: 'calendar',
        dateType: 'single',
        id: 'forms-single',
      });
      this.secondDate = new Form({
        root: this.$element.find('.js-forms__date_is-second'),
        type: 'calendar',
        dateType: 'double',
        id: 'forms-double',
      });
      this.thirdDate = new Form({
        root: this.$element.find('.js-forms__date_is-third'),
        type: 'calendar',
        dateType: 'pair',
        id: 'forms-pair',
      });
      this.firstLike = new Like(this.$element.find('.js-forms_like-item_is-first'));
      this.secondLike = new Like(this.$element.find('.js-forms_like-item_is-second'));
      this.firstRate = new Rate(this.$element.find('.js-forms_rate-item_is-first'));
      this.secondRate = new Rate(this.$element.find('.js-forms_rate-item_is-second'));
      this.slider = new Slider(this.$element);
      this.pagination = new Pagination(this.$element);
      this.pagination.createPaginationSample();
      this.firstPlacement = new Form({
        root: this.$element.find('.js-forms__placement_is-first'),
        type: 'selector',
      });
      this.secondPlacement = new Form({
        root: this.$element.find('.js-forms__placement_is-second'),
        type: 'selector',
      });
      this.secondPlacement.input.handleDropOpen();
      this.secondGuests = new Form({
        root: this.$element.find('.js-forms__guests_is-second'),
        type: 'selector',
      });
      this.secondGuests.input.handleDropOpen();
      this.thirdGuests = new Form({
        root: this.$element.find('.js-forms__guests_is-third'),
        type: 'selector',
      });
      this.thirdGuests.input.handleDropOpen();
      this.firstExpandable = new ExpandableList(this.$element.find('.js-forms__expandable_is-first'));
      this.secondExpandable = new ExpandableList(this.$element.find('.js-forms__expandable_expanded'));
      this.secondExpandable.drop.toggleActiveClass();
      this.review = new Review(this.$element.find('.js-forms__review'));
    }
  }
}

export default Forms;
