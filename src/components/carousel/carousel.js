$(document).ready(function() {
  let n = 888;
  function requireAll(requireContext) { 
    return requireContext.keys().filter(el => el.includes(n)).map(requireContext)
  };
  let images = requireAll(require.context("@c/catalog-list/img/", true, /\.(jpg|png|jpeg)$/));
  console.log(images);
})
