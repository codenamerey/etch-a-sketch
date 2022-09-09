let pad = document.querySelector('.drawing-pad');
let size_selector = document.getElementById('sizeRange');
let pallete = document.querySelector('#pallete');
let eraserButton = document.querySelector('#eraser');
let pixelSize = Math.pow(size_selector.value, 2);
let mousedown = 0;
let color = 'black';
let currentMode = 'regular';

window.addEventListener('mousedown', () => {
    mousedown++;
});

window.addEventListener('mouseup', () => {
    mousedown--;
});

pallete.addEventListener('change', (e) => {
    currentMode = 'regular';
    color = e.target.value;
});
eraserButton.addEventListener('click', () => {
    currentMode = 'eraser';
    color = 'white';
});

console.log(size_selector.value);

pad.style.gridTemplateColumns = `repeat(${size_selector.value}, 1fr)`;
pad.style.gridTemplateRows = `repeat(${size_selector.value}, 1fr)`;

for (let pixel = 1; pixel <= pixelSize; pixel++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    pad.appendChild(grid);
}

let pixels = document.querySelectorAll('.grid');

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', changeColor);
});

size_selector.addEventListener('change', adjustSize);

function adjustSize(e) {
    setPixelSize(e.target.value);
}

function setPixelSize(pixelSize) {
    pad.innerHTML = '';
    this.pixelSize = Math.pow(pixelSize, 2);
    pad.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
    pad.style.gridTemplateRows = `repeat(${pixelSize}, 1fr)`;

    for (let pixel = 1; pixel <= this.pixelSize; pixel++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener('mouseover', changeColor);
        pad.appendChild(grid);        
    }
}

function changeColor(e) {
    if(mousedown < 0) mousedown = 0;
    if(!mousedown) return;
    if(currentMode == 'regular' || currentMode == 'eraser') {
        if(e.target.style.background == color) return;
        else {
            e.target.style.background = color;
        }
    }

    if(currentMode == 'rainbow') {
        
    }
}