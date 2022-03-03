//Dados iniciais 
let currentColor = 'black';
let square = document.querySelector('#tela')
let ctx = square.getContext('2d')
let designCanvas = false;
let mouseX = 0;
let mouseY = 0;


//Eventos
let eventData =document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', clickItem)
})
document.querySelector('.clear').addEventListener('click', clearSquare)
square.addEventListener('mousedown', mouseDownEvent)
square.addEventListener('mousemove', mouseMoveEvent)
square.addEventListener('mouseup', mouseUpEvent)

function clickItem(value){
    let eventValue = value.target.getAttribute('data-color')
 currentColor = eventValue;
 
 document.querySelector('.color.active').classList.remove('active')
 value.target.classList.add('active')

}


function clearSquare(){
ctx.setTransform(1, 0, 0, 1, 0, 0)
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

function mouseDownEvent(e){
    designCanvas = true;
   mouseX = e.pageX - square.offsetLeft
     mouseY = e.pageY - square.offsetTop
 

    
}
function mouseMoveEvent(e){
if(designCanvas){
    draw( e.pageX , e.pageY)
}
}
function mouseUpEvent(){
    designCanvas = false;
}
function draw(x, y ){
    let pointX = x  - square.offsetLeft
    let pointY = y- square.offsetTop

ctx.beginPath()
ctx.lineWidth = 5;
ctx.lineJoin = 'round'
ctx.moveTo(mouseX, mouseY)
ctx.lineTo(pointX, pointY)
ctx.closePath()
ctx.strokeStyle= currentColor;
ctx.stroke();

mouseX = pointX
mouseY = pointY
}