$(function () {

  // 1) Attributes with attr()

  // To read the current value of an attribute, use attr() with only
  // one argument: the name of the attribute you want to read.
  var link = $("#link");
  // Retrieve the value of the href attribute of the <a> tag
  // This is logged into the console. To see it, press F12 in Firefox/Chrome
  // to open the Developer Tools and click on the Console tab.
  console.log(link.attr("href"));
  // Log the value of the title attribute
  console.log(link.attr("title"));

  // To set the value of an attribute, you call the attr() function with two
  // arguments: first, the name of the attribute you want to change, and second
  // the new value:
  link.attr("href", "http://petersommerhoff.com");

  // 2) Properties with prop()

  // To read the *current* value of a checkbox for instance, you must use the
  // prop() function:
  var radioButton = $("input[type=radio]:first");
  console.log(radioButton.prop("checked"));  // false
  console.log(radioButton.attr("checked"));  // undefined

  // 3) Values with val()
  // -> Read or set the value attribute of input elements

  // To retrieve the value of an input element, simply call val()
  var email = $("input[type=email]").val();
  console.log(email);  // i@mine.me
  var number = $("input[type=range]").val();
  console.log(number);  // 3

  // To set a new value, pass the new value as an argument to val():
  $("input[type=text]").val("Peter Sommerhoff");
  $("input[type=range]").val(9);

  // If you have multiple elements selected, using val() will implicitly
  // always call first() beforehand, so only change the first input element:
  var value = $("input").val();
  console.log(value);  // Peter Sommerhoff

});
