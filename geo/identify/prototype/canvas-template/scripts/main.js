var scene = 0;
var x, y, w, h,major,theta;

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
