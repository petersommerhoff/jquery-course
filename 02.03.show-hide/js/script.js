$(function () {
  // Hide an element
  $(".red-box").hide();

  // Show it again
  $(".red-box").show();

  // Just toggle visibility depending on whether element is shown or hidden
  $(".red-box").toggle();  // hides

  // Up until this point, you can't even see what happens in the browser
  // because it happens in a matter of milliseconds.

  // Use show/hide as animations (not very commonly used)
  $(".green-box").hide(1000);
  $(".green-box").show(1000);
});
