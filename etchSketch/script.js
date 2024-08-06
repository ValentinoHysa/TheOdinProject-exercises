function createGrid(squares){
    const containerLink = document.querySelector(".container"); //we're gonna appendchild on this grid container
    //the idea here is to use flex, define a direction make n=squares divs in 2 nested loops
    //on the outside loop we go to the next row?
    const rows = squares;
    for(row = 0; row < rows; ++row){
        const myRow = document.createElement("div");
        containerLink.appendChild(myRow);   
        for(square = 0; square < squares; ++square){
           const mySquare = document.createElement("div");
            myRow.appendChild(mySquare);
        }                 
        //go to the next row???        
    }
}

createGrid(5);
