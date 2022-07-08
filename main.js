function lineThru(item) {
  item.style.textDecoration = "line-through";
}
function fadeAway(item) {
  item.style.opacity = "0.1";
}
function eraseDinos(item) {
  item.style.display = "none";
}
function meteor() {
  var dinos = document.querySelectorAll(".dino");
  dinos.forEach((dino) => {
    eraseDinos(dino);
  });
}
