$(function () {
  // Custom animation to move element by gradually increasing margin to 200px
  $(".green-box").animate({
    "margin-left": "+=200px"
  });

  // Reset
  $(".green-box").animate({
    "margin-left": "0px"
  });

  // Move element by gradually increasing margin BY 200px (using +=)
  // (no matter what it was before)
  $(".green-box").animate({
    "margin-left": "+=200px"
  });

  // Define animation duration (here 2s)
  // Default duration is 300ms
  $(".green-box").animate({
    "margin-left": "-=200px"
  }, 2000);

  // Define animation progression function
  // Linear updates the margin-left linearly
  $(".green-box").animate({
    "margin-left": "+=200px"
  }, 2000, "linear");
});
