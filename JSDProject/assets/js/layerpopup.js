var myFunc = null;
var layerArea = document.getElementById("layerArea");

$(document).ready(function () {
 myFunc = function () {
  $('div#layerArea').css({
   "top": (($(window).height() - $('div#layerArea').outerHeight()) / 2) + "px"
  }),
  $('div#layerArea').css({
   "left": (($(window).width() - $('div#layerArea').outerWidth()) / 2) + "px"
  })
 }
});

function showLayer() {
 myFunc();
 layerArea.style.visibility = "visible";
}

$(window).resize(function () {
 myFunc();
});

function reportClose() {
 document.getElementById("mailarea").value = "";
 document.getElementById("reportarea").value = "";

 layerArea.style.visibility = "hidden";
}