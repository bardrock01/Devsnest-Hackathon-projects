const canvas = document.querySelector('#mycanvas')
const ctx = canvas.getContext("2d");
const eraser = document.querySelector('.eraser');

var eraserOn = false;

window.addEventListener("load", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    console.log(window.innerHeight);
    
})

// canvas.height = document.querySelector('canvas').offsetWidth;
// canvas.width = document.querySelector('canvas').offsetWidth;


var onbtnPress = false;

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

eraser.addEventListener("click", () => {
    if (eraserOn) {
        eraserOn = false;
        console.log(eraserOn);
    }
    else {
        eraserOn = true;
        console.log(eraserOn);
    }
});



function draw(event){
    if(!onbtnPress) return;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    if(eraserOn){
        console.log("hello");
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#ffffff";
    }else{
        ctx.strokeStyle = " #000000";
    }
    
    ctx.lineTo(event.clientX,event.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX,event.clientY);
}

function startPosition(event){
    console.log(event);
    onbtnPress = true;
    // draw(e);
    //  ctx.beginPath();
    //  console.log(event.clientX, event.clientY);
    //  ctx.arc(event.clientX, event.clientY, radius, 0, Math.PI*2);
    //  ctx.fillStyle = "#000000";
    //  ctx.fill()
    //  ctx.closePath();
    //  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function endPosition(){
    onbtnPress = false;
    ctx.beginPath();
}


