$(function () {

  // To handle key presses, use keydown().
  // Usually, you'll attach this to the <html> tag so that the event is handled
  // whenever a key is pressed on the page.
  $("html").keydown(function(event) {
    // You normally want to use the event argument here to do something based
    // on which key was pressed. This information is stored in event.which.
    console.log(event.which);
  });

  // Looking at the log of event.which, we can see that the arrow right key
  // corresponds to 39. So let's store this info to make the code readable:
  var ARROW_RIGHT = 39;

  // Now let's move the blue box when the user presses the arrow right key.
  $("html").keydown(function(event) {
    if (event.which === ARROW_RIGHT) {
      $(".blue-box").stop().animate({
        marginLeft: "+=10px"
      }, 50);
    }
  });

});
