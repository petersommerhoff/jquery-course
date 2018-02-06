$(function () {

  // Fade out red box over 100 second
  $(".red-box").fadeTo(1000, 0, function() {

    // This callback function is executed once outer animation finishes.
    // So the green box starts fading out once the red box finished fading out.
    $(".green-box").fadeTo(1000, 0, function() {

      // Similarly, any code inside this function will start executing only once
      // the green box finishes fading out (after 2 seconds)
      $(".blue-box").fadeTo(1000, 0);
    });
  });

});
