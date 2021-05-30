// let grid_div_boxes = []

const grid = document.querySelector('div[class="grid"]');

function create_square_grid(size) {
    grid.innerHTML = ""; // clear all children nodes
    for(let box_count = 0; box_count < size*size; box_count++){
        let grid_box = document.createElement("div");
        grid_box.setAttribute("class","grid-box");
        grid.appendChild(grid_box);
    }
    grid.style.gridTemplateColumns = `repeat(${size},${Math.round(960/size)}px)`;
    grid.style.gridTemplateRows = `repeat(${size},${Math.round(960/size)}px)`;
}

function getBoxes() {
    const grid_div_boxes = document.querySelectorAll('div[class="grid-box"]');
    return Array.from(grid_div_boxes);
}

function add_color_change(box){
    let red = random_color_value(), green = random_color_value(), blue = random_color_value();
    box.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function apply_color_change(boxes){
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', (e) => {add_color_change(box)});
    });
}

create_square_grid(16);

let boxes = getBoxes();

let random_color_value = () => { return Math.round(Math.random() * 255); }

const dimension_button = document.querySelector('button');
dimension_button.addEventListener('click', () => {
    let size = parseInt(prompt("How many squares per side?"));
    if(size > 100) {
        window.alert("Size is too big.")
    } else {
        create_square_grid(size);
        boxes = getBoxes();
        apply_color_change(boxes);
    }
});

apply_color_change(boxes);
