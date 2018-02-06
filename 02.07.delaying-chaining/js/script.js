$(function () {

  // Fade out red box immediately to 50% opacity (over 1 second)
  $(".red-box").fadeTo(1000, 0.5);

  // Wait 1 second, then fade out green box to 50% opacity (over 1 second)
  // This already using function chaining to call .fadeTo() directly on the
  // return value of .delay()
  $(".green-box").delay(1000).fadeTo(1000, 0.5);

  // Chaining even more function calls to create animation
  $(".blue-box").delay(2000).fadeTo(1000, 0.5).fadeTo(1000, 1.0).delay(1000).fadeOut();
});
