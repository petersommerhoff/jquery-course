$(function () {
  // Fade out element over 2000ms
  $(".red-box").fadeOut(2000);

  // Try to use fadeTo
  $(".red-box").fadeTo(1000, 1.0);

  // This doesn't work because fadeOut() will set display: none and fadeTo
  // doesn't modify the display property. Thus, it's not able to make it
  // reappear.

  // Back to original state
  $(".red-box").fadeIn(100);

  // To keep red box in the layout, use only fadeTo
  $(".red-box").fadeTo(2000, 0);

  // Can now make it re-appear in the way we tried above
  $(".red-box").fadeTo(1000, 1.0);
});
