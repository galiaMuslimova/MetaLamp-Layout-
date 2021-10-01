export function count (el) {  
  let id = el.closest('.count')[0].id;
  let inputNum = el.siblings('.count__num');
  let i = inputNum.val();

  if (el.hasClass('plus')) {+
    inputNum.val(++i);
  };
  if (el.hasClass('minus')) {
    if (i > 0) {
      inputNum.val(--i);      
    }        
  }
  sessionStorage.setItem(id, i)
}
