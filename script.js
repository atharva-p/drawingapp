const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.height = window.innerHeight - 60;
  canvas.width = window.innerWidth;
}
resize();

//canvas test
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(50, 20);
ctx.lineTo(50, 50);
ctx.stroke();
ctx.closePath();
ctx.stroke();
