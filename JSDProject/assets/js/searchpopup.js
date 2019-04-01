var myFunc = null;

$(document).ready(function () {
 myFunc = function () {
  $('div#layer').css({
   "top": (($(window).height() - $('div#layer').outerHeight()) / 2 + $(window).scrollTop()) + "px",
   "left": (($(window).width() - $('div#layer').outerWidth()) / 2 + $(window).scrollLeft()) + "px"
  });
 }
});

function showLayer() {
 var layer = document.getElementById("layer");
 layer.style.visibility = "visible";
 myFunc();
}

$(window).resize(function () {
 myFunc();
});