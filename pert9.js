var myCanvas = document.getElementById('canvas');
var context = myCanvas.getContext('2d');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

// // transparan
// context.beginPath();
// context.rect(100,20,100,100);
// context.fillStyle = 'salmon';
// context.fill();

// // Menggambar lingkaran merah transparan
// context.globalAlpha =0.5;
// context.beginPath();
// context.arcTo(220,120,60,0,2*Math.PI, false);
// context.fillStyle = 'grey';
// context.fill();


// // compositing
// context.fillStyle = 'red';
// context.fillRect(50,50,100,100);

// // globalCompositeOperation = source-atop | source-in | source-out
//                             // source-over(default) | destination-atop|
//                             // destination-in | destination-out | destination-over
//                             // lighter | copy | xor
// context.globalCompositeOperation = 'source-over';
// context.fillStyle = 'blue';
// context.fillRect(100,100,100,100);

// /* clipping */
// // Awal clipping
// var x = myCanvas.width/2;
// var y = myCanvas.height/2;
// var radius = 75;
// var offset = 50;

// context.save();
// context.beginPath();
// context.arc(x, y, radius, 0, 2 * Math.PI, false);
// context.clip();

// // draw salmon circle inside clipping region
// context.beginPath();
// context.arc(x - offset, y - offset, radius, 0, 2*Math.PI, false);
// context.fillStyle = 'salmon';
// context.fill();

// // draw yellow circle inside clipping region
// context.beginPath();
// context.arc(x+offset, y, radius, 0, 2*Math.PI, false);
// context.fillStyle = 'yellow';
// context.fill();

// // restore canvas context ke original statenya
// // sebelum mendefinisikan region clipping
// context.restore();
// context.beginPath();
// context.arc(x,y,radius,0,2*Math.PI,false);
// context.lineWidth = 10;
// context.strokeStyle = 'red';
// context.stroke();
// /* akhir cliiping */


/* Clipping 2 */
// 1
function draw() {
    context.fillRect(0,0,150,150);
    context.translate(75,75);

    // create a circular clipping path
    context.beginPath();
    context.arc(0,0,60,0,Math.PI*2, true);

    // draw background
    var lingRad = context.createLinearGradient(0,-75,0,75);
    lingRad.addColorStop(0,'#232256');
    lingRad.addColorStop(1,'#143778');

    context.fillStyle = lingRad;
    context.fillRect(-75,-75,150,150);

    // draw stars
    for(var j=1; j<50; j++){
        context.save();
        context.fillStyle = '#fff';
        context.translate(75 - Math.floor(Math.random() * 150), 75 - Math.floor(Math.random() *150));
        drawStar(context, Math.floor(Math.random() *4) + 2);
        context.restore();
    }
}

function drawStar(context, r){
    context.save();
    context.beginPath();
    context.moveTo(r,0);
    for(var i=0; i<9; i++){
        context.rotate(Math.PI/5);
        if(i%2 === 0){
            context.lineTo((r/0.525731) * 0.200811,0);
        } else {
            context.lineTo(r,0);
        }
    }
    context.closePath();
    context.fill();
    context.restore();
}
draw();
