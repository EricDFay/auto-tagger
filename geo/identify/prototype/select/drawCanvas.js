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
var x,y,w,h;

canvas.addEventListener("click", function(event){
  x = event.clientX;
  y = event.clientY;
  if(scene == 0) {
    clear();
    context.beginPath();
    context.arc(x,y,10,0,2*Math.PI);
    context.fillStyle = '#055';
    context.fill();
    scene++;
  }
});

canvas.addEventListener('mousemove', function(event) {
  w = event.clientX;
  h = event.clientY;
  if(scene == 1) {
    scaleY = Math.sqrt((x-w)**2 + (y-h)**2)/10;
    theta = Math.atan2(h,w);
    clear();
    context.beginPath();
    context.setTransform();
    context.scale(1,scaleY);
    context.arc(x,y/scaleY,10,0,2*Math.PI);
    context.rotate(theta);
    context.arc(0,0/scaleY,10,0,2*Math.PI);
    context.fillStyle = '#055';
    context.fill();
/*
    clear();
    context.fillStyle = '#055';
    context.fillRect(x,y,w-x,h-y);
    console.log(x+','+y+','+w+','+h);
*/
  }
});
