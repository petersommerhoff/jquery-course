$(function () {

  // You can load files from the server (or local file system in this case) with
  // jQuery using its load() function.
  $("#code").load("js/script.js");

  // You can also handle different responses, for instance if an error occurred.
  $("#code").load("idontexist.php", function(response, status) {
    console.log(response);  // empty (normally contains the fetched contents)
    console.log(status);  // error

    if (status === "error") {
      alert("Could not find idontexist.php");
    }
  });

});
