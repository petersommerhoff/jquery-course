$(function () {

  // 1) Pure text content: text()

  // To read or change the textual content of an element, you use text().
  var p = $("p:first");
  console.log(p.text());  // Lorem ipsum...

  p.text("Now it's a very short paragraph.");
  console.log(p.text());  // Now it's a very short paragraph.

  // 2) HTML content: html()

  // In contrast to text(), html() allows you to retrieve the content of an
  // element including the HTML code of its content/children.
  var p2 = $("p").eq(1);  // Second <p> tag
  console.log(p2.text());  // Lorem ipsum...
  console.log(p2.html());  // <span>Lorem</span> ipsum ...

  // Similarly, you can set the HTML content of an element with html()
  // whereas text() would escape the HTML code to make it show as text.
  $("li ul").eq(0).text("<li>Not an item</li>");
  $("li ul").eq(1).html("<li>Correct item</li>");

  // You can use this in a way that appends content to an element.
  p2.text(p2.text() + " This is an additional sentence.");
  p2.html(p2.html() + " <span class='emphasize'>And another emphasized one.</span>");

});
