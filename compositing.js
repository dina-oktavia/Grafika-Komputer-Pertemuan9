var myCanvas = document.getElementById('canvas');
var context = myCanvas.getContext('2d');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

// compositing
context.fillStyle = 'red';
context.fillRect(50,50,100,100);

// globalCompositeOperation = source-atop | source-in | source-out
                            // source-over(default) | destination-atop|
                            // destination-in | destination-out | destination-over
                            // lighter | copy | xor
context.globalCompositeOperation = 'source-over';
context.fillStyle = 'blue';
context.fillRect(100,100,100,100);
