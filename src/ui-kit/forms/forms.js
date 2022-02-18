import Slider from '@c/slider/Slider.js';

class Forms {
  constructor() {
    this.$expandIcon = $('.js-forms__expand-icon');
    this.$paginationAnchor = $('.js-pagination__anchor_for-forms');
    this.$formsSlider = $('.js-slider_for-forms');
    this.init();
  }

  init() {
    this.makeSlider();
    this.bindExpandIconClick();
    this.createPagination();
  }

  makeSlider() {
    if (this.$formsSlider.length > 0) {
      const slider = new Slider(this.$formsSlider);
      slider.init();
    }
  }

  bindExpandIconClick() {
    this.$expandIcon.on('click', this.handleExpandIconClassChange);
  }

  handleExpandIconClassChange() {
    $(this).toggleClass('forms__expand-icon_expanded');
    const $drop = $(this).closest('.js-forms__expandable').find('.js-drop');
    $drop.toggleClass('drop_active');
  }

  createPagination() {
    Forms.handleExpandableClassChange();
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
    $('.js-forms__expandable_expanded').find('.js-drop').addClass('drop_active');
  }
}

const forms = new Forms();
