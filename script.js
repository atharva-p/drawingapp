const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 60;
}
resize();

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(40, 20);
ctx.stroke();
