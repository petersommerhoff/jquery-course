$(function () {

  // You can modularize your code into smaller functions by defining the
  // callback function explicitly instead of passing it in.

  // Directly passing in callback as before. We call this callback an *anonymous
  // function* because it doesn't have a name.
  $("html").on("click keydown", function() {
    console.log("Mouse was clicked or key was pressed.");
  });

  // Using named function as a callback (this function is defined at the end of
  // this file).
  $("html").on("click keydown", logEvent);

  // Let's use this to add a gallery that switches to the next image on click.
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  // For this function, it makes more sense to modularize it because the
  // callback is more complex.
  // To do this, we store the gallery image in a variable so that we can use it
  // in the switchToNextImage() function instead of $(this). Using $(this)
  // would still work but would make the function harder to read and understand.
  var i = 0;
  var galleryImage = $(".gallery").find("img")
  galleryImage.on("click", switchToNextImage);

  // In contrast to logEvent(), this is a nested function (it's nested into our
  // main jQuery function). This way, we can access galleryImage.
  function switchToNextImage() {
    i = (i + 1) % images.length;
    galleryImage.fadeOut(function() {
      galleryImage.attr("src", images[i]).fadeIn();
    });
  }

});

// Normal, named function
function logEvent() {
  console.log("Mouse was clicked or key was pressed.");
}
