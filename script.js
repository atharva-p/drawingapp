const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.height = window.innerHeight - 60;
  canvas.width = window.innerWidth;
}
//for sizing the canvas when opened or changed
window.addEventListener("load", resize);
window.addEventListener("resize", resize);
