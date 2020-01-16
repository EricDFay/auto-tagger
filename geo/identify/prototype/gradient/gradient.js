var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var scene = 0;

function clear() {
  context.fillStyle = '#333';
  context.fillRect(0,0,canvas.width,canvas.height);
}
clear();
var x = 200,
    y = 50,
    w = 100,
    h = 30;

function drawUnitCircle(color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(0,0,1,0,2*Math.PI);
  context.fill();
}
function drawEllipse(xCenter,yCenter,theta,majorAxis,minorAxis) {
  context.translate(xCenter,yCenter);
  context.rotate(theta);
  context.scale(majorAxis,minorAxis);
  drawUnitCircle('#088');
}

context.fillStyle = 'red';
context.fillRect(0,0,100,100);

context.globalAlpha = 0.2
var grd = context.createRadialGradient(0, 0, 0.4, 0, 0, 2);
grd.addColorStop(0, context.fillStyle);
grd.addColorStop(1, "white");
context.scale(100,100);    
context.fillStyle = grd;
//context.fillRect(0,0,1,1);
context.setTransform();


context.beginPath();
context.translate(250,250);
context.scale(100,200);
context.arc(0,0,1,0,2*Math.PI);
context.fill();
