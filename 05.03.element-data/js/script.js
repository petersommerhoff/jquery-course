$(function () {

  // jQuery allows you to attach arbitrary data to any element, represented as
  // HTML attributes prefixed with "data-", e.g. "data-images".
  // Here, we'll attach data about all available images to the gallery itself.

  // Select the <img> inside the gallery to manipulate it later
  var gallery = $(".gallery");

  // Initialize an array of all images for the gallery
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  // To attach data, use the data() function and pass in two arguments: first,
  // the key for the data, and second the actual data/value.
  gallery.data("availableImages", images);
  // To retrieve the data, again use just one argument: the key.
  console.log(gallery.data("availableImages"));  // Array[...]

  gallery.data("name", "The Amazing Gallery");
  console.log(gallery.data("name"));  // The Amazing Gallery

  // Remove data just as easily using removeData().
  gallery.removeData("name");
  console.log(gallery.data("name"));  // undefined

  // If you attach data directly in HTML via an attribute prefixed with "data-",
  // you can read that automatically from jQuery.
  var data = $("p:first").data("mydata");
  console.log(data);  // Data coming from HTML attribute

});
