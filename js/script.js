let pad = document.querySelector('.drawing-pad');
let size_selector = document.getElementById('sizeRange');
let pixelSize = Math.pow(size_selector.value, 2);

console.log(size_selector.value);

pad.style.gridTemplateColumns = `repeat(${size_selector.value}, 1fr)`;
pad.style.gridTemplateRows = `repeat(${size_selector.value}, 1fr)`;

for (let pixel = 1; pixel <= pixelSize; pixel++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    pad.appendChild(grid);
}

let pixels = document.querySelectorAll('.grid');

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
        pad.appendChild(grid);        
    }
}