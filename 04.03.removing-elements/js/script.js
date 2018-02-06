$(function () {

  // You can remove an existing element simply with remove().
  // For instance, the first main item:
  $("li:first").remove();

  // If you want to reuse/re-display the element later, you should
  // use detach(). This also keeps all attached event handlers alive.
  // First, this removes the element from the DOM:
  var detached = $("p:first").detach();
  // Next, this will re-attach the element to the DOM (at another position):
  $("#list").after(detached);

  // To remove all elements *inside* a given elements, you can use empty().
  // The element itself remains in the DOM, so in this case the <form>.
  $("form").empty();

});
