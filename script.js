//global variables

let sketchpad = document.getElementById("sketchpad");
let slider = document.getElementById("slider");
let value = slider.value;
let sliderValue = document.getElementById('sliderValue');


// create sketchpad grid

function sketchGrid(){

    sketchpad.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${value}, 1fr)`;

    for(i=0;i<(value*value);i++){

        const grids = document.createElement("div");
        grids.className  = 'grids';
        grids.innerText = 'a';
        sketchpad.append(grids);
    }
    
    
}

sketchGrid();

// change slider value
function changeSliderValue(value){
    sliderValue.textContent = `${value} x ${value}`;
}
changeSliderValue(value);

// change color when 

