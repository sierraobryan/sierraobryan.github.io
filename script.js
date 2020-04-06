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
document.onclick = userClicked;
function userClicked() {
  var x = event.clientX + window.pageXOffset;
  var y = event.clientY + window.pageYOffset;
  var randomIndex = Math.floor(Math.random() * fireworkStyles.length);
  var firework = document.getElementById("firework");
  firework.setAttribute("class", fireworkStyles[randomIndex]);
  firework.style.display = "";
  firework.style.position = "absolute";
  firework.style.left = x - firework.getBoundingClientRect().width / 2 + "px";
  firework.style.top = y - firework.getBoundingClientRect().height / 2 + "px";
  if (counter === 0) {
    firework.setAttribute("src", fireworkSrc);
    startTimer();
    counter = 1;
  }
}

function startTimer() {
  setTimeout(hideImage, 4000);
}

function hideImage() {
  var firework = document.getElementById("firework");
  firework.setAttribute("src", "");
  firework.style.display = "none";
  counter = 0;
}
