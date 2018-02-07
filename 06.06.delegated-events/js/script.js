$(function () {

  // The event handlers you've used so far are only attached to those elements
  // that exist at the time the code is executed. Thus, they won't work for
  // dynamically attached elements:
  $("p").click(function() {
    $(this).slideUp();
  });
  $("#list").before("<p>This is a dynamically added paragraph</p>");

  // To solve this, you can use delegated events. Here, you attach the handler
  // to a parent element that will always exist on the page. When the event
  // comes in, the parent then delegates the event to all defined children.
  // For this, you must use the on() function, and pass in which children should
  // handle the event. For instance, all <li> tags inside #content:
  $("#content").on("click", "li li", function() {
    $(this).slideUp();
  });

  $("#list ul").append("<li>Dynamically added new item!</li>");

});
