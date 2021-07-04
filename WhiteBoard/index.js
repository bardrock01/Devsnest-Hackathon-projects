const canvas = document.querySelector('#mycanvas');
const ctx = canvas.getContext("2d");
const eraser = document.querySelector('.eraser');
const pen = document.querySelector('.pen');
const penSize = document.querySelectorAll('.penSize');
const clrsrc= document.querySelector('.clearScreen');
const shapes = document.querySelector('.shapes');
const ShapeSize = document.querySelectorAll('.ShapeSize');
var colorChange=document.getElementById('favcolor');
const Undo = document.querySelector('.Undo')

var Restore_array=[];
var index = -1;
var eraserOn = false;
var PenSize = 3;
var Shape;
setInterval(colorChanged(),10);
function colorChanged(){
    var color=colorChange.value;
    return color;
}
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

for(let i=0;i<ShapeSize.length;i++){
    shapes.addEventListener('click',()=>{
        if(ShapeSize[i].classList.contains('flex')){
            ShapeSize[i].classList.remove('flex');
        }else{
            ShapeSize[i].classList.add('flex')
        }
        
    })
    ShapeSize[i].addEventListener('click', ()=>{
        Shape = ShapeSize[i].innerHTML;
    })
}

Undo.addEventListener('click', ()=>{
    Restore_array.pop();
    index -=1;
    if(index <0 ){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }else{
        ctx.putImageData(Restore_array[index], 0, 0)

    }
})

function draw(event){
    if(!onbtnPress) return;
    ctx.lineWidth = PenSize;
    ctx.lineCap = "round";
    if(eraserOn){
        ctx.lineWidth = PenSize;
        ctx.strokeStyle = "#ffffff";
    }else{
        var cc=colorChanged();
        ctx.strokeStyle = cc
    }
    
    ctx.lineTo(event.clientX,event.clientY);
    var stro = ctx.stroke();
    // console.log(stro);
    newArr=stro;
    console.log(newArr);
    
    ctx.beginPath();
    ctx.moveTo(event.clientX,event.clientY);
}

function startPosition(event){
    onbtnPress = true;
}

function endPosition(){
    onbtnPress = false;
    Restore_array.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    index +=1;
    console.log(Restore_array)
    ctx.beginPath();
}


clrsrc.addEventListener("click",()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})