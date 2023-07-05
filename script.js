//global variables

let sketchpad = document.getElementById("sketchpad");
let gridSquares = sketchpad.querySelectorAll('div');
let clearBtn = document.getElementById("clearbtn");
let slider = document.getElementById("slider");
let value = slider.value;
let sliderValue = document.getElementById('sliderValue');
let color = 'black';
let colorChoose = document.getElementById('colorChoose');
let original = document.getElementById('original');
let rainbowBtn = document.getElementById('rainbowbtn');
let eraserBtn = document.getElementById('eraserbtn');



// create sketchpad grid

function sketchGrid(value){

    sketchpad.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    
    gridSquares.forEach((div) => div.remove());
    for(i=0;i<(value*value);i++){

        let grids = document.createElement("div");
        grids.className  = 'grids';
        sketchpad.append(grids);

        // change color on hover

        grids.addEventListener('mouseover', function(){
            grids.style.backgroundColor = color;
        });
    } 
    console.log(value);
}

// change grid's size (by taking input from slider)

function changeGridSize(input){
    sketchGrid(input);
};

// function to change color of mouseover

function changeColor(colorChoice){
    color = colorChoice;
}

// adding changeColor function to all the buttons

original.addEventListener('click', function(){
    changeColor('black');
});


eraserBtn.addEventListener('click', function(){
    changeColor('wheat');
});

// clear button

function clearGrid(){
    let gridSquares = sketchpad.querySelectorAll('div');
    gridSquares.forEach((div) => div.style.backgroundColor = 'wheat');
};
clearBtn.addEventListener('click', function(){
    clearGrid();
});