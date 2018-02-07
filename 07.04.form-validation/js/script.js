$(function () {

  // When the submit event comes in, we first validate all form fields
  // and abort submission if one of them is invalid. Also, we highlight all
  // invalid fields so that the user knows what to fix.
  $("#form").submit(function(event) {
    // First, read out all entered values.
    var name = $("#name").val();
    var password = $("#password").val();
    var message = $("#message").val();
    var checked = $("#checkbox").is(":checked");

    // Then we use our validation functions (defined below) to check each input.
    validateNameField(name, event);
    validatePasswordField(password, event);
    validateMessageField(message, event);
    validateCheckboxField(checked, event);
  });

  // In the following, we define helper functions that each validate
  // one of the inputs. These will be used further down by our validation
  // functions.

  function isValidName(name) {
    return name.trim().length >= 2;
  }

  function isValidPassword(password) {
    return password.length >= 6 && /.*[0-9].*/.test(password);
  }

  function isValidMessage(message) {
    return message.trim() !== "";
  }

  // Next, we define the actual validation functions which use the helpers from
  // above. These validation functions add a hint for the user for each invalid
  // input and prevent the form from submitting if the input is invalid.

  // First, show a hint if the name is not valid or remove the hint if it's
  // now valid.
  function validateNameField(name, event) {
    if (!isValidName(name)) {
      $("#name-feedback").text("Please enter at least two characters");
      event.preventDefault();
    } else {
      $("#name-feedback").text("");
    }
  }

  // Do the same for the other inputs.
  function validatePasswordField(password, event) {
    if (!isValidPassword(password)) {
      $("#password-feedback").text("The password should have at least 6 characters and contain a number");
      event.preventDefault();
    } else {
      $("#password-feedback").text("");
    }
  }

  function validateMessageField(message, event) {
    if (!isValidMessage(message)) {
      $("#message-feedback").text("Please enter a message.");
      event.preventDefault();
    } else {
      $("#message-feedback").text("");
    }
  }

  function validateCheckboxField(isChecked, event) {
    if (!isChecked) {
      $("#checkbox-feedback").text("Please agree to this.");
      event.preventDefault();
    } else {
      $("#checkbox-feedback").text("");
    }
  }

});
