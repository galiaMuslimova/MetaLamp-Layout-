export default class Pagination {
  constructor(element, items, limitPerPage = 12) {
    this.element = element;
    this.items = items;
    this.limitPerPage = limitPerPage;
    this.currentPage = 1;
    this.numberOfItems = this.items.length;
    this.totalPages = Math.ceil(this.numberOfItems / this.limitPerPage);
  }

  init() {
    const el = this;
    this.createPagination();
    this.showPage();

    $(document).on('click', '.js-pagination__item_current', function () {
      el.currentPage = Number($(this).text());
      el.showPage();
    });

    $('.js-pagination__item_next').on('click', () => {
      el.currentPage += 1;
      el.showPage();
    });

    $('.js-pagination__item_previous').on('click', () => {
      el.currentPage -= 1;
      el.showPage();
    });
  }

  static createRange(start, end) {
    const arrLength = end - start + 1;
    return Array.from({ length: arrLength }, (x, i) => i + start);
  }

  getPageList() {
    let start = [1];
    let middle = [0];
    let end = [this.totalPages];
    if (this.currentPage <= 3) {
      start = [1, 2, 3];
    } else if (this.currentPage >= this.totalPages - 1) {
      end = this.constructor.createRange(this.totalPages - 2, this.totalPages);
    } else if (this.currentPage >= this.totalPages - 2) {
      end = this.constructor.createRange(this.totalPages - 3, this.totalPages);
    } else {
      const intro = this.constructor.createRange(this.currentPage - 1, this.currentPage + 1);
      middle = [0].concat(intro, 0);
    }
    return start.concat(middle, end);
  }

  showPage() {
    const start = (this.currentPage - 1) * this.limitPerPage;
    const end = this.currentPage * this.limitPerPage;
    if (this.currentPage < 1 || this.currentPage > this.totalPages) return false;
    this.items.hide().slice(start, end).show();
    this.element.find('.pagination__item').slice(1, -1).remove();

    this.getPageList().forEach((item) => {
      $('<div>').addClass('pagination__item').addClass(item ? 'pagination__item_current js-pagination__item_current' : 'pagination__item_dots')
        .toggleClass('pagination__item_active', item === this.currentPage)
        .text(item || '...')
        .insertBefore('.pagination__item_next');
    });

    $('.js-pagination__item_previous').toggleClass('pagination__item_disable', this.currentPage === 1);
    $('.js-pagination__item_next').toggleClass('pagination__item_disable', this.currentPage === this.totalPages);
    return true;
  }

  createPagination() {
    $(this.element).append(
      $('<div>').addClass('pagination__item').addClass('pagination__item_previous js-pagination__item_previous').append($('<span>').addClass('pagination__icon').append($('<span>').addClass('icon-arrow_back'))),
      $('<div>').addClass('pagination__item').addClass('pagination__item_next js-pagination__item_next').append($('<span>').addClass('pagination__icon').append($('<span>').addClass('icon-arrow'))),
    );
  }
}
