var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var scene = 0;
var img = new Image();
img.onload = function() {
  context.drawImage(img,0,0);
};
img.src = 'mockup.png';

function clear() {
  var lastStyle = context.fillStyle;
  context.fillStyle = '#333';
  context.fillRect(0,0,canvas.width,canvas.height);
  context.fillStyle = lastStyle;
  context.drawImage(img,0,0);
}
clear();
context.fillStyle = '#088';
var x, y, w, h,major,theta;

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

canvas.addEventListener('click', function(e){
  switch(scene){
    case 0:
      x = e.clientX;
      y = e.clientY;
      drawPoint(x,y);
      scene++;
      break;
    case 1:
      scene++;
      break;
    case 2:
      console.log({
        'mu':[x,y],
	'lambda':[major,minor],
	'q':[
          [Math.cos(theta),Math.sin(theta)],
	  [-Math.sin(theta),Math.cos(theta)]
	]
      });
      scene=0;
      break;
  }
});

document.addEventListener('mousemove', function(e){
  console.log('mousemoved');
  switch(scene){
    case 0:
      break;
    case 1:
      clear();
      w = e.clientX;
      h = e.clientY;
      theta = Math.atan2(h-y,w-x);
      major = Math.sqrt((w-x)**2+(h-y)**2);
      minor = 0.1*major;
      drawEllipse(x,y,theta,major,minor);
      break;
    case 2:
      clear();
      w = e.clientX;
      h = e.clientY;
      phi = Math.atan2(h-y,w-x) - theta;
      minor = Math.sqrt((w-x)**2+(h-y)**2)*Math.sin(phi);
      drawEllipse(x,y,theta,major,minor);
      break;
  }
});
