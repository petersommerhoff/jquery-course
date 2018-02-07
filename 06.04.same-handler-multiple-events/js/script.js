$(function () {

  // You can attach the same handler (callback function) for multiple events
  // using jQuery's on() function.
  // For instance, the following logs to the console whenever you click anywhere
  // on the page or press any key while the page/browser is focused.
  $("html").on("click keydown", function() {
    console.log("Mouse was clicked or key was pressed.");
  });

  // Let's use this to add a gallery that switches to the next image on click.
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  // The following is the same as in the image slideshow code, except we now
  // use a click event instead of setTimeout().
  var i = 0;
  $(".gallery").find("img").on("click", function() {
    i = (i + 1) % images.length;
    $(this).fadeOut(function() {
      $(this).attr("src", images[i]).fadeIn();
    });
  });

});
