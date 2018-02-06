$(function () {
  // Fade out element over 2000ms
  $(".red-box").fadeOut(2000);

  // Fade back in over 1000ms
  $(".red-box").fadeIn(1000);

  // Fade element to specific opacity (here 50%)
  $(".blue-box").fadeTo(1000, 0.5);

  // Note that the blue box animation starts right away, whereas the second
  // red box animation waits until the first animation finished.
  // This is because each element has its own animation queue which is
  // executed one after the other. So while the red box is still "busy" with
  // its first animation, the second animation waits in the queue.

  // Fade element in or out, depending on current status
  $(".blue-box").fadeToggle();
  $(".blue-box").fadeToggle();

  // Notice that fadeToggle fades back to the blue box's previous opacity,
  // thus only back to 50% opacity.
});
