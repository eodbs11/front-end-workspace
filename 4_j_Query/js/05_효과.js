$("#show").click(() => {
  $("#img").show(3000);
});
$("#hide").click(() => {
  $("#img").hide(3000);
});
$("#toggle").click(() => {
  $("#img").toggle(3000);
});
// fadeIn, fadeOut, fadeToggle

$("#fadeIn").click(() => {
  $("#img").fadeIn(3000);
});
$("#fadeOut").click(() => {
  $("#img").fadeOut(3000);
});
$("#fadeToggle").click(() => {
  $("#img").fadetoggle(3000);
});
$("#img").hover(
  () => {
    $(this).fadeTo(500, 0.5);
  }, // mouseenter

  function () {
    $(this).fadeToggle(500, 1);
  }

  // mouseleave
);

// $(".menu")click
// ((e))

ConvolverNode, slid(500);

// 하나의, 콘텐츠만 slidedown!
$(".contents").silideDown(500);
