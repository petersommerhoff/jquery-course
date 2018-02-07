$(function () {

  // For all the event handlers you've learned, you can pass in an additional
  // first argument to attach extra data to the event object. This extra data
  // is passed as a JavaScript object, which is encompassed by curly braces:
  $("#button").click({
    user: "Peter",
    domain: "http://petersommerhoff.com"
  }, function(event) {
    console.log(event.data);  // event.data carries the extra data: user and domain

    // Here, we call our function greetUser() and pass in the event data as
    // its argument.
    greetUser(event.data);
  });

  // The function greetUser() accepts one parameter with user data (this will
  // be event.data) so that we can access it inside the function.
  function greetUser(userdata) {
    // Uses the user from the event data, or "Anonymous" if none is defined.
    username = userdata.user || "Anonymous";
    domain = userdata.domain || "example.com";

    alert("Welcome back " + username + " from " + domain + "!");
  }

});
