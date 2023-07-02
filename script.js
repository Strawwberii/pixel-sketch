//global variables

let sketchpad = document.getElementById("sketchpad");

// create sketchpad grid

sketchpad.style.gridTemplateColumns = 'repeat(16, 1fr)';
sketchpad.style.gridTemplateRows = 'repeat(16, 1fr)';

function sketchGrid(noOfGrids){

    for(i=0;i<noOfGrids;i++){

        const grids = document.createElement("div");
        grids.className  = 'grids';
        grids.innerText = 'a';
        sketchpad.append(grids);
    }
    
}

sketchGrid(256);

sketchpad.addEventListener('mouseover', function(){
    
})