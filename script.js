const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

console.log("hello kavipriya");

//for sizing the canvas when opened or changed
function resize() {
  canvas.height = window.innerHeight - 60;
  canvas.width = window.innerWidth;
}
window.addEventListener("load", resize);
window.addEventListener("resize", resize);

//refresh or erase button
document.getElementById("erase").addEventListener("click", () => {
  location.reload();
});

// painting logic
var isPainting = false;

canvas.addEventListener("touchstart", startTouch);
canvas.addEventListener("touchmove", drawTouch);
canvas.addEventListener("touchend", stop);

canvas.addEventListener("mousedown", startMouse);
canvas.addEventListener("mousemove", drawMouse);
canvas.addEventListener("mouseup", stop);

//functions for mouse click events
function startMouse(e) {
  isPainting = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
  console.log(e.offsetX + " this is mouse event " + e.offsetY);
  e.preventDefault();
}
function drawMouse(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }
}
//functions for touch events
function startTouch(e) {
  isPainting = true;
  ctx.beginPath();
  ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY - 60);
  console.log(e.touches[0].clientX + " " + e.touches[0].clientY);
  e.preventDefault();
}
function drawTouch(e) {
  if (isPainting) {
    ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY - 60);
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }
}

function stop(e) {
  if (isPainting) {
    ctx.stroke();
    ctx.closePath();
    isPainting = false;
  }
}
//color buttons highlight and color stroke logic
const red = document.getElementById("color-selector-red");
const green = document.getElementById("color-selector-green");
const blue = document.getElementById("color-selector-blue");
const black = document.getElementById("color-selector-black");
const brown = document.getElementById("color-selector-brown");
red.addEventListener("click", () => {
  red.setAttribute("selector", "true");
  green.setAttribute("selector", "false");
  blue.setAttribute("selector", "false");
  black.setAttribute("selector", "false");
  brown.setAttribute("selector", "false");
  ctx.strokeStyle = "red";
});
green.addEventListener("click", () => {
  red.setAttribute("selector", "false");
  green.setAttribute("selector", "true");
  blue.setAttribute("selector", "false");
  black.setAttribute("selector", "false");
  brown.setAttribute("selector", "false");
  ctx.strokeStyle = "green";
});
blue.addEventListener("click", () => {
  red.setAttribute("selector", "false");
  green.setAttribute("selector", "false");
  blue.setAttribute("selector", "true");
  black.setAttribute("selector", "false");
  brown.setAttribute("selector", "false");
  ctx.strokeStyle = "blue";
});
black.addEventListener("click", () => {
  red.setAttribute("selector", "false");
  green.setAttribute("selector", "false");
  blue.setAttribute("selector", "false");
  brown.setAttribute("selector", "false");
  black.setAttribute("selector", "true");
  ctx.strokeStyle = "black";
});
brown.addEventListener("click", () => {
  red.setAttribute("selector", "false");
  green.setAttribute("selector", "false");
  blue.setAttribute("selector", "false");
  black.setAttribute("selector", "false");
  brown.setAttribute("selector", "true");
  ctx.strokeStyle = "black";
});
