const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.height = window.innerHeight - 60;
  canvas.width = window.innerWidth;
}
//for sizing the canvas when opened or changed
window.addEventListener("load", resize);
window.addEventListener("resize", resize);

document.getElementById("erase").addEventListener("click", () => {
  location.reload();
});

//painting logic
var isPainting = false;
function draw(e) {
  if (!isPainting) {
    //if it's not drawing exit the function block
    return;
  }
  ctx.beginPath();
  ctx.lineWidth = "10";
  ctx.lineCap = "round";
  ctx.lineTo(e.offsetX, e.offsetY);
  // console.log(e.offsetX + " " + e.offsetY);
  ctx.stroke();
}
canvas.addEventListener("mousedown", (e) => {
  isPainting = true;
});
canvas.addEventListener("touchdown", (e) => {
  isPainting = true;
});
canvas.addEventListener("mouseup", (e) => {
  isPainting = false;
});
canvas.addEventListener("touchup", (e) => {
  isPainting = false;
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchmove", draw);

//color buttons highlight and color stroke logic
const red = document.getElementById("color-selector-red");
const green = document.getElementById("color-selector-green");
const blue = document.getElementById("color-selector-blue");
const black = document.getElementById("color-selector-black");
red.addEventListener("click", () => {
  red.setAttribute("selector", "true");
  green.setAttribute("selector", "false");
  blue.setAttribute("selector", "false");
  black.setAttribute("selector", "false");
  ctx.strokeStyle = "red";
});
green.addEventListener("click", () => {
  red.setAttribute("selector", "false");
  green.setAttribute("selector", "true");
  blue.setAttribute("selector", "false");
  black.setAttribute("selector", "false");
  ctx.strokeStyle = "green";
});
blue.addEventListener("click", () => {
  red.setAttribute("selector", "false");
  green.setAttribute("selector", "false");
  blue.setAttribute("selector", "true");
  black.setAttribute("selector", "false");
  ctx.strokeStyle = "blue";
});
black.addEventListener("click", () => {
  red.setAttribute("selector", "false");
  green.setAttribute("selector", "false");
  blue.setAttribute("selector", "false");
  black.setAttribute("selector", "true");
  ctx.strokeStyle = "black";
});
