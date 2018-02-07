$(function () {

  // Select inputs
  var inputFields = $("input:text, input:password, textarea");

  // Add grey box shadow when focusing any input using focus().
  inputFields.focus(function() {
    $(this).css("box-shadow", "0 0 4px #666");
  });

  // Conversely, remove box shadow from other inputs when unfocusing them
  // using blur().
  inputFields.blur(function() {
    $(this).css("box-shadow", "none");
  });

  // Add green or red background to name field, depending on whether the input
  // fulfills the validation criteria (here simply at least 3 characters)
  $("#name").blur(function() {
    var text = $(this).val();
    if (text.trim().length < 3) {
      $(this).css("box-shadow", "0 0 4px #811");
    } else {
      $(this).css("box-shadow", "0 0 4px #181");
    }
  });

});
