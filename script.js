//global variables

let sketchpad = document.getElementById("sketchpad");
let slider = document.getElementById("slider");
let value = slider.value;
let sliderValue = document.getElementById('sliderValue');


// create sketchpad grid

function sketchGrid(value){

    sketchpad.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${value}, 1fr)`;

    for(i=0;i<(value*value);i++){

        let grids = document.createElement("div");
        grids.className  = 'grids';
        grids.innerText = 'div';
        sketchpad.append(grids);
        
        // change color on hover
        grids.addEventListener('mouseover', function(){
            grids.style.backgroundColor = 'blue';
        });
    }
    
    
}

// change grid's size

function changeGridSize(input){
    sketchGrid(input);
};
changeGridSize(input);

// show sliderValue on screen

