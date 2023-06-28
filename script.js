//global variables

let sketchpad = document.getElementById("sketchpad");

// create sketchpad grid

function sketchGrid(noOfGrids){

    for(i=0;i<noOfGrids;i++){

        const grids = document.createElement("div");
        grids.className  = 'grids';
        grids.innerText = 'div'
        sketchpad.append(grids);
    }
    
}

sketchGrid(256);