var imageURLs = [
  "https://cdn.glitch.com/f5f15289-fb5e-441e-bf01-6749baec062f%2Fyes.gif?v=1584147536505",
  "https://cdn.glitch.com/f5f15289-fb5e-441e-bf01-6749baec062f%2Fc6ea5d80f7074265478ffc2349358a2b_yes-gifs-get-the-best-gif-on-giphy_480-480.gif?v=1585863649855",
  "https://cdn.glitch.com/f5f15289-fb5e-441e-bf01-6749baec062f%2Fsource.gif?v=1585863660656",
  "https://cdn.glitch.com/f5f15289-fb5e-441e-bf01-6749baec062f%2Fgiphy.gif?v=1585863672171"
];
function getImageSrc() {
  var randomIndex = Math.floor(Math.random() * imageURLs.length);
  return imageURLs[randomIndex];
}

let counter = 0;
var fireworkSrc =
  "https://cdn.glitch.com/f5f15289-fb5e-441e-bf01-6749baec062f%2F8025d8cb93938f5b55a557e862c6e772.gif?v=1586032360025";
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
