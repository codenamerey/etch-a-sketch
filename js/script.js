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