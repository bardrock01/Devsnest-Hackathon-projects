const canvas = document.querySelector('#mycanvas');
const ctx = canvas.getContext("2d");
const eraser = document.querySelector('.eraser');
const pen = document.querySelector('.pen');
const penSize = document.querySelectorAll('.penSize');
console.log(pen);

var eraserOn = false;
var PenSize = 3;

window.addEventListener("load", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
})


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

for(let i=0;i<penSize.length;i++){
    pen.addEventListener('click',()=>{
        if( penSize[i].classList.contains('flex')){
            penSize[i].classList.remove('flex');
        }else{
            penSize[i].classList.add('flex')
        }
        
    })
    penSize[i].addEventListener('click',()=>{
        PenSize = penSize[i].innerHTML;
        console.log(penSize[i].innerHTML)
    })
}




function draw(event){
    if(!onbtnPress) return;
    ctx.lineWidth = PenSize;
    ctx.lineCap = "round";
    if(eraserOn){
        ctx.lineWidth = PenSize;
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


