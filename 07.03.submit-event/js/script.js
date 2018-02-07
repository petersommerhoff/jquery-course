$(function () {

  // You can intercept form submission via the submit event.
  // jQuery provides the submit() for this. A common use case is to perform
  // client-side form validation to avoid submitting a form with invalid data.

  // For instance, let's check if the user wrote a message in the textarea.
  $("#form").submit(function(event) {
    var textarea = $("#message");
    if (textarea.val().trim() === "") {
      // No message, add red highlighting to indicate error
      textarea.css("box-shadow", "0 0 4px #811");

      // The default event now would be to submit the form. The browser will do
      // this automatically when clicking a submit button. We prevent this using
      // preventDefault(). This way, the form will not be submitted.
      event.preventDefault();
    } else {
      // Nothing to do, let the form be submitted.
    }
  });

});
