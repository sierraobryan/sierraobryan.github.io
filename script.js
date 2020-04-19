var imageURLs = [
  "images/yes.gif",
  "images/yes-1.gif", 
  "images/yes-2.gif", 
  "images/yes-3.gif", 
  "images/yes-4.gif" 
];
function getImageSrc() {
  var randomIndex = Math.floor(Math.random() * imageURLs.length);
  return imageURLs[randomIndex];
}

let counter = 0; 
var fireworkSrc = "images/firework.gif";
var fireworkStyles = [
  "extra-small-firework",
  "small-firework",
  "medium-firework",
  "big-firework",
  "extra-big-firework"
];
var fireworks = []; 
var fireworks = [];
var fireworkIds = [];
document.onclick = userClicked;
function userClicked() {
  var x = event.clientX + window.pageXOffset;
  var y = event.clientY + window.pageYOffset;
  var randomIndex = Math.floor(Math.random() * fireworkStyles.length);
  var firework = document.createElement("img");
  var fireworkId = "firework" + counter;
  firework.setAttribute("id", fireworkId);
  firework.setAttribute("class", fireworkStyles[randomIndex]);
  firework.src = fireworkSrc;
  firework.style.display = "";
  firework.style.position = "absolute";
  firework.style.left = x - firework.width / 2 + "px";
  firework.style.top = y - firework.height / 2 + "px";
  document.querySelector("body").appendChild(firework);
  fireworkIds.push(fireworkId);
  startTimer();
}

function startTimer() {
  var timerId = setTimeout(hideImage, 4000);
  counter++; 
  fireworks.push(timerId);
}

function hideImage() {
  clearTimeout(fireworks[0]);
  var firework = document.getElementById(fireworkIds[0]);
  firework.setAttribute("src", "");
  firework.style.display = "none";
  fireworks.shift();
  fireworkIds.shift();
}
