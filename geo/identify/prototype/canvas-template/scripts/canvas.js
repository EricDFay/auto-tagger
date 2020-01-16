var canvas = document.getElementById('canvasElement');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function clear() {
  var lastStyle = context.fillStyle;
  context.fillStyle = '#333';
  context.fillRect(0,0,canvas.width,canvas.height);
  context.fillStyle = lastStyle;
}
clear();
context.fillStyle = '#088';

function drawUnitCircle(thickness) {
  context.beginPath();
  context.lineWidth = thickness;
  context.arc(0,0,1,0,2*Math.PI);
  context.stroke();
}
function drawUnitDisk() {
  context.beginPath();
  context.globalAlpha = 0.5;
  var grd = context.createRadialGradient(0,0,0.3,0,0,3);
  grd.addColorStop(0,'#088');
  grd.addColorStop(1,'white');
  context.fillStyle = grd;
  context.arc(0,0,1,0,2*Math.PI);
  context.fill();
  context.globalAlpha = 1;
}
function drawEllipse(xCenter,yCenter,theta,majorAxis,minorAxis) {
  context.translate(xCenter,yCenter);
  context.rotate(theta);
  context.scale(majorAxis,minorAxis);
  drawUnitDisk();
  context.setTransform();
}
function drawCircle(x,y,r){
  context.beginPath();
  context.arc(x,y,r,0,2*Math.PI);
  context.fill();
}
function drawPoint(x,y){
  var lastStyle = context.fillStyle;
  var radius = 3;
  context.translate(x,y);
  context.scale(radius,radius);
  context.fillStyle = '#F44';
  drawUnitDisk();
  context.strokeStyle = '#000';
  drawUnitCircle(0.25);
  context.fillStyle = lastStyle;
  context.setTransform();
}
