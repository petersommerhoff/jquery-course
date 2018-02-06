$(function () {

  // Replace each selected item with another one.
  // For instance, replace all <p> tags with another one.
  $("p:first").replaceWith("<p>I've been replaced.</p>")

  // Again, to construct more complex elements, you may want
  // to do that in a callback function:
  $("p:last").replaceWith(function() {
    return "<p>Complex new paragraph...</p>";
  });

  // Also, you can again replace an element with another existing
  // element which will remove it from its original position.
  $(".red-box").replaceWith($(".blue-box"));

  // You can also replace multiple items at the same time.
  $("li:first, li:last").replaceWith("<li>First or last list item</li>");
  
});
