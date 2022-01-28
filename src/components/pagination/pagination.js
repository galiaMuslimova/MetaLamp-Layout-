function getPageList(totalPages, page) {
  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }
  if (page <= 2) {
    return range(1, 3).concat(0, totalPages);
  }
  if (page <= 3) {
    return range(1, 4).concat(0, range(totalPages, totalPages));
  }
  if (page >= totalPages - 1) {
    return range(1, 1).concat(0, range(totalPages - 2, totalPages));
  }
  if (page >= totalPages - 2) {
    return range(1, 1).concat(0, range(totalPages - 3, totalPages));
  }
  return range(1, 1).concat(0, range(page - 1, page + 1), 0, totalPages);
}

function showPage(pageNum, el, items) {
  const numberOfItems = items.length;
  const limitPerPage = 12;
  const totalPages = Math.ceil(numberOfItems / limitPerPage);

  if (pageNum < 1 || pageNum > totalPages) return false;

  const currentPage = pageNum;

  items.hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

  el.find('.pagination__item').slice(1, -1).remove();

  getPageList(totalPages, currentPage).forEach((item) => {
    $('<div>').addClass('pagination__item').addClass(item ? 'pagination__item_current js-pagination__item_current' : 'pagination__item_dots')
      .toggleClass('pagination__item_active', item === currentPage)
      .text(item || '...')
      .insertBefore('.pagination__item_next');
  });

  $('.js-pagination__item_previous').toggleClass('pagination__item_disable', currentPage === 1);
  $('.js-pagination__item_next').toggleClass('pagination__item_disable', currentPage === totalPages);
  return true;
}

function createPagination(el, items) {
  let currentPage = 1;

  $(el).append(
    $('<div>').addClass('pagination__item').addClass('pagination__item_previous js-pagination__item_previous').append($('<span>').addClass('pagination__icon').append($('<span>').addClass('icon-arrow_back'))),
    $('<div>').addClass('pagination__item').addClass('pagination__item_next js-pagination__item_next').append($('<span>').addClass('pagination__icon').append($('<span>').addClass('icon-arrow')))
  );

  showPage(currentPage, el, items);

  $(document).on('click', '.js-pagination__item_current', function () {
    currentPage = Number($(this).text());
    return showPage(currentPage, el, items);
  });

  $('.js-pagination__item_next').on('click', () => { 
    currentPage += 1;
    showPage(currentPage, el, items); 
  });

  $('.js-pagination__item_previous').on('click', () => { 
    currentPage -= 1
    showPage(currentPage, el, items); 
  });
}

export default createPagination;
