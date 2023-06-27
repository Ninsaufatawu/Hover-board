const container = document.getElementById("container");
const colors = ['#46abd5','#22d743','#db1da2','#b2db1d','#db761d','#db1d1d','#db1dd5','#1ddb9c']    
const SQUARES = 500;

const getRandomColors =() => colors[Math.floor(Math.random() * colors.length)];
const setColor = (square)=>{
    const color = getRandomColors();
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}

const removeColor = (square) =>{
    square.style.background = '#1d1d1d';
    square.style.boxShadow = '0 0 2px #0000';
}

for(let i=0; i<SQUARES; i++){
    const square =document.createElement("div");
    square.classList.add("square");

    square.addEventListener('mouseover', ()=> setColor(square));
    square.addEventListener('mouseout', ()=> removeColor(square));
    container.appendChild(square)
}