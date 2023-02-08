var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
  var random = -((Math.random() * 300) + 150);
  hole.style.top = random + "px";
  counter++;
});
setInterval(function(){
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  if(jumping == 0)
  character.style.top = 100 + "px";
})