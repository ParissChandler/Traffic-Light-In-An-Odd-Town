function rLightOLight(){
  $("#cTwo").css('opacity',1)
}
function gLight(){
  $("#cOne").css("opacity", 0.4)
  $("#cTwo").css("opacity", 0.4)
  $("#cThree").css("opacity", 1)
  clearInterval(first);
};
function oLight(){
  $("#cTwo").css("opacity", 1)
  $("#cThree").css("opacity", 0.4)
  clearInterval(second);
};
function red(){
  $("#cOne").css("opacity", 1)
  $("#cTwo").css("opacity", 0.4)
  clearInterval(third);
  first= setInterval(rLightOLight, 5000);
  second= setInterval (gLight, 9000);
  third= setInterval(oLight, 12000);
};
var first= setInterval(rLightOLight, 5000);

var second= setInterval(gLight, 9000);

var third= setInterval(oLight, 12000);

var fourth= setInterval (red, 14000);
