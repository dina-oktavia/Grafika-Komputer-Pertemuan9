var myCanvas = document.getElementById('canvas');
var context = myCanvas.getContext('2d');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

// transparan
context.beginPath();
context.rect(100,20,100,100);
context.fillStyle = 'salmon';
context.fill();

// Menggambar lingkaran abu-abutransparan
context.globalAlpha =0.5;
context.beginPath();
context.arcTo(220,120,60,0,2*Math.PI, false);
context.fillStyle = 'grey';
context.fill();
