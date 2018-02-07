$(function () {

  // Click handler can be attached by passing a callback function to the click()
  // function. Whatever code you write into the callback function is then
  // executed whenever the user clicks the element.
  // You can add a parameter to the callback to retrieve additional info about
  // the event. Accordingly, we call the parameter "event".
  $("#btn-click").click(function(event) {
    console.log(event);
    alert("Thanks for clicking me!");
  });

  // As always in jQuery, inside the callback, you can refer to the element
  // as $(this).
  $(".red-box").click(function() {
    var currentOpacity = $(this).css("opacity");
    $(this).fadeTo(500, currentOpacity - 0.2);
  });

  // You can even simulate click events on the element by calling click()
  // without any arguments.
  $(".red-box").click();

});
