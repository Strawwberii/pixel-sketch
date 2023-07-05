//global variables

let sketchpad = document.getElementById("sketchpad");
let gridSquares = sketchpad.querySelectorAll('div');
let clearBtn = document.getElementById("clearbtn");
let slider = document.getElementById("slider");
let value = slider.value;
let sliderValue = document.getElementById('sliderValue');
let color = 'black';
let randomcolor = '';
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

        grids.addEventListener('mouseover', changeDivColor);
    } 
    console.log(value);
}

// change grid's size (by taking input from slider)

function changeGridSize(input){
    sketchGrid(input);
};

// function to changeColor

function changeColor(colorChoice){
    color = colorChoice;
}

//function to apply changeColor

function changeDivColor(){
    if(color === 'random'){
        this.style.backgroundColor= `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else{
    this.style.backgroundColor = color;
    }
}

// make user choose color using color input

colorChoose.addEventListener('change', function(event){
    color = event.target.value;
    changeColor(color);
})

// adding changeColor function to original and eraserbtn

original.addEventListener('click', function(){
    changeColor('black');
});
eraserBtn.addEventListener('click', function(){
    changeColor('#F5F5F5');
});

// rainbow button

rainbowBtn.addEventListener('click', function(){
    changeColor('random');
})
// clear button

function clearGrid(){
    let gridSquares = sketchpad.querySelectorAll('div');
    gridSquares.forEach((div) => div.style.backgroundColor = '#F5F5F5');
};

clearBtn.addEventListener('click', function(){
    clearGrid();
});

// change slider value

function sliderValueFunction(inputvalue){
    sliderValue.textContent = `${inputvalue} x ${inputvalue}`;
}