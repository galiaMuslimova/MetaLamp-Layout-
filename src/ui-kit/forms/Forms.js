import Slider from '@c/slider/Slider.js';

class Forms {
  constructor(element) {
    this.element = element;
    this.$expandIcon = this.element.find('.js-forms__expand-icon');
    this.$paginationAnchor = this.element.find('.js-pagination__anchor_for-forms');
    this.$formsSlider = this.element.find('.js-slider_for-forms');
    this.init();
  }

  init() {
    this.makeSlider();
    this.createPagination();
    Forms.handleExpandableClassChange();
  }

  makeSlider() {
    const slider = new Slider(this.$formsSlider);
    slider.init();
  }

  createPagination() {
    this.$paginationAnchor.append(
      $('<div>').addClass('pagination__item').addClass('pagination__item_active').text('1'),
      $('<div>').addClass('pagination__item').text('2'),
      $('<div>').addClass('pagination__item').text('3'),
      $('<div>').addClass('pagination__item').addClass('pagination__item_dots').text('...'),
      $('<div>').addClass('pagination__item').text('15'),
      $('<div>').addClass('pagination__item pagination__item_next').append($('<span>').addClass('pagination__icon').append($('<span>').addClass('icon-arrow'))),
    );
  }

  static handleExpandableClassChange() {
    $('.js-forms__selector_expanded').find('.js-drop').addClass('drop_active');
    $('.js-forms__expandable_expanded').find('.js-expandable-list__check-list').addClass('expandable-list__check-list_active');
  }
}

export default Forms;
