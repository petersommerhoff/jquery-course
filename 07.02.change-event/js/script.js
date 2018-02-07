$(function () {

  // The change event is used for input elements such as checkboxes, radio
  // button and select tags. They fire whenever the selection changes.

  // Add green indicator when checkbox is checked and red one otherwise.
  $("#checkbox").change(function() {
    var isChecked = $(this).is(":checked");  // or .prop("checked")

    if (isChecked) {
      // Add the checkbox' label to the selection and highlight both in green.
      $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #181");
    } else {
      $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #811");
    }
  });

  // Another common use case is to read the selected option from a <select>
  // element when a new option is selected.
  $("#selection").change(function() {
    var chosen = $(this).find(":selected").text();
    alert(chosen);
  });

});
