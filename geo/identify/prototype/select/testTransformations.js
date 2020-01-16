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
palette = [
'#055',
'#066',
'#077',
'#088',
'#099',
'#0aa',
'#0bb'
];
var x = 200,
    y = 50,
    w = 100,
    h = 30;
function draw(i) {
  context.fillStyle = palette[i];
  context.beginPath();
  context.arc(0,0,1,0,2*Math.PI);
  context.fill();
}
// transformation happen in reverse order
/*
context.translate(x,y);
context.rotate(Math.PI/8);
context.scale(w,h);
draw(3);
*/

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

drawEllipse(x,y,Math.PI/2,w,h);
