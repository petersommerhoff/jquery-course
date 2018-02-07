$(function () {

  // There are many APIs online that you can fetch data from. Many of these
  // return data in JSON or XML format. Here, we use the Flickr API to retrieve
  // image data as JSON (JavaScript Object Notation).

  // First, store the URL of the API.
  // The ?jsoncallback parameter is necessary to avoid cross-origin errors in
  // modern browsers (you're not generally allowed to fetch data from remote sites).
  var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  // Next, we use jQuery's getJSON() function to access to API and retrieve data.
  $.getJSON(flickrApiUrl, {
    tags: "sun, beach",
    tagmode: "any",
    format: "json"
  }).done(function(data) {
    // Inside done(), you can work with the retrieved data.
    console.log(data);

    // Let's use jQuery $.each() function to create an <img> tag for each image .
    $.each(data.items, function(index, item) {
      console.log(item);  // Helpful to see what data you can access

      // Create new image and add to gallery.
      $("<img>").attr("src", item.media.m).appendTo("#flickr");

      // Stop after 5 images.
      if (index == 4) {
        return false;
      }
    });
  }).fail(function(response) {
    // Inside fail(), you can handle error cases.
    console.log(response);
    alert("AJAX call failed.")
  });

});
