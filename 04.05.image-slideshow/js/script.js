$(function () {

  // Select the <img> inside the gallery to manipulate it later
  var galleryImage = $(".gallery").find("img").first();

  // Initialize an array of all images for the gallery
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  // Now, we want to cycle through all images we have and show one after the
  // other in our gallery. For this, we create a variable i: the index of the
  // image we want to currently show.
  var i = 0;

  // setInterval will call whatever code is inside the callback function every
  // 2 seconds. This way, we can change the shown image every 2 seconds.
  setInterval(function() {
    // First, we update the index i to the next image.
    // However, we cannot simply do i = i+1 because that would quickly result in
    // indexes i = 3, 4, 5 etc which are invalid for our array.
    // So we constrain the sequence to the range 0..2 by using modulo 3 (i % 3).
    i = (i + 1) % images.length;  // i = 1, 2, 0, 1, 2, 0, ...

    // Now, we just have to change the src attribute of the <img> to the next
    // image we want to show.
    // To achieve a smooth transition, we'll actually first fadeOut the old,
    // then update the src attribute behind the scenes, and then fade it back in.
    galleryImage.fadeOut(function() {
      // Inside the callback, "this" refers to the galleryImage
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    });

    // Log current image path for debugging
    console.log(galleryImage.attr("src"));

  }, 2000);

});
