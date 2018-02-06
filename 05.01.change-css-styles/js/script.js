$(function () {

  // To retrieve or set the value of a CSS property, you can use css().
  // This works similar to attr() and prop(): pass one argument to read
  // or two arguments to set a new value.

  // For instance, you can achieve the same as with hide() like this:
  $("p:first").css("display", "none");

  // Let's read the width property of .red-box:
  var redBox = $(".red-box");
  console.log(redBox.css("width"));  // 80px
  // To get the width or height without unit, you can use width() and height():
  console.log(redBox.width());  // 80

  // You can change any CSS property in this simple way.
  redBox.css("background-color", "#AA5500");
  $("p").css("font-size", "20px");

  // You can even change the value of a property relative to its previous value
  redBox.css("width", "+=20px");
  redBox.css("height", "-=20px");

  // Also, you can retrieve multiple values by passing an array as the argument
  var properties = $("p").css(["font-size", "line-height", "color"]);
  // The result is an object containing all values
  console.log(properties);
  console.log(properties["font-size"]);  // 20px

  // In line with jQuery's other function, you can also use a callback function
  // instead of passing in a new value directly.
  // This example also demonstrates that jQuery automatically uses the correct
  // vendor prefix for the CSS property depending on the browser, which is
  // -moz-user-select in this case.
  // You can see that in the Developer Tools (F12 in browser) in the Inspector tab.
  redBox.css("user-select", function() {
    // [some logic here...]
    return "none";
  });

});
