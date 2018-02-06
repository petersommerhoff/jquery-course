$(function () {

  // 1) Appending elements to existing elements.
  // -> This adds elements as the last children of a given element

  // Append a new list item to the end of the first sub list
  $("ul ul:first").append("<li>New sub item</li>");

  // Other way to achieve the same effect
  $("<li>Another new sub item</li>").appendTo("ul ul:first");

  // 2) Prepending elements to existing elements.
  // -> This adds elements as the first children of a given element

  // Prepend a new list item to the start of the first sub list
  $("ul ul:first").prepend("<li>First sub item</li>");

  // Other way to achieve the same effect
  $("<li>Very first sub item</li>").prependTo("ul ul:first");

  // 3) Adding elements as siblings of existing elements

  // Add a new elements after an existing one (as next sibling)
  $(".red-box").after("<div class='red-box'>New Red</div>");

  // Add a new elements before an existing one (as previous sibling)
  $(".blue-box").before("<div class='blue-box'>New Blue</div>");

  // You can also use a callback function to construct more complex
  // elements to add to the DOM
  $(".green-box").after(function() {
    // Maybe more complex string of new element(s)
    return "<div class='green-box'>New Green</div>";
  });

  // 4) Add existing elements to other existing elements
  // -> This will move the added element, so the original vanishes

  // For instance, add the #list after the first paragraph (removes it from its
  // original position).
  // In case it's added to multiple elements, jQuery must clone the added element.
  $("p:first").after($("#list"));

});
