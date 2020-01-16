var data = [1,23,43,65,2,46,76,34,98,96,74,12,36,28,2,5,7,37,96,2,45,67,4,5,66,07,46,68,34,69,92,83,63,53];

function createHistogram(data, n) {
  var x = data.sort(function (a,b){
    return a-b;
  });
  var a = x[0];
  var b = x[x.length-1];
  bounds = [a];
  for(k=1; k <= n; k++) {
    bounds[bounds.length] = a + k*(b - a)/n;
  }
  var counts = [];
  var ptr = 0;
  while(x[ptr] < bounds[0]){ptr++;}
  for(i = 0; i < n; i++){
    counts[i] = 0;
    while(x[ptr] < bounds[i+1]) {
      counts[i]++;
      ptr++;
    }
  }
  return counts;
}
var nBins = 7;
var histo = createHistogram(data, nBins);
var max = 0;
for(i = 0; i < histo.length; i++) {
  if(histo[i] > max) {max = histo[i];}
}

var x = 100;
var y = 10;
var width = 400;
var height = 520;
context.fillStyle = '#055';
context.fillRect(x,y-2,width+1,height+2);
var xPadding = 5;
var yPadding = 0;
var binWidth = (width)/nBins;
context.fillStyle = '#ee0';
for(i = 0; i < histo.length; i++){
  context.fillRect(x + i*(binWidth) +1, y + height-1, binWidth-1, -histo[i]/max*height);
}

function Bin(data){

}
function Histogram(data, numberBins) {
  this.data = data;
  this.nBins = numberBins;
}
