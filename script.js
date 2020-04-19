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

var fireworkSrc = [
  "images/firework.gif", 
  "images/firework-1.gif", 
  "images/firework-2.gif", 
  "images/firework-3.gif", 
  "images/firework-4.gif", 
  "images/firework-5.gif", 
  "images/firework-6.gif", 
];
var fireworkStyles = [
  "extra-small-firework",
  "small-firework",
  "medium-firework",
  "big-firework",
  "extra-big-firework"
];
var fireworkIds = [];
document.onclick = userClicked;
function userClicked() {
  var x = event.clientX + window.pageXOffset;
  var y = event.clientY + window.pageYOffset;
  var firework = document.createElement("img");
  var fireworkId = setTimeout(hideImage, 4000);
  firework.setAttribute("id", fireworkId);
  document.querySelector("body").appendChild(firework);
  fireworkIds.push(fireworkId);
  updateFirework(fireworkId, x, y);
}

function updateFirework(fireworkId, x, y) {
  var randomIndex = Math.floor(Math.random() * fireworkStyles.length);
  var updateFirework = document.getElementById(fireworkId);
  updateFirework.setAttribute("class", fireworkStyles[randomIndex]);
  updateFirework.src = fireworkSrc;
  updateFirework.style.display = "";
  updateFirework.style.position = "absolute";
  updateFirework.style.left =
    x - updateFirework.getBoundingClientRect().width / 2 + "px";
  updateFirework.style.top =
    y - updateFirework.getBoundingClientRect().height / 2 + "px";
}

function hideImage() {
  clearTimeout(fireworkIds[0]);
  var firework = document.getElementById(fireworkIds[0]);
  firework.remove();
  fireworkIds.shift();
}
