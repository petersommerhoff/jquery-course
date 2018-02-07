$(function () {

  // These are now multiple images.
  var galleryItems = $(".gallery").find("img");

  // Normally, you would do this in CSS.
  galleryItems.css("width", "30%")
              .css("opacity", "0.7");

  // Fade images in/out when hovering/leaving.
  galleryItems.mouseenter(function() {
    $(this).stop().fadeTo(500, 1);
  });

  galleryItems.mouseleave(function() {
    $(this).stop().fadeTo(500, 0.7);
  });

  // Preview image in lightbox when clicked.
  galleryItems.click(function() {
    // Read image src of clicked image.
    var source = $(this).attr("src");

    // Generate new <img> tag to add to the lightbox.
    var newImage = $("<img>").attr("src", source).css("width", "100%");

    // Prepare and show lightbox preview.
    $(".lightbox").empty().append(newImage).fadeIn(1000);
  });

  // Exit lightbox preview when clicking it anywhere.
  $(".lightbox").click(function() {
    $(this).stop().fadeOut();
  });

});
