$(function () {

  // While hover() with one callback function triggers both when entering and
  // leaving the element with the cursor, mouseenter() and mouseleave() allow
  // you to attach different event handlers for both.
  $(".blue-box").mouseenter(function() {
    $(this).stop().fadeTo(500, 0.5);
  });

  $(".blue-box").mouseleave(function() {
    $(this).stop().fadeTo(500, 1);
  });

  // However, you can achieve the same with hover() as well. For this, you must
  // pass in two callback functions: first the one for mouseenter, then the one
  // for mouseleave.
  // So the following does the same as  the above, but for the red box:
  $(".red-box").hover(function() {
    $(this).stop().fadeTo(500, 0.5);
  }, function() {
    $(this).stop().fadeTo(500, 1);
  });

});
