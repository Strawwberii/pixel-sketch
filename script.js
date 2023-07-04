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
        grids.innerText = 'a';
        sketchpad.append(grids);
    }
    
    
}



// change grid's size

function changeGridSize(input){
    sketchGrid(input)
}

changeGridSize(value);

// change color when 

