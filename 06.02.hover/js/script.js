$(function () {

  // Hover handlers are defined the same way as click handlers but using hover().
  // Hover events fire as soon as the cursor enters *or* leaves the element.
  $("#button").hover(function(event) {
    console.log(event);
    alert("You hovered me!");
  })

  // And you can again refer to the element as $(this) from within the callback.
  $(".green-box").hover(function() {
    $(this).text("Hovered!");
  });

});
